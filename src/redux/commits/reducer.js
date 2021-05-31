import {  GET_COMMITS_REQUEST, GET_COMMITS_SUCCESS, GET_COMMITS_FAILED } from './types'

const initialCommitsState = {
    commits: [],
    loading: false,
    errors: null
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
                loading:false,
                commits: action.commits
            }

            case GET_COMMITS_FAILED:
            return {
                ...state,
                loading:false,
                errors: action.message
            }
            
        default:
            return state
    }
}

export default commitsReducer