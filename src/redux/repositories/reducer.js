import { includes } from 'ramda'
import { GENERIC_FETCHING_ERROR } from '../../helpers/genericErrorToast';
import { toast } from 'react-toastify';
import { GET_REPOSITORIES_REQUEST, GET_REPOSITORIES_SUCCESS, GET_REPOSITORIES_FAILED } from './types'

export const initialRepositoriesState = {
    repositories: [],
    loading: false,
    errors: false,
    links: '',
}

const repositoriesReducer = (state = initialRepositoriesState, action) => {

    switch (action.type) {
        case GET_REPOSITORIES_REQUEST:
            return {
                ...state,
                loading: true,
                errors: false
            }
        case GET_REPOSITORIES_SUCCESS:
            return {
                ...state,
                loading: false,
                errors: false,
                repositories: action.repositories,
                links: action.links
            }

        case GET_REPOSITORIES_FAILED:

            const error404 = includes('404', action.message) // UserName not Found
            !error404 && toast.error(GENERIC_FETCHING_ERROR) //Other error than a 404
            return {
                ...state,
                loading: false,
                error404,
                errors: true
            }

        default:
            return state
    }
}

export default repositoriesReducer