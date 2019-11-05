import axios from "../../config/axios";

const fetchFeed = dispatch => {
    dispatch({type: 'FETCHING_DATA_GNFEED'})
    return axios.get('/everything', {
            params: {
                qInTitle: '"ciclabile" OR "cycle path" OR "ciclopista" OR "fietspad"',
                sortBy: 'publishedAt'
            }
        })
        .then(res => {
            /**
             * TODO: Here will insert the latest viewed news
             */
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
