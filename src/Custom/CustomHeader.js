import {View, Text} from 'react-native';
import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {createDrawerNavigator} from '@react-navigation/drawer';
import {createTopTabNavigator} from '@react-navigation/bottom-tabs';
import Profile from '../screens/Profile';
import Home from '../screens/DrawerScreens/Home';
import Chat from '../screens/DrawerScreens/Chat';
import Wishlist from '../screens/DrawerScreens/Wishlist';
import Notification from '../screens/DrawerScreens/Notification';
import Settings from '../screens/Settings';

const Stack = createNativeStackNavigator();
const Drawerr = createDrawerNavigator();
const TopNav = createTopTabNavigator();

const Tab = () => {
  return (
    <TopNav.Navigator>
      <TopNav.Screen name="Home" component={Home} />
      <TopNav.Screen name="Chat" component={Chat} />
      <TopNav.Screen name="Wishlist" component={Wishlist} />
    </TopNav.Navigator>
  );
};

const DrawerNav = () => {
  return (
    <Drawerr.Navigator>
      <Drawerr.Screen name="Tab" component={Tab} />
      <Drawerr.Screen name="Notification" component={Notification} />
      <Drawerr.Screen name="Settings" component={Settings} />
    </Drawerr.Navigator>
  );
};

const CustomHeader = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Profile" component={Profile} />
        <Stack.Screen name="DrawerNav" component={DrawerNav} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default CustomHeader;
