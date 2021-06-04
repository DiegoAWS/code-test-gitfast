import { GET_REPOSITORIES_FAILED, GET_REPOSITORIES_REQUEST, GET_REPOSITORIES_SUCCESS } from './types'

export const getRepositories = (payload) => {
    return {
        type: GET_REPOSITORIES_REQUEST,
        payload
    }
}

export const saveFetchedRepositories = ({ repositories, links }) => {
    return {
        type: GET_REPOSITORIES_SUCCESS,
        repositories,
        links
    }
}

export const errorFetchingRepositories = () => {
    return {
        type: GET_REPOSITORIES_FAILED
    }
}