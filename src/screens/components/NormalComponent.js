import {Text, View} from 'react-native';
import React, {Component} from 'react';

export class NormalComponent extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    console.log('Normal component')
    return (
      <View style={{marginTop: 50}}>
        <Text style={{fontSize: 30, fontWeight: '600', textAlign: 'center'}}>
          NormalComponent
        </Text>
        
      </View>
    );
  }
}

export default NormalComponent;
