import axiosInstance from "../../helpers/axios"
import store from '../store'



export const getAllCommits = (page = 1) => {

    // grab current state
    const state = store.getState();
    const { user, repo } = state.repo

    const apiURL = `/repos/${user}/${repo}/commits`
    return axiosInstance
        .get(apiURL, {
            params: {
                page
            }
        })
        .catch(error => { throw error })
}
