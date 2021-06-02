import { GET_PROFILE_REQUEST, GET_PROFILE_SUCCESS, GET_PROFILE_FAILED } from './types'

const initialProfileState = {
    profile: {},
    loading: false,
    errors: null
}

const profileReducer = (state = initialProfileState, action) => {

    switch (action.type) {
        case GET_PROFILE_REQUEST:
            return {
                ...state,
                loading: true
            }
        case GET_PROFILE_SUCCESS:
            return {
                ...state,
                loading: false,
                profile: action.profile
            }

        case GET_PROFILE_FAILED:
            return {
                ...state,
                loading: false,
                errors: action.message
            }

        default:
            return state
    }
}

export default profileReducer