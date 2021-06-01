import { GET_COMMITS_REQUEST, GET_COMMITS_SUCCESS, GET_COMMITS_FAILED } from './types'
import { toast } from 'react-toastify';

const initialCommitsState = {
    commits: [],
    loading: false,
    links: ''
}

const commitsReducer = (state = initialCommitsState, action) => {

    switch (action.type) {
        case GET_COMMITS_REQUEST:
            return {
                ...state,
                loading: true
            }
        case GET_COMMITS_SUCCESS:
            return {
                ...state,
                loading: false,
                commits: action.commits,
                links: action.links
            }

        case GET_COMMITS_FAILED:
            toast.error(action.message)
            return {
                ...state,
                loading: false
            }

        default:
            return state
    }
}

export default commitsReducer