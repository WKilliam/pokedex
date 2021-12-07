import React from 'react';
import {FlatList, SafeAreaView, Text} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import {getPokemons} from '../services/redux/actions';
import {useEffect} from 'react';

const ListPokemons = () => {
  const dispatch = useDispatch();
  const fetchPokemons = () => dispatch(getPokemons());

  const {pokemons} = useSelector(state => state.pokemons);

  useEffect(() => {
    fetchPokemons();
    console.log('Pokemons List : ', pokemons);
  }, []);

  return (
    <SafeAreaView>
      <FlatList
        data={[1, 2]}
        renderItem={({item, index}) => {
          return <Text ref={index}>{item}</Text>;
        }}
      />
    </SafeAreaView>
  );
};

export default ListPokemons;
