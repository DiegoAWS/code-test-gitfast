import { GET_REPOSITORIES_REQUEST, GET_REPOSITORIES_SUCCESS, GET_REPOSITORIES_FAILED } from './types'

const initialRepositoriesState = {
    repositories: [],
    loading: false,
    errors: null,
    links: ''
}

const repositoriesReducer = (state = initialRepositoriesState, action) => {

    switch (action.type) {
        case GET_REPOSITORIES_REQUEST:
            return {
                ...state,
                loading: true,
                errors: null
            }
        case GET_REPOSITORIES_SUCCESS:
            return {
                ...state,
                loading: false,
                repositories: action.repositories,
                links: action.links
            }

        case GET_REPOSITORIES_FAILED:
            return {
                ...state,
                loading: false,
                errors: action.message
            }

        default:
            return state
    }
}

export default repositoriesReducer