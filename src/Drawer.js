import {View, Text} from 'react-native';
import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createDrawerNavigator} from '@react-navigation/drawer';
import Home from './screens/DrawerScreens/Home';
import Notification from './screens/DrawerScreens/Notification';
import Chat from './screens/DrawerScreens/Chat';

const MyDrawer = createDrawerNavigator();

const Drawer = () => {
  return (
    <NavigationContainer independent={true}>
      <MyDrawer.Navigator>
        <MyDrawer.Screen name="Home" component={Home} />
        <MyDrawer.Screen name="Notification" component={Notification} />
        <MyDrawer.Screen name="Chat" component={Chat} />
      </MyDrawer.Navigator>
    </NavigationContainer>
  );
};

export default Drawer;
