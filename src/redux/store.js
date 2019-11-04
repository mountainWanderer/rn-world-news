import {
    compose,
    createStore,
    applyMiddleware
} from 'redux'
import thunk from 'redux-thunk'
/* import { createReactNavigationReduxMiddleware } from 'react-navigation-redux-helpers' */
import mainReducer from './reducers'

/* const rootSwitchNavigatorMiddleware = createReactNavigationReduxMiddleware(
    state => state.rootSwitchNav,
    "RootSwitchNavigator"
);

const middleware = [thunk, rootSwitchNavigatorMiddleware, saveAuthToken]; */

const middleware = [thunk]

const composeEnhancers =
    typeof window === 'object' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
        ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({
            // Specify extension’s options like name, actionsBlacklist, actionsCreators, serialize...
        })
        : compose;

const enhancer = composeEnhancers(applyMiddleware(...middleware));

const store = createStore(
    mainReducer,
    {
        globalState: {
            firstAccessDone: false
        }
    },
    enhancer
);

export default store