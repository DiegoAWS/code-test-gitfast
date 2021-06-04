import { GET_COMMITS_FAILED, GET_COMMITS_REQUEST, GET_COMMITS_SUCCESS } from './types'

export const getCommits = (page) => {
    return {
        type: GET_COMMITS_REQUEST,
        payload: page
    }
}

export const saveFetchedCommits = ({ commits, links }) => {
    return {
        type: GET_COMMITS_SUCCESS,
        commits,
        links
    }
}

export const errorFetchingCommits = () => {
    return {
        type: GET_COMMITS_FAILED
    }
}
