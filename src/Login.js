import { Alert, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react'
import auth from '@react-native-firebase/auth';

const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const createUser = () => {
        auth()
        .createUserWithEmailAndPassword(
            email,
            password,
        )
        .then(() => {
          console.log('User account created & signed in!');
        })
        .catch(error => {
          if (error.code === 'auth/email-already-in-use') {
            console.log('That email address is already in use!');
          }
      
          if (error.code === 'auth/invalid-email') {
            console.log('That email address is invalid!');
          }
      
          console.error(error);
        });
    }
    const userSignin = () => {
        auth()
          .signInWithEmailAndPassword(email, password)
          .then(() => {
            Alert.alert('User logged in');
          })
          .catch(error => {
            console.log(error);
          });
    }
    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center', }}>
            <TextInput placeholder='Enter Email'
            value={email}
            onChangeText = {txt => setEmail(txt)}

                style={{ width: '90%', height: 50, borderWidth: 0.5, borderRadius: 20, paddingLeft: 20 }} />

            <TextInput placeholder='Enter Password'
            value={password}
            onChangeText={txt => setPassword(txt)}
                style={{ width: '90%', height: 50, borderWidth: 0.5, borderRadius: 20, paddingLeft: 20, marginTop: 30 }} />
            <TouchableOpacity style={{ justifyContent: 'center', alignItems: 'center', width: '90%', height: 50, borderRadius: 20, marginTop: 50, backgroundColor: 'blue' }} onPress={() => 
                createUser()
                //userSignin()
                }>
                <Text style={{ color: '#fff', fontSize: 20, fontWeight: '700' }}>Create Account</Text>
            </TouchableOpacity>
        </View>
    )
}

export default Login

const styles = StyleSheet.create({})