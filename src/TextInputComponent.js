import {View, Text, TextInput} from 'react-native';
import React from 'react';

const TextInputComponent = () => {
  // const onChangeText = text => {
  //   console.warn(text);
  // };

  const onEndEditing = response => {
    console.warn(response.nativeEvent.text);
  };

  const onBlur = () => {
    console.warn('onBlur');
  };
  const onPressIn = event => {
    console.warn(event.nativeEvent, 'onPressIn')
  }
  return (
    <View>
      <TextInput
        placeholder="Some text"
       // onChangeText={onChangeText}
        // multiline={true}
        // numberOfLines={2}
       // maxLength={4}
      // editable={false}
      //autoCapitalize="words"
      autoComplete="email"
      autoFocus={true}
      onBlur={onBlur}
      onEndEditing={onEndEditing}
      onPressIn={onPressIn}
      placeholderTextColor={'red'}
      returnKeyLabel='Hai'
      returnKeyType="send"
      secureTextEntry={true}
      selectionColor={'red'}
      />
    </View>
  );
};

export default TextInputComponent;
