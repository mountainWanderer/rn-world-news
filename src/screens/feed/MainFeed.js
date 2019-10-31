import React, { useState } from 'react'
import {
    StyleSheet,
    ScrollView
} from 'react-native'

import {
    BaseCard
} from '../../components'

const renderCards = ({newsData = []}) => {
    return newsData.map( (news = {}) => (
        <BaseCard key={new Date()} data={{ title: news['title'] }}/>
    ))
}

export default function MainFeed() {
  
    const [newsData, setNewsData] = useState([
        { title: 'News number one' },
        { title: 'News pula 2' },
        { title: 'News Basket super!!' },
        { title: 'A.C. Milan won...' },
        { title: 'New Galaxy S11' },
        { title: 'La fioritura delle betulle' }
    ])

    return (
        <ScrollView
            contentInsetAdjustmentBehavior="automatic"
            style={styles.scrollView}
        >
            {renderCards({newsData})}
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    scrollView: {
        backgroundColor: '#212121',
        height: '100%'
    }
})