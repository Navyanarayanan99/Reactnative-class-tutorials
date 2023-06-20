import {View, Text} from 'react-native';
import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Home from '../screens/DrawerScreens/Home';
import Notification from '../screens/DrawerScreens/Notification';
import Profile from '../screens/Profile';
import Chat from '../screens/DrawerScreens/Chat';
import Cart from '../screens/Cart';
import Settings from '../screens/Settings';

const MyNav = createNativeStackNavigator();
const NavigationCommon = () => {
  return (
    <NavigationContainer>
      <MyNav.Navigator>
        <MyNav.Screen name="Home" component={Home} />
        <MyNav.Screen name="Notification" component={Notification} />
        <MyNav.Screen name="Profile" component={Profile} />
        <MyNav.Screen name="Chat" component={Chat} />
        <MyNav.Screen name="Cart" component={Cart} />
        <MyNav.Screen name="Settings" component={Settings} />
      </MyNav.Navigator>
    </NavigationContainer>
  );
};

export default NavigationCommon;
