import { ActivityIndicator, Modal, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react'

const Modals = () => {
    const [visible, setVisible] = useState(false);
  return (
    <TouchableOpacity style={{flex: 1}} onPress={() => {
        setVisible(true);
    }}>
     <Modal visible={true} transparent>
        <TouchableOpacity style={{flex: 1, backgroundColor: 'gray', justifyContent: 'center', alignItems: 'center'}}>
            <View style={{width: 100, height: 100, backgroundColor: '#fff',borderRadius: 10, justifyContent: 'center', alignItems: 'center'}}>
            <ActivityIndicator size={'large'} />
            </View>
        </TouchableOpacity>
     </Modal>
    </TouchableOpacity>
  )
}

export default Modals

const styles = StyleSheet.create({})