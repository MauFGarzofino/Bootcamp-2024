import React from "react";
import { View, Text, StyleSheet } from "react-native";
import typeIcons from "../assets/typeIcons";

interface PokemonTypeProps {
  id: number;
  types: {
    type: { name: string };
  }[];
  textColor: string;
  borderColor?: string;
}

const getTypeNameAndIcon = (typeName: string) => {
  const formattedName = typeName.charAt(0).toUpperCase() + typeName.slice(1);
  const IconComponent = typeIcons[formattedName];
  return { formattedName, IconComponent };
};

const PokemonType = ({ id, types, textColor, borderColor}: PokemonTypeProps) => {
  return (
    <View style={styles.typeDescription}>
      {types.map((typeInfo) => {
        const { formattedName, IconComponent } = getTypeNameAndIcon(typeInfo.type.name);
        const key = `${id}-${typeInfo.type.name}`;

        return (
          <View key={key} style={[styles.typePokemon, {backgroundColor: borderColor}]}>
            {IconComponent && (
              <IconComponent width={12} height={12} />
            )}
            <Text style={[styles.text, {color: textColor}]}>{formattedName}</Text>
          </View>
        );
      })}
    </View>
  );
};

const styles = StyleSheet.create({
  typeDescription: {
    flexDirection: "row",
    marginBottom: 10,
    gap: 4,
  },
  typePokemon: {
    marginTop: 20,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    padding: 3,
    gap: 4,
    borderColor: 'white',
    borderWidth: 2,
    borderRadius: 5,
  },
  text: {
    color: "white",
  },
});

export default PokemonType;
