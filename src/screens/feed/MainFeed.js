import React, { useState } from 'react'
import {
    StyleSheet,
    ScrollView
} from 'react-native'
import { connect } from 'react-redux'

import {
    BaseCard
} from '../../components'

import {
    fetchFeed
} from '../../redux/actions/gnFeed'

const renderCards = ({newsData = []}) => {
    return newsData.map( (news = {}) => (
        <BaseCard key={'foo'} data={{ title: news['title'] }}/>
    ))
}

const MainFeed = ({globalState, gnFeed}) => {

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

const mapStateToProps = ({globalState, gnFeed}) => ({
    globalState,
    gnFeed
})

export default connect(
    mapStateToProps,
    { fetchFeed }
)(MainFeed)