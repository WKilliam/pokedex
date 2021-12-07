import React, {useEffect, useState} from 'react';
import {FlatList, SafeAreaView, Text, View} from 'react-native';
import PokemonService from '../services/api/pokemon';

const PokemonInformations = props => {
  const {navigation} = props.navigation;
  const [pokemon, setPokemon] = useState({});
  const [isLoading, setIsLoading] = useState(true);

  const _setPokemon = async name => {
    name = 'bulbasaur';
    const pokemon = await PokemonService.getPokemonByName(name);
    setPokemon(pokemon);
    setIsLoading(false);
    console.log(pokemon);
  };
  useEffect(() => {
    _setPokemon();
  }, []);

  if (isLoading) return <View></View>;

  return (
    <View>
      <Text>{pokemon.name}</Text>
    </View>
  );
};

export default PokemonInformations;
