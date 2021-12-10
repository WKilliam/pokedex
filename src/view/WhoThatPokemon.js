import {Block} from 'galio-framework';
import React, {useEffect, useState} from 'react';
import {Image, StyleSheet, Text, TextInput, View, Button} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import {PokemonService} from '../services/api/pokemon';
import PokemonInformations from './PokemonInformations';
const DEFAULT_NB_TRY = 3;
const WhoThatPokemon = () => {
  const [randomPokemons, setRandomPokemons] = useState([]);
  const [loadRandomPokemons, setLoadRandomPokemons] = useState(true);
  const [pokemonToFond, setPokemonToFond] = useState({});
  const [isPlayGame, setIsPlayGame] = useState(false);
  const [name, setName] = useState('');
  const [attempts, setAttempts] = useState(DEFAULT_NB_TRY);
  const [isRandomise, setIsRandomise] = useState(false);
  const [gameMessage, setGameMessage] = useState('');

  const fetchRandomPokemons = async () => {
    try {
      const data = await PokemonService.get10RandomPokemon();

      setRandomPokemons(data);
      setLoadRandomPokemons(false);
    } catch (e) {
      console.log(e);
    }
  };

  const sleep = milliseconds => {
    return new Promise(resolve => setTimeout(resolve, milliseconds));
  };

  useEffect(() => {
    fetchRandomPokemons();
  }, []);

  if (loadRandomPokemons)
    return (
      <View>
        <Text>Chargement...</Text>
      </View>
    );

  const setPokemon = async () => {
    setIsRandomise(true);
    setIsPlayGame(true);
    setGameMessage('');
    let index = 0;
    let timeSleep = 50;
    while (index < 60) {
      const randomValue = Math.floor(Math.random() * randomPokemons.length);
      setPokemonToFond(
        randomPokemons[randomValue > 0 ? randomValue - 1 : randomValue],
      );
      if (index === 40) timeSleep = timeSleep * 1.5;
      if (index === 50) timeSleep = timeSleep * 2;
      if (index === 52) timeSleep = timeSleep * 1.5;
      if (index === 55) timeSleep = timeSleep * 2;
      if (index === 57) timeSleep = timeSleep * 2;

      await sleep(timeSleep); //wait 5 seconds
      index = index + 1;
    }
    setIsRandomise(false);
  };

  const setDataEndGame = () => {
    fetchRandomPokemons();
    setAttempts(DEFAULT_NB_TRY);
    setName('');
    setIsPlayGame(false);
  };

  const onSubmitResponse = () => {
    let nbTry = attempts;

    if (pokemonToFond.name.toLowerCase() == name.toLowerCase()) {
      setGameMessage('Vous avez gagné');

      setDataEndGame();
    } else {
      nbTry = attempts - 1;
      setGameMessage('Il vous reste ' + nbTry + ' tentative');
      setAttempts(nbTry);
    }

    if (nbTry === 0) {
      setGameMessage('Vous avez perdu');

      setDataEndGame();
    }
  };
  return (
    <SafeAreaView>
      {pokemonToFond && pokemonToFond.name && (
        <View style={styles.imageView}>
          <Image
            style={{marginLeft: 10}}
            source={{
              uri: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${pokemonToFond.id}.png`,
              width: 125,
              height: 125,
            }}
          />

          {attempts != 0 && isPlayGame ? (
            <TextInput
              editable={!isRandomise}
              contextMenuHidden={isRandomise}
              value={name}
              onChangeText={setName}
              style={isRandomise ? styles.isRandomise : styles.input}
            />
          ) : (
            <Text>{pokemonToFond.name}</Text>
          )}
          <Text style={{margin: 'auto'}}>{gameMessage}</Text>
        </View>
      )}
      {isPlayGame && attempts > 0 ? (
        <Button
          title={'Valide'}
          onPress={() => onSubmitResponse()}
          disabled={name.length <= 0}></Button>
      ) : (
        <Button
          title={'Jouer'}
          onPress={() => setPokemon()}
          disabled={!randomPokemons.length || isPlayGame}></Button>
      )}
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  imageView: {
    width: 200,
    height: 200,
    justifyContent: 'center',
    display: 'flex',
    alignItems: 'center',
  },
  inputIsRandomise: {
    height: 40,
    width: 200,
    margin: 12,
    borderWidth: 1,
    opacity: 0.1,
    padding: 10,
  },
  input: {
    height: 40,
    width: 200,
    margin: 12,
    borderWidth: 1,
    padding: 10,
  },
});

export default WhoThatPokemon;
