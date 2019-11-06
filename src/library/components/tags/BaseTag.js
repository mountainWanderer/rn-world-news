import React from 'react'
import {
    View,
    Text,
    StyleSheet,
    Image
} from 'react-native'
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import { faCoffee, faStar } from '@fortawesome/free-solid-svg-icons'

import R from '../../../res/R'

const BaseTag = ({ text = {}, color = 'black', outherStyle = {} }) => {
    return (
        <View style={{
            ...componentStyles.outher,
            borderColor: color,
            ...outherStyle
        }}>
            <FontAwesomeIcon icon={faCoffee} color={color} style={{marginRight: 5}} />
            <Text style={{
                ...componentStyles.text,
                color
            }}>
                {text}
            </Text>
        </View>
    )
}

const componentStyles = StyleSheet.create({
    outher: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        borderWidth: 1,
        borderRadius: 5,
        margin: 5,
        padding: 5,
        backgroundColor: R.colors.dark.tag.background
    },
    text: {

    }
})

export default BaseTag