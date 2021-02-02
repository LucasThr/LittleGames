// App.js

import React from 'react'
import Navigation from './Navigation/Navigation'
import { View,StyleSheet, Image } from 'react-native';
import { Provider } from 'react-redux'
import configureStore from './Store/configureStore';
const {store, persistor} = configureStore();
import { PersistGate } from 'redux-persist/integration/react'

export default class App extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
          <Navigation/>
        </PersistGate>
      </Provider>
    )
  }
}
