import React, { useState } from 'react'
import {
    StyleSheet,
    ScrollView
} from 'react-native'
import {
    connect,
    useSelector,
    useDispatch
} from 'react-redux'

import {
    BaseCard
} from '../../components'

import {
    fetchFeed
} from '../../redux/actions/gnFeed'

const renderCards = ({articles = []}) => {
    return articles.map( (article = {}) => {

        let {
            title,
            url,
            urlToImage: imageUrl,
            publishedAt: date,
            content
        } = article

        return (
            <BaseCard
                key={'foo'}
                data={{ title, url, imageUrl, date, content }}
            />
        )
    })
}

export default function MainFeed() {

    const globalState = useSelector(state => state.globalState)
    const gnFeed = useSelector(state => state.gnFeed)

    const dispatch = useDispatch()

    const [fetchDataFeed, setFetchDataFeed] = useState(true)

    if (fetchDataFeed && !gnFeed.isFetching) {
        dispatch(fetchFeed)
        .then(setFetchDataFeed(false))
        .catch(setFetchDataFeed(false))
    }

    return (
        <ScrollView
            contentInsetAdjustmentBehavior="automatic"
            style={styles.scrollView}
        >
            {renderCards({articles: gnFeed['data']})}
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    scrollView: {
        backgroundColor: '#212121',
        height: '100%'
    }
})