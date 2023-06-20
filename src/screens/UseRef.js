import React, {  useRef, useState } from "react";
import { View,Text, TouchableOpacity, TextInput } from "react-native";
const EntryPoint=() => {
  const[input,setInput]=useState('');
  const inputRef=useRef(null);
  // useEffect(()=>{
  //   renderRef.current=renderRef.current + 1;
  // } {
  
  
  const handlefocus=() =>{
    inputRef.current.focus();
    inputRef.current.value="hai you are focused";
  };
 
    return(
        <View style={{marginTop:20}}>
            
                  <Text style={{
                    marginTop:10,
                    fontSize:30,
                      fontWeight:'600',
                      textAlign:'center',
                       color:'blue',
                         }}>useRef - {input}
                    </Text>
                    <TextInput
                    ref={inputRef}
                    value={input}
                    style={{borderWidth:1,borderColor:'red',padding:5,margin:10}}
                    onChangeText={text =>setInput(text)}/>
                    {/* <TouchableOpacity onPress={()=>setRender(renderCount + 1)}style={{
                        padding:10,
                        margin:25,
                        backgroundColor:'red'
                    }}><Text style={{
                       color:'blue', 
                    }}>Render  {renderRef.current} times entry point component rendered</Text></TouchableOpacity>

                    
                     */}
                    <TouchableOpacity onPress={handlefocus}><Text>Focus into TextInput</Text></TouchableOpacity>
</View>  
    );
  
};
export default EntryPoint;


// import { View, Text, TouchableOpacity, TextInput } from 'react-native';
// import React, { useEffect, useRef, useState } from 'react';

// const UseRef = () => {
//   const [renderCount, setRenderCount] = useState('');
//   const [input, setInput] = useState('');
//   const inputRef = useRef(null);

//   const handleFocus = () => {
//     inputRef.current.focus();
//     inputRef.current.value = 'Focused';
//     console.log(inputRef);
//   };

//   return (
//     <View style={{ marginTop: 50, marginLeft: 10 }}>
//       <Text style={{ fontSize: 30, fontWeight: '600', textAlign: 'center' }}>
//         UseRef - {input}
//       </Text>
//       <TextInput
//         ref={inputRef}
//         value={input}
//         style={{ borderWidth: 1, borderColor: 'red', margin: 10 }}
//         onChangeText={(txt) => setInput(txt)}
//       />

//       <TouchableOpacity onPress={handleFocus}>
//         <Text>Focus in to textinput</Text>
//       </TouchableOpacity>
//     </View>
//   );
// };

// export default UseRef;


// import {View, Text, TouchableOpacity, TextInput} from 'react-native';
// import React, {useEffect, useRef, useState} from 'react';

// const UseRef = () => {
//   const [renderCount, setRenderCount] = useState('');
//   const [input, setInput] = useState('');
//   //const renderRef = useRef(1);
//   const inputRef = useRef(null);

//   // useEffect(() => {
//   //    renderRef.current = renderRef.current + 1;
//   // });
//   const handleFocus = () => {
//     inputRef.current.focus();
//     inputRef.current.value = "Focused";
//     console.log(inputRef);
//   };
//   return (
//     <View style={{marginTop: 50, marginLeft: 10}}>
//       <Text style={{fontSize: 30, fontWeight: '600', textAlign: 'center'}}>
//         UseRef - {input}
//       </Text>
//       <TextInput
//         ref={inputRef}
//         value={inputRef.current.value}
//         style={{borderWidth: 1, borderColor: 'red', margin: 10}}
//         onChangeText={txt => setInput(txt)}
//       />

//       <TouchableOpacity onPress={handleFocus}>
//         <Text>Focus in to textinput</Text>
//       </TouchableOpacity>
     
//       {/* <TouchableOpacity
//         onPress={() => setRenderCount(renderCount + 1)}
//         >
//         <Text>{renderRef.current} Times entry point Component rendered.</Text>
//       </TouchableOpacity> */}
//     </View>
//   );
// };

// export default UseRef;
