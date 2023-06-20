import { Text, TouchableOpacity, View } from 'react-native'
import React, { Component } from 'react'

export class LifeCycleMethod extends Component {
    constructor(props) {
        console.log('Constructor');
        super(props);
        this.state = {name:'Abc'}
    }

    handleState() {
        this.setState({name: 'xyz'})
    }
  render() {
    console.log('inside class')
    return (
      <View style={{marginTop: 15}}>
        <TouchableOpacity 
        onPress={() => this.handleState()}
        style={{backgroundColor: 'green', padding: 15, margin: 15}}>
            <Text>Change state</Text>
           
        </TouchableOpacity>
        <NewClass name={this.state.name}/>
      </View>
    )
  }
}

class NewClass extends React.Component {
    constructor(props) {
        console.log('Constructor');
        super(props);
        this.state = {passedName: ''}
    }

    static getDerivedStateFromProps(props, state) {
        console.log('getDerivedStateFromProps');
        if(props.name !== state.passedName) {
            return {passedName: props.name}
        }
    }

    componentDidMount() {
        console.log('componentDidMount');
    }

    shouldComponentUpdate() {
        console.log('shouldComponentUpdate');
        return true;
    }

    // getSnapshotBeforeUpdate(prevProps, prevState) {
    //     console.log('getSnapshotBeforeUpdate');
    //     console.log(prevProps, 'prevProps');
    //     console.log(prevState, 'prevState');
    // }
    
    componentDidUpdate() {
        console.log('componentDidUpdate');
    }
    componentWillUnmount() {
        console.log('componentWillUnmount');
    }
    render() {
        console.log('render')
        return(
            <View>
                <Text style={{fontSize: 30}}> Hello {this.state.passedName}</Text>
            </View>
        )
    }
}

export default LifeCycleMethod