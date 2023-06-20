import {View, Text, TouchableOpacity} from 'react-native';
import React from 'react';
import {CommonActions} from '@react-navigation/native';
const Cart = ({navigation, route}) => {
  const handleNavigate = () => {
    navigation.dispatch(CommonActions.goBack());
  };
  return (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <Text style={{fontSize: 20}}>{route.name}</Text>
      <TouchableOpacity
        onPress={handleNavigate}
        style={{
          backgroundColor: '#333',
          padding: 15,
          margin: 10,
          borderRadius: 10,
        }}>
        <Text style={{fontSize: 15, color: '#fff'}}>go back</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Cart;
