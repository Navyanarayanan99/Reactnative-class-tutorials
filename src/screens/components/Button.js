import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';

const Button = props => {
  console.log('in button', props.title);
  return (
    <TouchableOpacity
      style={{backgroundColor: 'green', padding: 15, margin: 15}}
      onPress={props.activity}>
      <Text
        style={{
          color: '#fff',
          fontSize: 15,
          fontWeight: '600',
          textAlign: 'center',
        }}>
        {props.title} - {props.itemValue}
      </Text>
    </TouchableOpacity>
  );
};

export default  React.memo(Button);

const styles = StyleSheet.create({});
