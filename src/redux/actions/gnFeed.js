import axios from "../../config/axios";
import { normalize } from 'normalizr'
import { article } from '../schemas/article'
import AsyncStorage from '@react-native-community/async-storage'

const fetchFeed = dispatch => {
    dispatch({type: 'FETCHING_DATA_GNFEED'})
    return axios.get('/everything', {
            params: {
                qInTitle: '"ciclabile" OR "cycle path" OR "ciclopista" OR "fietspad"',
                sortBy: 'publishedAt'
            }
        })
        .then(res => {
            let normalizedArticles = normalize(res.data.articles, [article])
            dispatch({
                type: 'ADD_ARTICLES',
                payload: normalizedArticles.entities.articles
            })
            dispatch({
                type: 'ADD_SOURCES',
                payload: normalizedArticles.entities.sources
            })
            
            AsyncStorage.multiSet([
                ['@GN_lastviewed:date', '2019-10-28T06:32:38Z'],
                ['@GN_lastviewed:url', 'https://milano.corriere.it/notizie/cronaca/19_ottobre_28/marciapiedi-extralargeciclabile-corridoi-verdieffetto-m4-sull-asse-ovest-f3c9f9a4-f94b-11e9-9778-63d7a5dc0619.shtml']
            ], err => {
                if (err) {
                    console.error(err)
                }
            })

            AsyncStorage.multiGet([
                '@GN_lastviewed:date',
                '@GN_lastviewed:url'
            ], (err, stores) => {
                if (err && err.length > 0) {
                    /**
                     * TODO: gestire errore
                     */
                } else {
    
                    if (stores.length > 0) {
    
                        let date = stores[0][1],
                            url = stores[1][1]
    
                    }
    
                }
            })

            dispatch({
                type: 'FETCHING_DATA_GNFEED_SUCCESS',
                payload: normalizedArticles.result
            })
        })
        .catch(err => {
            dispatch({type: 'FETCHING_DATA_GNFEED_FAIL', payload: err})
        })
}

export {
    fetchFeed
}
