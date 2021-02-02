import { createStore } from 'redux';
import UpdateJetons from './Reducers/jetonsReducers'
import { persistStore, persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage'
import AsyncStorage from '@react-native-async-storage/async-storage';
const persistConfig = {
    key: 'root',
    storage:AsyncStorage,
  }
const persistedReducer = persistReducer(persistConfig, UpdateJetons)
export default () => {
    let store = createStore(persistedReducer)
    let persistor = persistStore(store)
    return { store, persistor }
}