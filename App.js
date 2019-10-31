
import React from 'react';
import {
  SafeAreaView,
  StatusBar
} from 'react-native'

import MainFeed from './src/screens/feed/MainFeed'

const App = () => {
  return (
    <>
      <StatusBar barStyle="light-content" backgroundColor="#212121" />
      <SafeAreaView style={{ backgroundColor: '#212121' }}>
        <MainFeed />
      </SafeAreaView>
    </>
  )
}

export default App
