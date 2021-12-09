import React from 'react';
import {FlatList, SafeAreaView, Text} from 'react-native';
import {useSelector} from 'react-redux';

const ListPokemons = () => {
  const store = useSelector(state => state.pokemons);
  return (
    <SafeAreaView>
      <FlatList
        data={store.pokemons}
        renderItem={({item, index}) => {
          return <Text ref={index}>{item.name}</Text>;
        }}
      />
    </SafeAreaView>
  );
};

export default ListPokemons;
