import {View, Text} from 'react-native';
import React, {useState, memo} from 'react';
import CountFunction from './components/CountFunctionMemo';
import NameFunction from './components/NameFunctionMemo';

const ReactMemo = () => {
  const [name, setName] = useState('Abc');
  const [count, setCount] = useState(0);

  const incCount = () => {
    setCount(count + 1);
  }
  return (
    <View style={{marginTop: 50}}>
      <NameFunction />
      <Text style={{fontSize: 30, fontWeight: '600', textAlign: 'center'}}>
        ReactMemo
      </Text>
      <CountFunction count={count} incCount={incCount}/>
    </View>
  );
};

export default memo(ReactMemo);
