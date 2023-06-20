import {View, Text, TouchableOpacity} from 'react-native';
import React from 'react';
import {CommonActions, StackActions} from '@react-navigation/native';
const Settings = ({navigation, route}) => {
  const handleNavigate = () => {
    // navigation.dispatch(CommonActions.goBack());
   // navigation.dispatch(StackActions.pop(2));
    navigation.dispatch(StackActions.popToTop());

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

export default Settings;
