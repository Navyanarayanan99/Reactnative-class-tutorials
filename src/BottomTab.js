import { View, Text } from 'react-native'
import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import Home from './screens/DrawerScreens/Home';
import Notification from './screens/DrawerScreens/Notification';
import Chat from './screens/DrawerScreens/Chat';
import Drawer from './Drawer';

const MyTab  = createBottomTabNavigator();
const BottomTab = () => {
  return (
  <NavigationContainer >
    <MyTab.Navigator>
        <MyTab.Screen name='MyDrawer' component={Drawer} options={{headerShown: false, title: 'Home'}}/>
        <MyTab.Screen name='Notification' component={Notification} />
        <MyTab.Screen name='Chat' component={Chat} />
    </MyTab.Navigator>
  </NavigationContainer>
  )
}

export default BottomTab