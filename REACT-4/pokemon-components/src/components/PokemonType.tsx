interface PokemonTypeProps {
  id: number; 
  types: {
    type: { name: string };
  }[];
}

const getTypeNameAndIcon = (typeName: string) => {
  const formattedName = typeName.charAt(0).toUpperCase() + typeName.slice(1);
  const iconPath = `../src/assets/Pokemon_Type_Icon_${formattedName}.svg`;
  return { formattedName, iconPath };
};

const PokemonType = ({ id, types }: PokemonTypeProps) => {
  return (
    <div className="type-description">
      {types.map((typeInfo) => {
        const { formattedName, iconPath } = getTypeNameAndIcon(typeInfo.type.name);
        const key = `${id}-${typeInfo.type.name}`; 

        return (
          <div key={key} className="type-pokemon">
            <img src={iconPath} alt={formattedName} className="type-icon" />
            {formattedName}
          </div>
        );
      })}
    </div>
  );
};

export default PokemonType;
