import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import { DrawerActions } from '@react-navigation/native'

const HomeDrawerAction = ({navigation, route}) => {

  const handleNavigation = () => {
    navigation.dispatch(DrawerActions.openDrawer());
    // navigation.dispatch(DrawerActions.closeDrawer());
    // navigation.dispatch(DrawerActions.toggleDrawer());
    //navigation.dispatch(DrawerActions.jumpTo('Notification'));
  }
  return (
    <View style={{flex: 1, justifyContent:'center', alignItems: 'center'}}>
      <Text>HomeDrawerAction</Text>
      <TouchableOpacity 
      onPress={handleNavigation}
      style={{backgroundColor: 'blue', padding: 15, margin: 10, borderRadius: 10}}>
        <Text>Open Drawer</Text>
      </TouchableOpacity>
    </View>
  )
}

export default HomeDrawerAction