/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
// Redux Imports
import {Provider} from 'react-redux';
import {PersistGate} from 'redux-persist/integration/react';

// Modify to add persistor
import {store, persistor} from './services/redux/store/index';

// Components import
import ListPokemons from './view/ListPokemons';

const App = () => {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <ListPokemons />
      </PersistGate>
    </Provider>
  );
};

export default App;
