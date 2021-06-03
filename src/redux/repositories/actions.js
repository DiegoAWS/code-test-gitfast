import { GET_REPOSITORIES_REQUEST } from './types'

export const getRepositories = (page) => {
    return {
        type: GET_REPOSITORIES_REQUEST,
        payload: page
    }
}