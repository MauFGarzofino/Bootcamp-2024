import React from 'react';
import { View, StyleSheet, Text } from 'react-native';
import PokemonImage from './PokemonImage';
import PokemonDescription from './PokemonDescription';
import PokemonType from './PokemonType';
import typeColors from '../assets/colors';

interface PokemonCardContainerProps {
  id: number;
  name: string | undefined;
  types: { type: { name: string } }[] | undefined;
  imageUrl: string;
}

const PokemonCardContainer = ({ id, name, types, imageUrl }: PokemonCardContainerProps) => {
  const primaryType = types?.[0]?.type.name || 'normal';
  const colors = typeColors[primaryType] || typeColors['normal'];

  return (
    <View style={[styles.cardPokemon, { backgroundColor: colors.primary}]}>
      <View style={styles.leftSide}>
        <PokemonDescription id={id} name={name} textColor={colors.text} />
        {types && <PokemonType id={id} types={types} textColor={colors.text} borderColor={colors.secondary} />}
      </View>
      <View style={styles.rightSide}>
        <PokemonImage imageUrl={imageUrl} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
    cardPokemon: {
      flexDirection: 'row',
      padding: 10,
      borderRadius: 10,
      shadowColor: '#000',
      shadowOffset: { width: 5, height: 5 },
      shadowOpacity: 1,
      shadowRadius: 4,
      elevation: 5,
      marginBottom: 5,
      marginTop: 5,
      alignSelf: 'center', 
      minWidth: 300, 
      flexShrink: 1, 
    },
    leftSide: {
      flex: 1,
      paddingRight: 10,
    },
    rightSide: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'flex-end',
    }
  });
  
export default PokemonCardContainer;
