import {FlatList, SafeAreaView, Text} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import {getPokemons} from '../services/redux/actions';
import {useEffect} from 'react';
import pokemonsReducer from '../services/redux/reducers';

const ListPokemons = () => {
  const dispatch = useDispatch();
  const fetchPokemons = () => dispatch(getPokemons());

  const {pokemons} = useSelector(state => state.pokemonsReducer);

  useEffect(() => {
    fetchPokemons();
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
