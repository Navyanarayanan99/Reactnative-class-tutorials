import { View, Text } from 'react-native'
import React, { useState } from 'react'
import Button from './components/Button'

const ReactMemoandCallback = () => {
    console.log('In react memo and callback');

    const [age, setAge] = useState(10);
    const [salary, setSalary] = useState(25000);

    const handleAge = () => {
        setAge(age + 1);
    }

    const handleRemove = () => {
        setSalary(salary - 1000)
    }

  return (
    <View style={{marginTop: 50}}>
      <Text style={{fontSize: 30, fontWeight: '600', textAlign: 'center'}}>ReactMemoandCallback</Text>
      <Button title= 'ADD' itemValue={age} activity={handleAge}/>
      <Button title= 'Remove' itemValue={salary} />
    </View>
  )
}

export default ReactMemoandCallback

class Sample extends React.PureComponent {
    
}

//reference equality in functional component - React.memo