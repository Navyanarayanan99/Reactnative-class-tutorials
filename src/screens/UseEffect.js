import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, {useState, useEffect} from 'react'

const UseEffect = () => {
    const [count, setCount] = useState(0);
    const [load, setLoad] = useState(true);

    useEffect(() => {
         console.log('Screen mounted');
    }, [count]);

    const handleCount = () => {
        setCount(count + 1);
    };
    const handleAdd = () => {
        setLoad(!load);
    }
  return (
    <View style={{marginTop: 50}}>
      <Text style={{
        fontSize: 30,
        fontWeight: '700',
        textAlign: 'center',
        color: 'red'
      }}>UseEffect Hook = {count}</Text>
      <TouchableOpacity 
      onPress={handleCount}
      style={{backgroundColor: 'yellow', padding: 15, margin: 20}}
      >
        <Text>Add count</Text>
      </TouchableOpacity>
      <TouchableOpacity 
      onPress={handleAdd}
      style={{backgroundColor: load ? 'red' : 'green', padding: 15, margin: 20}}
      >
        <Text>Add count</Text>
      </TouchableOpacity>
    </View>
  )
}

export default UseEffect

const styles = StyleSheet.create({})