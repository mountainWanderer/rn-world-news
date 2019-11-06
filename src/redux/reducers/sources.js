export default sources = (state = {}, action) => {
    switch (action.type) {
        case `ADD_SOURCES`:
            return {
                ...state,
                ...action.payload
            }

        default:
            return state
    }
}