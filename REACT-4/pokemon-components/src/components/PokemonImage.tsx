interface PokemonImageProps {
  imageUrl: string;
}

const PokemonImage = ({ imageUrl }: PokemonImageProps) => {
  return <img className="pokemonImg" src={imageUrl} alt="Pokémon" />;
};

export default PokemonImage;
