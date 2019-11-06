import React, { useState } from 'react'
import {
    StyleSheet,
    ScrollView
} from 'react-native'
import {
    useSelector,
    useDispatch
} from 'react-redux'

import {
    BaseCard
} from '../../library/components'

import {
    fetchFeed
} from '../../redux/actions/gnFeed'

const renderCards = ({articlesStore = {}, articles = []}) => {
    return articles.map( (idArticle) => {

        let {
            title,
            url,
            urlToImage: imageUrl,
            publishedAt: date,
            source,
            content
        } = articlesStore[idArticle]

        return (
            <BaseCard
                key={idArticle}
                data={{ title, url, imageUrl, date, source, content }}
            />
        )
    })
}

export default function MainFeed() {

    const globalState = useSelector(state => state.globalState)
    const gnFeed = useSelector(state => state.gnFeed)
    const articlesStore = useSelector(state => state.articles)

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
            {renderCards({articlesStore, articles: gnFeed['data']})}
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    scrollView: {
        backgroundColor: '#212121',
        height: '100%'
    }
})