import { GET_PROFILE_FAILED, GET_PROFILE_REQUEST, GET_PROFILE_SUCCESS } from './types'

export const getProfile = () => ({
    type: GET_PROFILE_REQUEST
})

export const saveFetchedProfile = ({ profile, links }) => {
    return {
        type: GET_PROFILE_SUCCESS,
        profile,
        links
    }
}

export const errorFetchingProfile = () => {
    return {
        type: GET_PROFILE_FAILED
    }
}