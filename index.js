/**
 * @format
 */

import {AppRegistry} from 'react-native';
import App from './App';
import {name as appName} from './app.json';
//import Drawer from './src/Drawer';
//import AppNavigator from './src/AppNavigation';
//import Navigation from './src/Navigation';
import 'react-native-gesture-handler';
//import NavigationCommon from './src/CommonActions/NavigationCommon';
 import DrawerActions from './src/screens/DrawerScreens/DrawerActions';
// import Navigation from './src/Navigation';
//import BottomTab from './src/BottomTab';
//import MeterialBottomTab from './src/screens/MeterialBottomTab';

AppRegistry.registerComponent(appName, () => App );
