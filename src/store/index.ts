import thunk from 'redux-thunk';
import {configureStore} from '@reduxjs/toolkit';
import {persistStore, persistReducer} from 'redux-persist';
import AsyncStorage from '@react-native-async-storage/async-storage';
import reducers from './reducers';

const persistConfig = {
  key: '@ThaiYenCoffee',
  version: 1,
  storage: AsyncStorage,
  blacklist: ['loading'],
};

const persistedReducer = persistReducer(persistConfig, reducers);

export const store = configureStore({
  reducer: persistedReducer,
  middleware: [thunk],
});

export const persistor = persistStore(store);
