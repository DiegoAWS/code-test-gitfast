
import axiosInstance from "../../helpers/axios"

import store from '../store'

export const getProfile = () => {

    // grab current state
    const state = store.getState();
    const user = state.repo.user

    const apiURL = '/users/' + user
    return axiosInstance
        .get(apiURL)
        .catch(error => { throw error })

}
