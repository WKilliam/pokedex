import {FlatList, SafeAreaView, Text} from 'react-native';
import {PokemonService} from '../services/api/pokemon';
import {useEffect, useState} from 'react';

const ListPokemons = () => {
  const [pokemons, setPokemons] = useState(null);

  useEffect(() => {
    async function getPokemons() {
      const allPokemons = await PokemonService.getPokemons();
      setPokemons(allPokemons);
    }

    getPokemons();

    console.log('Pokemons List : ', pokemons);
  }, []);

  return (
    // eslint-disable-next-line react/react-in-jsx-scope
    <SafeAreaView>
      {/* eslint-disable-next-line react/react-in-jsx-scope */}
      <FlatList
        data={[1, 2]}
        renderItem={({item, index}) => {
          // eslint-disable-next-line react/react-in-jsx-scope
          return <Text ref={index}>{item}</Text>;
        }}
      />
    </SafeAreaView>
  );
};

export default ListPokemons;
