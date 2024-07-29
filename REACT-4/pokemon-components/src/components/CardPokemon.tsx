import { useState, useEffect } from "react";
import "../styles/card.css";
import {
  usePokemon,
  getRandomPokemonId,
  useGetPokemon,
  useSearchPokemon,
} from "../hooks/api";
import PokemonSearch from "./PokemonSearch";
import NavigationButtons from "./NavigationButtons";
import PokemonCardContainer from "./PokemonCardContainer";
import typeColors from "../assets/colors";

export const Card = () => {
  const [currentId, setCurrentId] = useState(getRandomPokemonId());
  const { pokemon } = usePokemon(currentId);
  const pokemonImage = useGetPokemon(Number(currentId));
  const { searchPokemon } = useSearchPokemon(setCurrentId);

  const colors =
    pokemon?.types
      .map((typeInfo) => typeColors[typeInfo.type.name])
      .find((color) => color) || typeColors["fire"];

  useEffect(() => {
    if (colors) {
      document.documentElement.style.setProperty(
        "--primary-color",
        colors.primary
      );
      document.documentElement.style.setProperty(
        "--secondary-color",
        colors.secondary
      );
      document.documentElement.style.setProperty("--text-color", colors.text);
    }
  }, [colors]);

  const handleNext = () => {
    setCurrentId((prevId) => (prevId < 1025 ? prevId + 1 : 1));
  };

  const handlePrevious = () => {
    setCurrentId((prevId) => (prevId > 1 ? prevId - 1 : 1025));
  };

  const handleRandom = () => {
    setCurrentId(getRandomPokemonId());
  };

  return (
    <div className="container">
      <PokemonSearch onSearch={searchPokemon} />
      {pokemon && (
        <PokemonCardContainer
          id={currentId}
          name={pokemon?.name}
          types={pokemon?.types}
          imageUrl={pokemonImage}
        />
      )}
      <NavigationButtons
        onPrevious={handlePrevious}
        onRandom={handleRandom}
        onNext={handleNext}
      />
    </div>
  );
};

export default Card;
