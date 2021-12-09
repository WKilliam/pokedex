import {createStore, applyMiddleware, combineReducers, compose} from 'redux';
import thunk from 'redux-thunk';

// Redux Persist
import AsyncStorage from '@react-native-community/async-storage';
import {persistStore, persistReducer} from 'redux-persist';

import auth from '../reducers/auth';
import pokemons from '../reducers/pokemons';
import createDebounce from 'redux-debounced';
const persistConfig = {
  key: 'root',
  storage: AsyncStorage,
};

const middlewares = [thunk, createDebounce()];

const composeEnhancers = window.REDUX_DEVTOOLS_EXTENSION_COMPOSE || compose;

const rootReducer = combineReducers({
  pokemons: persistReducer(persistConfig, pokemons),
  auth,
});

const store = createStore(
  rootReducer,
  {},
  composeEnhancers(applyMiddleware(...middlewares)),
);

const persistor = persistStore(store);

export {store, persistor};
