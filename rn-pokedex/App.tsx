import React from 'react';
import { SafeAreaView, StyleSheet, StatusBar } from 'react-native';
import PokemonList from './components/PokemonList';
import WaterIcon from './assets/svg/TypeIcon';

const App = () => {
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="dark-content" />
      <PokemonList />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});

export default App;
