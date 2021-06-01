import { GET_COMMITS_REQUEST } from './types'

export const getCommits = (page) => {
    return {
        type: GET_COMMITS_REQUEST,
        payload: page
    }
}