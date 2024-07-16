const startGameButton = document.getElementById("start-game");
const pokemonContainer = document.getElementById("pokemon-container");
const pokemonImage = document.getElementById("pokemon-img");
const choicesContainer = document.getElementById("choices");
const resultContainer = document.getElementById("result");
const nextPokemonButton = document.getElementById("next-pokemon");

const apiUrl = 'https://pokeapi.co/api/v2/pokemon/';

let currentPokemon = {};

async function fetchPokemonById(id) {
    const response = await fetch(`${apiUrl}${id}`);
    const data = await response.json();
    const imageId = id.toString().padStart(3, '0');
    return { data, imageId };
}

async function fetchPokemon() {
    const randomId = getRandomId();
    const response = await fetch(`${apiUrl}${randomId}`);
    const data = await response.json();
    const imageId = formatImageId(randomId);

    return { data, imageId };
}

function formatImageId(id) {
    return id.toString().padStart(3, '0');
}

async function displayPokemon() {
    resultContainer.textContent = "";
    choicesContainer.innerHTML = "";
    const { data, imageId } = await fetchPokemon();
    currentPokemon = data;
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
}

async function displaySearchedPokemon(pokemonData) {
    resultContainer.textContent = "";
    choicesContainer.innerHTML = "";
    const { data, imageId } = pokemonData;
    currentPokemon = data;
    pokemonImage.src = `https://assets.pokemon.com/assets/cms2/img/pokedex/detail/${imageId}.png`;
    pokemonImage.style.filter = "none"; 

    resultContainer.textContent = `You searched for: ${currentPokemon.name}`;
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
    } else {
        resultContainer.classList.add("error");
        resultContainer.textContent = `Wrong!`;
    }
}

function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
}

function startGame() {
    startGameButton.style.display = "none";
    pokemonContainer.style.display = "flex";
    displayPokemon();
}

function init() {
    nextPokemonButton.addEventListener("click", displayPokemon);
    startGameButton.addEventListener("click", startGame);
}

init();
