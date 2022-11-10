import React from 'react'
import {
  SafeAreaView,
  View,
  StyleSheet,
} from 'react-native'
import { Tree } from './components/Tree'

const App = () => {

  return (
    <SafeAreaView style={styles.container}>
        <Tree />
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    height: '100%',
  },
})

export default App
