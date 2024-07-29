interface PokemonDescriptionProps {
  id: number;
  name: string | undefined;
}

const PokemonDescription = ({ id, name }: PokemonDescriptionProps) => {
  return (
    <div className="description-pokemon">
      <p className="number-pokemon">#{id}</p>
      <p className="name-pokemon">{name}</p>
    </div>
  );
};

export default PokemonDescription;