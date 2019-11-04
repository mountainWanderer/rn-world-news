import { combineReducers } from 'redux'
import gnFeed from './gnFeed'
import globalState from './globalState'

export default combineReducers({
    globalState,
    gnFeed
})