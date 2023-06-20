import { View, Text , TouchableOpacity} from 'react-native'
import React, { useState } from 'react'

const UseState = () => {
    const [count, setCount] = useState(0);

    const handleCount = () => {
       setCount(count + 1);
    }
  return (
    <View style={{marginTop: 15}}>
        <Text>Counter</Text>     
            <Text>{count}</Text>
        <TouchableOpacity 
        onPress={handleCount}
        style={{backgroundColor: 'green', padding: 15, margin: 15}}>
            <Text>Increase count by 1</Text>
        </TouchableOpacity>
      </View>
  )
}

export default UseState



//class component
// import { Text, TouchableOpacity, View } from 'react-native'
// import React, { Component } from 'react'

// export class UseState extends Component {
//     constructor(props) {
//         super(props);
//         this.state= {count: 0}
//     }
//     handleCount() {
//         this.setState({count: this.state.count + 1})
//     }
//   render() {
//     return (
//       <View style={{marginTop: 15}}>
//         <Text>Counter</Text>
//         <Text>{this.state.count}</Text>
//         <TouchableOpacity 
//         onPress={() => this.handleCount()}
//         style={{backgroundColor: 'green', padding: 15, margin: 15}}>
//             <Text>Increase count by 1</Text>
//         </TouchableOpacity>
//       </View>
//     )
//   }
// }

// export default UseState