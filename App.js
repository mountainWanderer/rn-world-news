
import React from 'react';
import {
  SafeAreaView,
  StatusBar
} from 'react-native'

import { Provider } from 'react-redux'

import store from './src/redux/store'
import MainFeed from './src/screens/feed/MainFeed'

const App = () => {
  return (
    <Provider store={store}>
      <StatusBar barStyle="light-content" backgroundColor="#212121" />
      <SafeAreaView style={{ backgroundColor: '#212121' }}>
        <MainFeed />
      </SafeAreaView>
    </Provider>
  )
}

export default App
