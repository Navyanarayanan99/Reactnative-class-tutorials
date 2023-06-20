import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react'
import Modal from "react-native-modal";

const CustomBottom = () => {
    const [visible, setVisible] = useState(false)
    return (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
            <TouchableOpacity style={{ width: 100, height: 100, borderRadius: 50, backgroundColor: '#000', justifyContent: 'center', alignItems: 'center' }} onPress={() => {
                setVisible(true)
            }}>
                <Text style={{ fontSize: 35, fontWeight: '700', color: '#fff' }}>+</Text>
            </TouchableOpacity>

            <Modal 
            animationIn={'slideInUp'}
            style={{ width: '100%', marginLeft: 0, marginBottom: 0, }}
            onBackButtonPress={() => {
                setVisible(false)
            }}
            isVisible={visible} >
                <View style={{ position: 'absolute', bottom: 0, height: 200, backgroundColor: 'white', width: '100%', left: 0, right: 0 }}>
                    <TouchableOpacity style={{width: '100%', height: 50, flexDirection: 'row'}}>
                       <Image source={require('../assets/down.png')} style={{width: 24, height: 24, tintColor: 'green'}} />
                    </TouchableOpacity>
                </View>
            </Modal>
        </View>
    )
}

export default CustomBottom

const styles = StyleSheet.create({})