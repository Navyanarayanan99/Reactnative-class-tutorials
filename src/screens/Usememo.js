import {View, Text, TouchableOpacity} from 'react-native';
import React, {useMemo, useState} from 'react';

const Usememo = () => {
  const [countOne, setCountOne] = useState(0);
  const [counttwo, setCountTwo] = useState(0);

  const handleCountOne = () => {
    setCountOne(countOne + 1);
  };

  const handleCountTwo = () => {
    setCountTwo(counttwo + 1);
  };
  const isEven = useMemo(() => {
    let i = 0;
    while (i < 20000000) {
      i++;
    }
    return () => countOne % 2 === 0;
  }, [countOne]);
  
  //const result = isEven(); 
  

  return (
    <View style={{marginTop: 50}}>
      <Text style={{fontSize: 30, fontWeight: '600', textAlign: 'center'}}>
        Usememo
      </Text>
      <Text style={{color: 'green', fontSize: 25}}>
        {countOne} {isEven ? 'Even' : 'Odd'}
      </Text>
      <TouchableOpacity
        onPress={handleCountOne}
        style={{backgroundColor: 'yellow', padding: 15, margin: 20}}>
        <Text>Add count 1</Text>
      </TouchableOpacity>
      <Text style={{color: 'green', fontSize: 25}}>{counttwo}</Text>
      <TouchableOpacity
        onPress={handleCountTwo}
        style={{backgroundColor: 'yellow', padding: 15, margin: 20}}>
        <Text>Add count 2</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Usememo;
