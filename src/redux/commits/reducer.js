import { GET_COMMITS_REQUEST, GET_COMMITS_SUCCESS, GET_COMMITS_FAILED } from './types'
import { GENERIC_FETCHING_ERROR } from '../../helpers/genericErrorToast';
import { toast } from 'react-toastify';

export const initialCommitsState = {
    commits: [],
    loading: false,
    links: '',
    errors: null
}

const commitsReducer = (state = initialCommitsState, action) => {

    switch (action.type) {
        case GET_COMMITS_REQUEST:
            return {
                ...state,
                loading: true,
                errors: null
            }
        case GET_COMMITS_SUCCESS:
            return {
                ...state,
                errors: null,
                loading: false,
                commits: action.commits,
                links: action.links
            }

        case GET_COMMITS_FAILED:
            toast.error(GENERIC_FETCHING_ERROR)
            return {
                ...state,
                loading: false,
                errors: true
            }

        default:
            return state
    }
}

export default commitsReducer