import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react'

const SwitchButton = () => {
    const [selectedTab, setSelectedTab] = useState(0)
    return (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
            <View style={{
                width: '90%', height: 60, borderWidth: 0.5, borderRadius: 15, paddingLeft: 5, paddingRight: 5, backgroundColor: '#fff', marginTop: 50, alignSelf: 'center',
                flexDirection: 'row'
            }}>
                <TouchableOpacity style={{
                    width: '50%', height: 55, backgroundColor: selectedTab == 0 ? 'blue' : 'white',
                    borderRadius: 15,
                    justifyContent: 'center',
                    alignItems: 'center'
                }} onPress={() => {
                    setSelectedTab(0);
                }}>
                    <Text style={{
                        color: selectedTab == 0 ? '#fff' : '#000',
                        fontSize: 18,
                        fontWeight: '700'
                    }}>Pending</Text>
                </TouchableOpacity>

                <TouchableOpacity style={{
                    width: '50%', height: 55, backgroundColor: selectedTab == 1 ? 'blue' : 'white',
                    borderRadius: 15, justifyContent: 'center', alignItems: 'center'
                }} onPress={() => {
                    setSelectedTab(1)
                }}>
                    <Text style={{
                        color: selectedTab == 1 ? '#fff' : '000',
                        fontSize: 18, fontWeight: '700'
                    }}>Completed</Text>
                </TouchableOpacity>
            </View>
            {selectedTab == 0 ? (<View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                <Text>Pending</Text>
            </View>) : (
                <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                    <Text>Completed</Text>
                </View>)}
        </View>
    )
}

export default SwitchButton

const styles = StyleSheet.create({})