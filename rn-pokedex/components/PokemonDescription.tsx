import React from "react";
import { View, Text, StyleSheet } from "react-native";

interface PokemonDescriptionProps {
  id: number;
  name: string | undefined;
  textColor?: string;
}

const capitalizeFirstLetter = (string: string) => {
  return string.charAt(0).toUpperCase() + string.slice(1);
};

const PokemonDescription = ({
  id,
  name,
  textColor,
}: PokemonDescriptionProps) => {
  return (
    <View style={styles.descriptionPokemon}>
      <Text style={[styles.numberPokemon, { color: textColor }]}>#{id}</Text>
      <Text style={[styles.numberPokemon, { color: textColor }]}>
        {capitalizeFirstLetter(name || "")}
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  descriptionPokemon: {
    marginBottom: 10,
  },
  numberPokemon: {
    fontSize: 16,
    fontWeight: "bold",
    color: "white",
  },
  namePokemon: {
    color: "white",
    fontSize: 18,
    fontWeight: "500",
  },
});

export default PokemonDescription;
