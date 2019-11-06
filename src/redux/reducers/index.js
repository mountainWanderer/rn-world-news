import { combineReducers } from 'redux'
import globalState from './globalState'
import gnFeed from './gnFeed'
import articles from './articles'
import sources from './sources'

export default combineReducers({
    globalState,
    articles,
    sources,
    gnFeed
})