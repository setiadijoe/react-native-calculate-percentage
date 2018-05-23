import React, { Component } from 'react';
import { View } from 'react-native';

export default class FlexDimensionBasic extends Component {
  render () {
    return (
      <View style={{flex: 0.09, flexDirection: 'column', justifyContent: 'space-between'}}>
        <View style={{width: 50, height: 50, backgroundColor: 'blue'}} />
        <View style={{width: 50, height: 50, backgroundColor: 'red'}} />
        <View style={{width: 50, height: 50, backgroundColor: 'green'}} />
      </View>
    )
  }
}