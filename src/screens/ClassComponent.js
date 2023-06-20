import { Text, TouchableOpacity, View } from 'react-native'
import React, { Component } from 'react'

 class ClassComponent extends React.Component {
  constructor() {
    super();
    this.state = { name: 'ABC', age: 26, location: "IN"};
  }
  handleState() {
    this.setState({name: 'XYZ', age: 30, location: 'Us'})
  }
  render() {
    return (
      <View style={{flex: 1}}>
        <Text style={{fontSize:60, marginTop: 15}}> Hello {this.state.name}</Text>
        <Text style={{fontSize:60, marginTop: 15}}> Hello {this.state.age}</Text>
        <Text style={{fontSize:60, marginTop: 15, }}> Hello {this.state.location}</Text>
        <TouchableOpacity style={{backgroundColor: 'green', padding: 15, margin: 15, alignItems: 'center', justifyContent: 'center'}} 
        onPress={() => this.handleState()}
        >
          <Text style={{color: '#ffff'}}> Change State</Text>
        </TouchableOpacity>
      </View>
    )
  }
}

export default ClassComponent

// import { Button, Text, View } from 'react-native'
// import React, { Component } from 'react'

// export class ClassComponent extends Component {
//     constructor(props) {
//         super(props)
//         this.state = {
//             counter : 0 ,
//         };
//         console.log("Constructor");
//     }

//     componentDidMount() {
//         console.log("ComponentdidMount");
//     }
//     componentDidUpdate(prevState,preProps) {
//         console.log("componentDidUpdate")
//       console.log(prevState);
//     }

//     componentWillUnmount() {
//         console.log("componentWillUnmount")
//     }
//   render() {
//     console.log("Render")
//     return (
//       <View>
//         <Text>ClassComponent</Text>
//         <Text>{this.state.counter}</Text>
//         <Button title='Increase' 
//         onPress={() => this.setState({counter: this.state.counter + 1})}
//         />
//       </View>
//     )
//   }
// }

// export default ClassComponent