import React from "react";
import { FlatList, ActivityIndicator } from "react-native";
import { usePokemonScroll } from "../hooks/api";
import PokemonCardContainer from "./PokemonCardContainer";

const PokemonList = () => {
  const { pokemons, loading, loadMorePokemons } = usePokemonScroll();

  const handleLoadMore = () => {
    if (!loading) {
      loadMorePokemons();
    }
  };

  return (
    <FlatList
      data={pokemons}
      keyExtractor={(item) => item.id.toString()}
      renderItem={({ item }) => (
        <PokemonCardContainer
          id={item.id}
          name={item.name}
          imageUrl={item.imageUrl}
          types={item.types}
        />
      )}
      onEndReached={handleLoadMore}
      onEndReachedThreshold={0.5}
      ListFooterComponent={
        loading ? <ActivityIndicator size="large" /> : null
      }
    />
  );
};

export default PokemonList;
