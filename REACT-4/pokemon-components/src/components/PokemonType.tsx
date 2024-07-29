interface PokemonTypeProps {
  id: number; 
  types: {
    type: { name: string };
  }[];
}

const PokemonType = ({ id, types }: PokemonTypeProps) => {
  return (
    <div className="type-description">
      {types.map((typeInfo) => {
        const typeName = typeInfo.type.name.charAt(0).toUpperCase() + typeInfo.type.name.slice(1);
        const typeIcon = `../src/assets/Pokemon_Type_Icon_${typeName}.svg`;
        const key = `${id}-${typeInfo.type.name}`; 

        return (
          <div key={key} className="type-pokemon">
            <img src={typeIcon} alt={typeName} className="type-icon" />
            {typeName}
          </div>
        );
      })}
    </div>
  );
};

export default PokemonType;
