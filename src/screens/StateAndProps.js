import { Text, View, TouchableOpacity } from 'react-native'
import React, { Component, useState } from 'react'

export class StateAndProps extends Component {
    constructor() {
        super();
        this.state = {name: 'ABC', age: 26, location: 'IN'};
    }
    handleState() {
        this.setState({name: 'XYZ', age: 30, location: 'US'})
    }
  render() {
    return (
      <View>
        <Text style={{fontSize: 30, marginTop: 15}}>Hello { this.state.name}</Text>
        <Text style={{fontSize: 30, marginTop: 15}}>Age { this.state.age}</Text>
        <Text style={{fontSize: 30, marginTop: 15}}>Location { this.state.location}</Text>
        <TouchableOpacity 
      onPress={() => this.handleState()}
      style={{backgroundColor: 'yellow', padding: 15, margin: 20}}
      >
        <Text>Add count</Text>
      </TouchableOpacity>
      <DataCard name={this.state.name}/>
      <DataClass name={this.state.name} /> 
      </View>
    )
  }
}

class DataClass extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <View>
            <Text style={{fontSize: 30, marginTop: 15}}>Haiii {this.props.name}</Text>
        </View>
        )
    }
}

const DataCard = (props) => {
    const [newName, setNewName] = useState('MNO');

    const handleState = () => {
        setNewName('asdd');
    }
    console.log(props);
    return(
        <View>
            <Text style={{fontSize: 30, marginTop: 15}}>Hello 
            {/* {props.name} */}
            {newName}
            </Text>
            <TouchableOpacity 
      onPress={handleState}
      style={{backgroundColor: 'yellow', padding: 15, margin: 20}}
      >
        <Text>Click </Text>
        </TouchableOpacity>
        </View>
    )
}

export default StateAndProps