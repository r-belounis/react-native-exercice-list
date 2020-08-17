import { StatusBar } from 'expo-status-bar';
import React, { Component } from 'react';
import { StyleSheet, Dimensions, View } from 'react-native';
import Countries from './components/Countries'

class App extends Component {

  render() {
    return (
      <View style={styles.container}>
        <StatusBar style="auto" />
        <Countries />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    top: 20,
    width: Dimensions.get('window').width,
	  height: Dimensions.get('window').height,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center'
  }
});

export default App;