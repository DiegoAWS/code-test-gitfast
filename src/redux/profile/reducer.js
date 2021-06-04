import { GENERIC_FETCHING_ERROR } from '../../helpers/genericErrorToast';
import { toast } from 'react-toastify';
import { GET_PROFILE_REQUEST, GET_PROFILE_SUCCESS, GET_PROFILE_FAILED } from './types'

export const initialProfileState = {
    profile: {},
    loading: false,
    errors: null
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
                errors: null,
                profile: action.profile
            }

        case GET_PROFILE_FAILED:
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

export default profileReducer