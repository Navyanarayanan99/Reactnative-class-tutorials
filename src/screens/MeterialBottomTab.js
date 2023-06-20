import {View, Text} from 'react-native';
import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createMaterialBottomTabNavigator} from '@react-navigation/material-bottom-tabs';
import Home from './DrawerScreens/Home';
import Notification from './DrawerScreens/Notification';
import Chat from './DrawerScreens/Chat';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Entypo from 'react-native-vector-icons/Entypo';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import Profile from './Profile';

const BottomTab = createMaterialBottomTabNavigator();
const TopTab = createMaterialTopTabNavigator();
const MeterialTopTab = () => {
  return (
    <TopTab.Navigator
      sceneContainerStyle={{
        backgroundColor: 'yellow',  
      }}
      tabBarPosition='top'
      screenOptions={{
        //tabBarShowLabel: false
      }}
      >
      <TopTab.Screen name="Home" component={Home} />
      <TopTab.Screen name="Profile" component={Profile} />
    </TopTab.Navigator>
  );
};

const MeterialBottomTab = () => {
  return (
    <NavigationContainer>
      <BottomTab.Navigator>
        <BottomTab.Screen
          name="MeterialTopTab"
          component={MeterialTopTab}
          options={{
            title: 'Home',
            tabBarIcon: color => (
              <AntDesign name="home" size={20} color={color} />
            ),
          }}
        />
        <BottomTab.Screen
          name="Notification"
          component={Notification}
          options={{
            tabBarIcon: () => (
              <AntDesign name="notification" size={20} color={'#000'} />
            ),
          }}
        />
        <BottomTab.Screen
          name="Chat"
          component={Chat}
          options={{
            tabBarIcon: () => <Entypo name="chat" size={20} color={'#000'} />,
            tabBarBadge: 1,
          }}
        />
      </BottomTab.Navigator>
    </NavigationContainer>
  );
};

export default MeterialBottomTab;
