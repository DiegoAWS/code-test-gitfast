import { GET_REPOSITORIES_REQUEST } from './types'

export const getRepositories = (payload) => {
    return {
        type: GET_REPOSITORIES_REQUEST,
        payload
    }
}