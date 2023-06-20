import {View, Text, TouchableOpacity} from 'react-native';
import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {createDrawerNavigator} from '@react-navigation/drawer';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import Profile from '../Profile';
import Settings from '../Settings';
import Notification from './Notification';
import Home from './Home';
import Chat from './Chat';
import Wishlist from './Wishlist';
import Title from '../../Custom/Title';
import AntDesign from 'react-native-vector-icons/AntDesign';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import MyTab from '../../Custom/MyTab';
const Stack = createNativeStackNavigator();
const Drawerr = createDrawerNavigator();
const TopNav = createBottomTabNavigator();

const Tab = () => {
  return (
    <TopNav.Navigator tabBar={props => <MyTab {...props} />}>
      <TopNav.Screen name="Home" component={Home} />
      <TopNav.Screen name="Chat" component={Chat} />
      <TopNav.Screen name="Wishlist" component={Wishlist} />
    </TopNav.Navigator>
  );
};

const DrawerNav = () => {
  return (
    <Drawerr.Navigator>
      <Drawerr.Screen name="Tab" component={Tab} options={{headerShown: false, title: 'Home'}} />
      <Drawerr.Screen name="Notification" component={Notification} />
      <Drawerr.Screen name="Settings" component={Settings} />
    </Drawerr.Navigator>
  );
};

const DrawerActions = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Profile" component={Profile} options={{
          // title: 'Hi, User!',
          // headerStyle: {
          //   backgroundColor: 'blue'
          // },
          // headerTintColor: '#fff',
          // headerTitleStyle: {
          //   fontWeight: 'bold'
          // },
          // headerTitle: props => <Title {...props} />,
          // headerRight: () => <TouchableOpacity>
          //    <AntDesign name='user' size={28} color={'#000'}/>
          // </TouchableOpacity>
          header: () => <Title />
        }}/>
        <Stack.Screen name="DrawerNav" component={DrawerNav} options={{headerShown:false}}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default DrawerActions;


// import {View, Text} from 'react-native';
// import React from 'react';
// import {NavigationContainer} from '@react-navigation/native';
// import {createDrawerNavigator} from '@react-navigation/drawer';
// import HomeDrawerAction from './HomeDrawerAction';
// import NotificationDrawerAction from './NotificationDrawerAction';
// import SettingsDrawerActions from './SettingsDrawerActions';

// const Drawer = createDrawerNavigator();

// const DrawerActions = () => {
//   return (
//     <NavigationContainer>
//       <Drawer.Navigator >
//         <Drawer.Screen
//           name="HomeDrawerAction"
//           component={HomeDrawerAction}
//         />
//         <Drawer.Screen
//           name="NotificationDrawerAction"
//           component={NotificationDrawerAction}
//         />
//         <Drawer.Screen
//           name="SettingDrawerAction"
//           component={SettingsDrawerActions}
//         />
//       </Drawer.Navigator>
//     </NavigationContainer>
//   );
// };

// export default DrawerActions;
