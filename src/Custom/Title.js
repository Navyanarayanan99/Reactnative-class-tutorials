import { View, Text, Image } from 'react-native'
import React from 'react'
import AntDesign from 'react-native-vector-icons/AntDesign';
const Title = (props) => {
    
  return (
    <View style=
    {{ justifyContent: 'space-between', alignItems: 'center', flexDirection: 'row', marginTop: 30, padding: 10}}>
        <AntDesign name='setting' size={28} color={'blue'}/>
      <Image source={require('../../assets/logo.png')} style={{width: 200, height: 50, resizeMode: 'contain'}}/>
    </View>
  )
}

export default Title