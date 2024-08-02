import React from 'react';
import { Image, StyleSheet } from 'react-native';

interface PokemonImageProps {
  imageUrl: string;
}

const PokemonImage = ({ imageUrl }: PokemonImageProps) => {
  return <Image style={styles.pokemonImg} source={{ uri: imageUrl }} />;
};

const styles = StyleSheet.create({
  pokemonImg: {
    width: 120, 
    height: 120,
    shadowColor: '#000',
    shadowOffset: { width: 5, height: 5 },
    shadowOpacity: 1,
    shadowRadius: 4,
    elevation: 2,
  },
});

export default PokemonImage;
