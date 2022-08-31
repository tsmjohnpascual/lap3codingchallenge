const initState = {
    repository: []
}

const reducer = (state=initState, action) => {

    switch(action.type) {

        case "LOAD_REPO":
            return {
                repository: action.payload
            }

        default:
            return state
    }

}

export default reducer