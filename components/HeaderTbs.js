import React, { useState } from 'react'
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'

const HeaderTbs = () => {
    const [activeTab, setActiveTab] = useState('Delivery')
    return (
        <View style={styles.headerContainer}>
            {/* Header Button -Delivery */}
            <HeaderButton
                text='Delivery'
                activeTab={activeTab}
                setActiveTab={setActiveTab} />

            {/* Header Button - Pickup*/}
            <HeaderButton
                text='Pickup'
                activeTab={activeTab}
                setActiveTab={setActiveTab} />


        </View>
    )
}

//individual button component---
const HeaderButton = (props) => {
    return (

        <TouchableOpacity
            style={
                {
                    ...styles.button,
                    backgroundColor: props.activeTab === props.text ? '#000' : '#fff'
                }
            }
            onPress={() => { props.setActiveTab(props.text) }}
        >
            <Text style={
                {
                    color: props.activeTab === props.text ? '#fff' : '#000',
                    fontSize: 15,
                    fontWeight: '900'
                }}>
                {props.text}
            </Text>
        </TouchableOpacity>

    )
}
export default HeaderTbs



const styles = StyleSheet.create({
    headerContainer: {
        flexDirection: 'row',
        alignSelf: 'center'
    },
    button: {
        paddingVertical: 6,
        paddingHorizontal: 16,
        borderRadius: 30,
        backgroundColor: '#000'
    }
})
