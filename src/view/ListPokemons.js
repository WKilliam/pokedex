import React from 'react';
import {FlatList, SafeAreaView, Text} from 'react-native';
import {useSelector} from 'react-redux';

const ListPokemons = () => {
  const {pokemons} = useSelector(state => state.pokemonsReducer);

  return (
      <SafeAreaView>
          <FlatList
              data={pokemons}
              renderItem={({item, index}) => {
                  return <Text ref={index}>{item.name}</Text>;
              }}
          />
      </SafeAreaView>
  )

};

export default ListPokemons;
