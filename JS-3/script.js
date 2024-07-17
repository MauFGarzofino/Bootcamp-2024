const startGameButton = document.getElementById("start-game");
const pokemonContainer = document.getElementById("pokemon-container");
const pokemonImage = document.getElementById("pokemon-img");
const choicesContainer = document.getElementById("choices");
const resultContainer = document.getElementById("result");
const nextPokemonButton = document.getElementById("next-pokemon");
const hintsContainer = document.getElementById("hints-container");
const hintButton = document.getElementById("hint-button");
const timerContainer = document.getElementById("timer");
const attemptsContainer = document.getElementById("attempts");

const apiUrl = 'https://pokeapi.co/api/v2/pokemon/';

let currentPokemon = {};
let timer;
let attempts = 3;
let hintIndex = 0;

async function fetchPokemon() {
    const randomId = getRandomId();
    const response = await fetch(`${apiUrl}${randomId}`);
    const data = await response.json();
    const imageId = formatImageId(randomId);

    const hints = [
        `Ability: ${data.abilities[0].ability.name}`,
        `Type: ${data.types.map(typeInfo => typeInfo.type.name).join(', ')}`
    ];

    return { data, imageId, hints };
}

function formatImageId(id) {
    return id.toString().padStart(3, '0');
}

async function displayPokemon() {
    clearInterval(timer); 
    resultContainer.textContent = "";
    choicesContainer.innerHTML = "";
    hintsContainer.innerHTML = "";
    hintIndex = 0; 

    const { data, imageId, hints } = await fetchPokemon();
    currentPokemon = { ...data, hints };
    pokemonImage.src = `https://assets.pokemon.com/assets/cms2/img/pokedex/detail/${imageId}.png`;
    const choices = [currentPokemon.name];
    pokemonImage.style.filter = "brightness(0%)";

    while (choices.length < 3) {
        const { data: choice } = await fetchPokemon();
        if (!choices.includes(choice.name)) {
            choices.push(choice.name);
        }
    }

    shuffleArray(choices);

    choices.forEach(choice => {
        const button = document.createElement("button");
        button.textContent = choice;
        button.addEventListener("click", () => checkAnswer(choice));
        choicesContainer.appendChild(button);
    });

    startTimer(30);
    updateAttempts(); 
}

function getRandomId() {
    return Math.floor(Math.random() * 1010) + 1;
}

function checkAnswer(choice) {
    resultContainer.className = "";
    if (choice === currentPokemon.name) {
        resultContainer.classList.add("success");
        resultContainer.textContent = `Correct! It's ${currentPokemon.name}`;
        pokemonImage.style.filter = "none";
        clearInterval(timer); 
    } else {
        resultContainer.classList.add("error");
        resultContainer.textContent = `Wrong!`;
        attempts--;
        updateAttempts(); 
        if (attempts <= 0) {
            resultContainer.textContent = `Game over! The correct answer was ${currentPokemon.name}`;
            clearInterval(timer); 
            disableButtons();
            nextPokemonButton.textContent = "Restart Game";
            nextPokemonButton.removeEventListener("click", displayPokemon);
            nextPokemonButton.addEventListener("click", restartGame);
        }
    }
}

function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
}

function startTimer(seconds) {
    let remainingTime = seconds;
    timerContainer.textContent = `Time: ${remainingTime}`;
    timer = setInterval(() => {
        remainingTime--;
        timerContainer.textContent = `Time: ${remainingTime}`;
        if (remainingTime <= 0) {
            clearInterval(timer);
            resultContainer.textContent = `Time's up! The correct answer was ${currentPokemon.name}`;
            attempts--;
            updateAttempts(); 
            if (attempts <= 0) {
                resultContainer.textContent = `Game over! The correct answer was ${currentPokemon.name}`;
                disableButtons();
                nextPokemonButton.textContent = "Restart Game";
                nextPokemonButton.removeEventListener("click", displayPokemon);
                nextPokemonButton.addEventListener("click", restartGame);
            } else {
                displayPokemon();
            }
        }
    }, 1000);
}

function updateAttempts() {
    attemptsContainer.textContent = `Attempts: ${attempts}`;
}

function disableButtons() {
    const buttons = choicesContainer.querySelectorAll("button");
    buttons.forEach(button => button.disabled = true);
    hintButton.disabled = true;
}

function restartGame() {
    attempts = 3; 
    updateAttempts();
    hintButton.disabled = false;
    nextPokemonButton.textContent = "Next Pokemon";
    nextPokemonButton.removeEventListener("click", restartGame);
    nextPokemonButton.addEventListener("click", displayPokemon);
    displayPokemon();
}

function startGame() {
    startGameButton.style.display = "none";
    pokemonContainer.style.display = "flex";
    attempts = 3; 
    updateAttempts();
    displayPokemon();
}

function showHint() {
    if (hintIndex < currentPokemon.hints.length) {
        const hintParagraph = document.createElement('p');
        hintParagraph.textContent = currentPokemon.hints[hintIndex];
        hintsContainer.appendChild(hintParagraph);
        hintIndex++;
    } else {
        const hintParagraph = document.createElement('p');
        hintParagraph.textContent = "No more hints available.";
        hintParagraph.classList.add("no-hints");
        hintsContainer.appendChild(hintParagraph);
    }
}

function init() {
    nextPokemonButton.addEventListener("click", displayPokemon);
    startGameButton.addEventListener("click", startGame);
    hintButton.addEventListener("click", showHint);
}

init();
