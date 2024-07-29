import { useEffect, useState } from "react";

const url = 'https://pokeapi.co/api/v2/pokemon/'

interface PokemonType {
    type: {
        name: string;
    };
}

interface Pokemon {
    name: string;
    types: PokemonType[];
}

function getData(id: number | string) {
    return fetch(`${url}${id}`)
        .then(response => response.json())
        .then(data => data);
}

function usePokemon(id: number | string) {
    const [pokemon, setPokemon] = useState<Pokemon | null>(null);

    useEffect(() => {
        getData(id)
            .then(pokemon => {
                setPokemon(pokemon);
                console.log(pokemon);
            });
    }, [id]);

    return { pokemon };
}

const getRandomPokemonId = () => Math.floor(Math.random() * 1025) + 1;

function useGetPokemon(id: number) {
    const realId = id.toString().padStart(3, '0');
    return `https://assets.pokemon.com/assets/cms2/img/pokedex/detail/${realId}.png`;
}

function useSearchPokemon(setCurrentId: React.Dispatch<React.SetStateAction<number>>) {
    const searchPokemon = (query: string) => {
        const id = parseInt(query);
        if (!isNaN(id)) {
            setCurrentId(id);
        } else {
            fetch(`${url}${query.toLowerCase()}`)
                .then(response => response.json())
                .then(data => {
                    setCurrentId(data.id);
                })
                .catch(error => {
                    console.error('Error fetching Pokémon:', error);
                });
        }
    };

    return { searchPokemon };
}

export { usePokemon, getRandomPokemonId, useGetPokemon, useSearchPokemon };