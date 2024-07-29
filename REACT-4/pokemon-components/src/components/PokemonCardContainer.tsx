import PokemonImage from "./PokemonImage";
import PokemonDescription from "./PokemonDescription";
import PokemonType from "./PokemonType";

interface PokemonCardContainerProps {
  id: number;
  name: string | undefined;
  types: { type: { name: string } }[] | undefined;
  imageUrl: string;
}

const PokemonCardContainer = ({ id, name, types, imageUrl }: PokemonCardContainerProps) => {
  return (
    <div className="card-pokemon">
      <div className="left-side">
        <PokemonDescription id={id} name={name} />
        {types && <PokemonType id={id} types={types} />}
      </div>
      <div className="right-side">
        <PokemonImage imageUrl={imageUrl} />
      </div>
    </div>
  );
};

export default PokemonCardContainer;
