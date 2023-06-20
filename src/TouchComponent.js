import {View, Text, StyleSheet, Button, Switch, TouchableOpacity, TouchableHighlight, TouchableWithoutFeedback, ActivityIndicator, Dimensions, StatusBar} from 'react-native';
import React, {useState} from 'react';
import {Alert} from 'react-native';

const TouchComponent = () => {
    const {width, height} = Dimensions.get('screen');
  const [active, setActive] = useState(false);
  const onPressHandler = () => {
    Alert.alert('Button Pressed');
  };

  const toggleSwitch = () => {
    setActive(!active);
  };
  return (
    <View style={styles.container}>
        <StatusBar backgroundColor={'red'} 
        //hidden={true}
        />
      <Button
        title="Button"
        color={'#841584'}
        onPress={onPressHandler}
        accessibilityLabel="Press to show alert"
      />

      <Switch
        value={active}
        onValueChange={toggleSwitch}
        thumbColor={active ? '#f43134' : '#f57576'}
        trackColor={{false: '#f43134', true: '#f57576'}}
      />

      <TouchableOpacity style={{backgroundColor: 'green', padding: 15, margin: 15}} onPress={() => console.warn('OnPress')}>
        <Text>Touchable Opacity</Text>
      </TouchableOpacity>

      <TouchableHighlight onPress={() => console.warn('onPress')} underlayColor={'green'}>
        <Text>TouchableHighlight</Text>
      </TouchableHighlight>

      <TouchableWithoutFeedback onPress={() => console.warn('without')}>
        <Text>TouchableWithoutFeedback</Text>
      </TouchableWithoutFeedback>

      <ActivityIndicator size={'large'} color={'#000'} />
      <ActivityIndicator size={'small'} color={'#000'} />

      <Button title='Alert' onPress={() => {
        Alert.alert('Alert title', 'Alert Content', [
            {
                text: 'Cancel',
                onPress: () => console.warn('cancel pressed')
            },
            {
                text: 'Ok',
                onPress: () => console.warn('Ok pressed')
            },
            {
                text: 'Pass',
                onPress: () => console.warn('Pass pressed')
            }
        ])
      }} />
    </View>
  );
};

export default TouchComponent;

const styles = StyleSheet.create({
  container: {
    padding: 15,
    margin: 15,
  },
});
