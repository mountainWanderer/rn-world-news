const globalStateReducer = (state = {}, action) => {
    let elabState = null

    let {
        type = '',
        payload = {}
    } = action

    switch (type) {

        case 'UPDATE_GLOBAL_STATE': {
            let objInit = {...state}
            for (const key in payload) {
                objInit[key] = payload[key]
            }

            elabState = objInit

            break
        }

        default:
            elabState = state
    }

    return elabState
}

export default globalStateReducer