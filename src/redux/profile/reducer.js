import { toast } from 'react-toastify'
import { GET_PROFILE_REQUEST, GET_PROFILE_SUCCESS, GET_PROFILE_FAILED } from './types'

const initialProfileState = {
    profile: {},
    loading: false
}

const profileReducer = (state = initialProfileState, action) => {

    switch (action.type) {
        case GET_PROFILE_REQUEST:
            return {
                ...state,
                loading: true,
                errors: null
            }
        case GET_PROFILE_SUCCESS:
            return {
                ...state,
                loading: false,
                profile: action.profile
            }

        case GET_PROFILE_FAILED:
            toast.error('An ERROR happens while fetching data')
            return {
                ...state,
                loading: false
            }

        default:
            return state
    }
}

export default profileReducer