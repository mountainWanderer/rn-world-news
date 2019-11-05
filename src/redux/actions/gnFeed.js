import axios from "../../config/axios";
import { normalize } from 'normalizr'
import { article } from '../schemas/article'

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
            console.log(normalizedArticles);
            dispatch({
                type: 'FETCHING_DATA_GNFEED_SUCCESS',
                payload: res.data.articles
            })
        })
        .catch(err => {
            dispatch({type: 'FETCHING_DATA_GNFEED_FAIL', payload: err})
        })
}

export {
    fetchFeed
}
