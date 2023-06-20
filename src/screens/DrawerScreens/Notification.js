import { View, Text , TouchableOpacity} from 'react-native'
import React from 'react'
import { CommonActions, StackActions } from '@react-navigation/native';
const Notification = ({navigation, route}) => {
    const handleNavigate = () => {
    // navigation.dispatch(CommonActions.navigate('Settings'));
    // navigation.dispatch(CommonActions.setParams({notify: 'www'}))
    navigation.dispatch(StackActions.push('Settings', {profileId: '1234'}))
    }
    console.warn(route);
  return (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
    <Text style={{fontSize: 20}}>{route.name}</Text>
    <Text style={{fontSize: 20}}>{route?.params?.notify ?? ''}</Text>
    <TouchableOpacity
     onPress={handleNavigate}
      style={{
        backgroundColor: '#333',
        padding: 15,
        margin: 10,
        borderRadius: 10,
      }}>
      <Text style={{fontSize: 15, color: '#fff'}}>
        Reset to notifications
      </Text>
    </TouchableOpacity>
  </View>
  )
}

export default Notification