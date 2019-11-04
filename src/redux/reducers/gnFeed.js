const INITIAL_STATE = {
    isFetching: false,
    data: [],
    hasError: false,
    errorMessage: null,
}

const namespace = 'GNFEED'

export default gnFeed = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case `RESET_DATA_${namespace}`:
            return INITIAL_STATE;

        case `FETCHING_DATA_${namespace}`:
            return {
                ...state,
                isFetching: true
            };
        case `FETCHING_DATA_${namespace}_SUCCESS` :
            return {
                ...state,
                isFetching: false,
                data: action.payload.data,
                meta: action.payload.meta,
                hasError: false,
                errorMessage: null
            };
        case `FETCHING_DATA_${namespace}_FAIL`:
            return {
                ...state,
                isFetching: false,
                data: [],
                hasError: true,
                errorMessage: action.payload
            }
        default:
            return state
    }
}