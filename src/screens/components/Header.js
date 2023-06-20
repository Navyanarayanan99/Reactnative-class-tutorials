import {View, Text} from 'react-native';
import React, {useState, Component, useContext, useEffect} from 'react';
import { UserContext } from './AppContext';

const Header = () => {
    const user = useContext(UserContext);
   
    useEffect(() => {
        setTimeout(() => {
            user.handleScreenName();
        }, 5000); 
    },[]);
  return (
    <View
      style={{
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        backgroundColor: 'green',
        padding: 15,
      }}>
      <Text style={{fontSize: 20, color: 'white'}}>Header</Text>
      <Text style={{fontSize: 20, color: 'white'}}>{user.screenName}</Text>
    </View>
  );
};

export default Header;


