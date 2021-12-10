import React, { useState } from "react";
import { FlatList, TextInput, View } from "react-native";
import Cards from "../components/Cards";
import {Block} from "galio-framework";
import { useSelector } from "react-redux";

const ListPokemons = ({navigation}) => {
  const store = useSelector(state => state.pokemons);
  const [array,setArray] = useState(store.pokemons)
  const [search,setSearch] = useState('')

  let updateSearch = (search) => {
    const tngCharacters = array.filter(character => {
      return character.name.includes(search.toLowerCase());
    });
    console.log(search)
    if(search === ''){
      setArray(store.pokemons)
    }else{
      setArray(tngCharacters)
    }
  };

  const renderItem = ({ item }) => <Cards onPress={() => navigation.navigate('Info', item)} data={item} />;

  return (
    <Block>
      <View
        style={{
          backgroundColor: '#fff',
          padding: 10,
          marginLeft:15,
          marginRight:15,
          marginVertical: 5,
          marginBottom:-20,
          borderRadius: 20
        }}
      >
        <TextInput
          autoCapitalize="none"
          autoCorrect={false}
          clearButtonMode="always"
          onChangeText={queryText => updateSearch(queryText)}
          placeholder="Search"
          style={{ backgroundColor: '#fff', paddingHorizontal: 20 }}
        />
      </View>
      <FlatList
        style={{ margin: 5 }}
        data={array}
        numColumns={2}
        keyExtractor={(item, index) => item.id}
        renderItem={renderItem}
      />
      <Button title={'Who\'s that Pokemon ?'} onPress={() => navigation.navigate('Game')}/>
    </Block>
  );
};

export default ListPokemons;
