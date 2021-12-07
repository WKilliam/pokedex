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
import Routes from './navigation/Routes';
// Modify to add persistor
import {store, persistor} from './services/redux/store/index';

// Components import

const App = () => {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
      <Routes />
      </PersistGate>
    </Provider>
  );
};

export default App;
