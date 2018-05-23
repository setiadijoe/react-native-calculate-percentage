import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Greeting from './greetings';
import Blink from './blinking';

export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Greeting name='Melinda' />
        <Greeting name='Jenny' />
        <Greeting name='Lucas' />
        <Blink text='You are blinking ' />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
