/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, {useEffect, useState} from 'react';
// Redux Imports
import {useDispatch} from 'react-redux';
import {PersistGate} from 'redux-persist/integration/react';
import Routes from './src/navigation/Routes';
// Modify to add persistor
import {persistor} from './src/services/redux/store/index';
import {getPokemons} from './src/services/redux/actions/pokemons';
import {Text, View} from 'react-native';

const App = () => {
  const dispatch = useDispatch();
  const fetchPokemons = () => dispatch(getPokemons());

  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    if (!isLoading) fetchPokemons();

    setIsLoading(false);
  }, [isLoading]);

  return (
    <PersistGate loading={null} persistor={persistor}>
      {isLoading ? (
        <View>
          <Text>Loading ....</Text>
        </View>
      ) : (
        <Routes />
      )}
    </PersistGate>
  );
};

export default App;
