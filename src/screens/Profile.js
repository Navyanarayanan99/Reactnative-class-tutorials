import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'

const Profile = ({navigation, route}) => {
  const handleNavigate = () => {
    navigation.navigate('DrawerNav')
  }
  return (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <Text>Profile</Text>
      <TouchableOpacity
      onPress={handleNavigate}
      style={{backgroundColor: 'blue', padding: 15, margin: 10, borderRadius: 10}}>
        <Text>Button</Text>
      </TouchableOpacity>
    </View>
  )
}

export default Profile




