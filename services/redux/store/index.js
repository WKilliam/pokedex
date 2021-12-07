import {createStore, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';

// Redux Persist
import AsyncStorage from '@react-native-community/async-storage';
import {persistStore, persistReducer} from 'redux-persist';
import Reducer from '../reducers/index';

const persistConfig = {
  key: 'root',
  version: 0,
  storage: AsyncStorage,
};

const persistedReducer = persistReducer(persistConfig, Reducer);

export const store = createStore(persistedReducer, applyMiddleware(thunk));
export const persistor = persistStore(store);
