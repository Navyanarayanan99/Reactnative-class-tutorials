import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, {useReducer} from 'react'

const initialState = 0;
const reducer = (state, action) => {
    switch(action) {
      case 'Increment':
        return state + 1;

      case 'Decrement':
        return state - 1;

      case 'MultiplyBy10':
        return state * 10;

      default:
        return state;   
    }
}
const UseReducer = () => {
 const [ result, dispatch ] = useReducer (reducer, initialState);
  return (
    <View style={{marginTop: 50}}>
      <Text style={{fontSize: 30, fontWeight: '600', textAlign: 'center'}}>UseReducer</Text>

      <View style={{alignItems: 'center', alignSelf: 'center', justifyContent: 'center'}}>
        <Text style={{fontSize: 30, color: 'green'}}>{result}</Text>
        <TouchableOpacity style={{padding: 15, margin: 15, backgroundColor: 'yellow'}}
        onPress={() => dispatch('Increment')}
        >
          <Text>Increment</Text>
        </TouchableOpacity>

        <TouchableOpacity style={{padding: 15, margin: 15, backgroundColor: 'yellow'}}
        onPress={() => dispatch('Decrement')}
        >
          <Text>Decrement</Text>
        </TouchableOpacity>

        <TouchableOpacity style={{padding: 15, margin: 15, backgroundColor: 'yellow'}}
        onPress={() => dispatch('MultiplyBy10')}
        >
          <Text>Multiply by 10</Text>
        </TouchableOpacity>
      </View>
    </View>
  )
}

export default UseReducer

const styles = StyleSheet.create({})