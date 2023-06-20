import { Button, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native'
const Home = () => {
    const navigation = useNavigation();
  return (
    <View>
      <Button title='Class Component' onPress={() => navigation.navigate('ClassComponent')}/>
      <Button title='Functional Component' onPress={() => navigation.navigate('FunctionalComponent')}/>
    </View>
  )
}

export default Home

const styles = StyleSheet.create({})