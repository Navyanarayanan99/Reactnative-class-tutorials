import {Text, View} from 'react-native';
import React, {Component} from 'react';

export class PureComp extends React.PureComponent {
  constructor(props) {
    super(props);
  }
  render() {
    console.log('Pure component')
    return (
      <View style={{marginTop: 50}}>
        <Text style={{fontSize: 30, fontWeight: '600', textAlign: 'center'}}>
          PureComponent
        </Text>
        
      </View>
    );
  }
}

export default PureComp;
