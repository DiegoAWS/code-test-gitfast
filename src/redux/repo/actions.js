import { SET_NEW_REPO_USER } from './types'

export const setNewRepoUser = (payload) => {
    return {
        type: SET_NEW_REPO_USER,
        payload
    }
}