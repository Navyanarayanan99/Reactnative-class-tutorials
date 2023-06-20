import { View, Text } from 'react-native'
import React from 'react'

const MyTab = (props) => {
  return (
    <View>
    {props.state.routes.map((route, index) => {
        return <View key={index}></View>;
})}
    </View>
  );
};

export default MyTab