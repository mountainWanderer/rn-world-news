import React from 'react'
import {
    View,
    Text
} from 'react-native'

const BaseCard = ({ data = {} }) => {

    let {
        title = ''
    } = data

    return (
        <View
            style={{
                marginHorizontal: 20,
                marginVertical: 10,
                minHeight: 120,
                backgroundColor: '#424242',
                paddingVertical: 10,
                paddingHorizontal: 10,
                borderRadius: 5,
                //shadow
                shadowColor: "#000",
                shadowOffset: {
                    width: 0,
                    height: 2,
                },
                shadowOpacity: 0.25,
                shadowRadius: 3.84,
                elevation: 5,
            }}
        >
            <Text style={{ color: '#ECEFF1' }}>{title}</Text>
        </View>
    )
}

export default BaseCard