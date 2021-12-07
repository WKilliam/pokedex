import React, {useState} from 'react';
import {FlatList, SafeAreaView, Text, View} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import {getPokemons} from '../services/redux/actions';
import {useEffect} from 'react';

const ListPokemons = () => {
  const dispatch = useDispatch();
  const {pokemons} = useSelector(state => state.pokemonsReducer);
  const [isLoading, setIsLoading] = useState(true)

  const fetchPokemons = async () => await dispatch(getPokemons())

  useEffect(() => {
    if(!isLoading)
        fetchPokemons();

    setIsLoading(false)

    console.log('Pokemons List : ', pokemons);
  }, [pokemons]);

  if(isLoading) return <View/>

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
