import axios from "axios";

export function loadRepositoryAction(username) {
    return async (dispatch) => {
        const result = await axios.get(`https://api.github.com/users/${username}/repos`)
        dispatch({
            type: "LOAD_REPO",
            payload: result.data
        })
    }
}