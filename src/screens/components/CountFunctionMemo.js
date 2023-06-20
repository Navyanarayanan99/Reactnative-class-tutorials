import {View, Text, TouchableOpacity} from 'react-native';
import React, {useState} from 'react';

const CountFunction = (props) => {
    const {count, incCount}= props
  return (
    <View style={{marginTop: 50}}>
      <Text style={{fontSize: 30, fontWeight: '600', textAlign: 'center'}}>
        CountFunction {count}
      </Text>
      <TouchableOpacity
      onPress={incCount}
      style={{backgroundColor: 'green', padding: 15, margin: 15, alignItems: 'center', justifyContent: 'center'}} >
        <Text>Click</Text>
      </TouchableOpacity>
    </View>
  );
};

export default CountFunction;
