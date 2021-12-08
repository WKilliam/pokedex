import React from 'react';
import {FlatList, Image, SafeAreaView, Text, View, StyleSheet} from 'react-native';
import {useSelector} from 'react-redux';

const ListPokemons = () => {
  const {pokemons} = useSelector(state => state.pokemonsReducer);

  const pokemonCard = (index, item) => {
      return (
          <View style={styles.pokeCard}>
              <Text ref={index}>{item.name}</Text>
              <Image
                  source={{
                      uri: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/${(index + 1)}.png`,
                  }}
                  style={styles.pokeImg}
              />
          </View>
      )
  }

  return (
      <SafeAreaView>
          <FlatList
              data={pokemons}
              style={styles.container}
              renderItem={({item, index}) => {
                  return (
                      pokemonCard(index, item)
              );
              }}
          />
      </SafeAreaView>
  )

};

const styles = StyleSheet.create({
    container: {
    },
    pokeImg: {
        width: 50,
        height: 50,
    },
    pokeCard: {
        width: '40%',
    }
})

export default ListPokemons;
