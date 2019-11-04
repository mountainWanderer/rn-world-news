import React from 'react'
import {
    View,
    Text,
    StyleSheet,
    Image
} from 'react-native'

import moment from 'moment'
import R from '../../../res/R'

import {
    BaseTag
} from '../'

const generateTags = (tags = []) => tags.map( ( tag = {} ) => {
    return (
        <BaseTag
            key={''}
            text={tag['text']}
            color={tag['color']}
        />
    )
})

const BaseCard = ({ data = {}, tags = [] }) => {

    let {
        title = '',
        url: linkUrl,
        imageUrl = '',
        date,
        content = ''
    } = data

    moment.locale('it')
    let itemTimeFromNow = moment(date).fromNow()

    tags.push({
        text: 'NEW',
        color: R.colors.shared.red
    })

    return (
        <View style={{ ...componentStyles.outher }}>
            <Text style={{ ...componentStyles.title }}>{title}</Text>
            {
                imageUrl !== '' &&
                <Image
                    source={{uri: imageUrl}}
                    style={{ ...componentStyles.image }}
                    resizeMode={"cover"}
                />
            }
            <Text style={{ ...componentStyles.content }}>{content}</Text>
            <View style={{ ...componentStyles.footer }}>
                {generateTags(tags)}
                <Text style={{
                    ...componentStyles.footerLabels,
                    marginLeft: 5
                }}>
                    {itemTimeFromNow}
                </Text>
            </View>
        </View>
    )
}

const componentStyles = StyleSheet.create({
    outher: {
        marginHorizontal: 15,
        marginVertical: 10,
        minHeight: 120,
        backgroundColor: R.colors.dark.card.background,
        paddingTop: 10,
        borderRadius: 10,
        //shadow
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5
    },
    title: {
        color: '#ECEFF1',
        fontSize: 20,
        fontWeight: '500',
        marginTop: 5,
        marginBottom: 15,
        marginHorizontal: 10
    },
    image: {
        width: '100%',
        height: 250,
        backgroundColor: 'gray'
    },
    content: {
        color: '#ECEFF1',
        fontSize: 16,
        marginVertical: 15,
        marginHorizontal: 10,
        textAlign: 'justify'
    },
    footer: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'flex-end',
        height: 45,
        backgroundColor: '#BDBDBD',
        borderTopColor: '#FAFAFA',
        borderTopWidth: 1,
        borderBottomLeftRadius: 10,
        borderBottomRightRadius: 10,
        paddingHorizontal: 10
    },
    footerLabels: {
        color: '#212121',
        fontWeight: '600'
    }
})

export default BaseCard