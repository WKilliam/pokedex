import React, {useState} from 'react';
import {
  FlatList,
  TextInput,
  View,
  Button,
  Text,
  TouchableOpacity,
} from 'react-native';
import Cards from '../components/Cards';
import {Block} from 'galio-framework';
import {useSelector} from 'react-redux';
import {argonTheme} from '../config';

const ListPokemons = ({navigation}) => {
  const store = useSelector(state => state.pokemons);
  const [array, setArray] = useState(store.pokemons);
  const [search, setSearch] = useState('');

  const renderItem = ({item}) => (
    <Cards
      key={item.name}
      onPress={
        () => console.log('pokemon')

        // navigation.navigate('Info', item)
      }
      data={item}
    />
  );

  return (
    <Block>
      <View
        style={{
          backgroundColor: '#fff',
          padding: 10,
          marginLeft: 15,
          marginRight: 15,
          marginVertical: 5,
          marginBottom: -20,
          borderRadius: 20,
        }}>
        <TextInput
          autoCapitalize="none"
          autoCorrect={false}
          clearButtonMode="always"
          onChangeText={queryText => updateSearch(queryText)}
          placeholder="Search"
          style={{backgroundColor: '#fff', paddingHorizontal: 20}}
        />
      </View>
      {/*<Block card style={{margin:30}}>*/}
      {/*  <Button title={'Who\'s that Pokemon ?'} />*/}
      {/*</Block>*/}
      <Block style={{margin: 5, marginTop: 20}}>
        <Block
          middle
          card
          style={{
            margin: 5,
            marginLeft: 20,
            marginRight: 20,
            high: 20,
            backgroundColor: argonTheme.COLORS.WHITE,
          }}>
          <TouchableOpacity onPress={() => navigation.navigate('Game')}>
            <Text style={{fontSize: 20}}>Who's that Pokemon ?</Text>
          </TouchableOpacity>
        </Block>
        <Block
          middle
          card
          style={{
            marginLeft: 20,
            marginRight: 20,
            high: 20,
            backgroundColor: argonTheme.COLORS.RED,
          }}>
          <TouchableOpacity onPress={() => navigation.navigate('ReadMe')}>
            <Text style={{fontSize: 20}}>ReadMe</Text>
          </TouchableOpacity>
        </Block>
      </Block>
      <FlatList
        style={{margin: 5}}
        data={array}
        numColumns={2}
        renderItem={renderItem}
      />
    </Block>
  );
};

export default ListPokemons;
