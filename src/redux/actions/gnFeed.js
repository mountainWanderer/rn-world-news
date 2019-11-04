import axios from "../../config/axios";

const fetchFeed = dispatch => {
    dispatch({type: 'FETCHING_DATA_GNFEED'})
    return axios.get('/everything', {
            params: {
                sources: 'corriere',
                sortBy: 'publishedAt'
            }
        })
        .then(res => {
            dispatch({
                type: 'FETCHING_DATA_GNFEED_SUCCESS',
                payload: res.data
            })
        })
        .catch(err => {
            dispatch({type: 'FETCHING_DATA_GNFEED_FAIL', payload: err})
        })
}

export {
    fetchFeed
}
