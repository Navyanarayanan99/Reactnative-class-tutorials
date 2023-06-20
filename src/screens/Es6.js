import { View, Text } from 'react-native'
import React, { useEffect, useState } from 'react'

const EsSix = () => {
  const [user, setUser] = useState('');
 const [age, setAge] = useState(2);
  useEffect(() => {
    setTimeout(() => {
        setUser('Haai');
        setAge(10);
    }, 9000);
  }, []);

  
  return (
    <View style={{marginTop: 15}}>
      <Text style={{fontSize: 30}}>Hello</Text>
      {/* <Text style={{fontSize: 30}}>{user === '' ? 'No user' : user}</Text> */}
      <Text style={{fontSize: 30}}> {user ==='' ? 'no user' : age === 20 ? '0' + user : age + ' ' + user } </Text>
    </View>
  )
}

export default EsSix