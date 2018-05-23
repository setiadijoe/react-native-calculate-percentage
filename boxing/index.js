import React, { Component } from 'react';
import { View } from 'react-native';

export default class FlexDimensionBasic extends Component {
  render () {
    return (
      <View style={{flex: 1}}>
        <View style={{flex: 1, backgroundColor: 'blue'}} />
        <View style={{flex: 2, backgroundColor: 'red'}} />
      </View>
    )
  }
}