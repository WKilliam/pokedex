import {createStore} from 'redux';

// Redux Persist
import {persistStore, persistReducer} from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import Reducer from '../reducers/index';

const persistConfig = {
  key: 'root',
  storage,
};

const persistedReducer = persistReducer(persistConfig, Reducer);

export const store = createStore(persistedReducer);
export const persistor = persistStore(store);
