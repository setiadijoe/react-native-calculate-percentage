import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Greeting from './greetings';
import Blink from './blinking';
import Boxing from './boxing';

export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Boxing />
        <Boxing />
        <Boxing />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    flexDirection: 'row',
  },
  blue : {
    color: 'red',
    fontSize: 30,
  }
});
