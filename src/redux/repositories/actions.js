import { GET_REPOSITORIES_REQUEST } from './types'

export const getRepositories = ({ userName, page }) => {
    return {
        type: GET_REPOSITORIES_REQUEST,
        payload: { userName, page }
    }
}