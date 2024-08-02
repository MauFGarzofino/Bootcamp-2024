import { useEffect, useState } from "react";

const LIMIT = 25;
const BASE_API_URL = "https://pokeapi.co/api/v2/pokemon";

type Pokemon = {
    name: string;
    url: string;
    id: number;
    types: { type: { name: string } }[];
    imageUrl: string;
};

function fetchData(url: string) {
    return fetch(url).then(response => response.json());
}

function getApiUrl(limit: number, offset: number) {
    return `${BASE_API_URL}?limit=${limit}&offset=${offset}`;
}

function getPokemonDetails(pokemonUrl: string) {
    return fetchData(pokemonUrl).then(pokemonDetails => {
        const realId = pokemonDetails.id.toString().padStart(3, '0');
        const imageUrl = `https://assets.pokemon.com/assets/cms2/img/pokedex/detail/${realId}.png`;

        return {
            name: pokemonDetails.name,
            id: pokemonDetails.id,
            types: pokemonDetails.types,
            imageUrl,
        };
    });
}

export function usePokemonScroll() {
    const [pokemons, setPokemon] = useState<Pokemon[]>([]);
    const [loading, setLoading] = useState(true);
    const [offset, setOffset] = useState(0);

    const loadMorePokemons = () => {
        const url = getApiUrl(LIMIT, offset);
        setLoading(true);

        fetchData(url)
            .then((data) => {
                return Promise.all(
                    data.results.map((pokemon: { url: string }) => getPokemonDetails(pokemon.url))
                );
            })
            .then((detailedPokemons) => {
                setPokemon(old => [...old, ...detailedPokemons]);
                setOffset(oldOffset => oldOffset + LIMIT);
            })
            .catch((error) => {
                console.error("Failed to load more Pokémon:", error);
            })
            .finally(() => {
                setLoading(false);
            });
    };

    useEffect(() => {
        loadMorePokemons();
    }, []);

    return { pokemons, loading, loadMorePokemons };
}

