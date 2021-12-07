/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */
// Redux Imports
import {Provider} from 'react-redux';
import Reducer from './services/redux/reducers/index';
import {createStore} from 'redux';

// Components import
import ListPokemons from './view/ListPokemons';

// Redux Persist
import {persistStore, persistReducer} from 'redux-persist';
import {PersistGate} from 'redux-persist/integration/react';
import storage from 'redux-persist/lib/storage';

const persistConfig = {
  key: 'root',
  storage,
};

const persistedReducer = persistReducer(persistConfig, Reducer);
const store = createStore(persistedReducer);
let persistor = persistStore(store);

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
