import { View, Text } from 'react-native'
import React from 'react'

function FunctionalComponent(){
  return (
    <View>
      <Text>FunctionalComponent</Text>
    </View>
  )
}

export default FunctionalComponent

// import { View, Text, Button } from 'react-native'
// import React, { useEffect, useState } from 'react'

// const FunctionalComponent = () => {
//   const[counter, setCounter] = useState(0);
 
//   useEffect(() => {
//     console.log("useEffect mount");
//     return() => {
      
//       console.log("useEffect unmount");
//     }
   
//   },[])
//   return (
//     <View>
//       <Text>FunctionalComponent</Text>
//       <Text>{counter}</Text>
//       <Button title='Increase' onPress={() => setCounter(counter +  1)}/>
//     </View>
//   )
// }

// export default FunctionalComponent