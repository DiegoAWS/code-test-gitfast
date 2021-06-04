import profileReducer, { initialProfileState } from './reducer'
import { GET_PROFILE_FAILED, GET_PROFILE_REQUEST, GET_PROFILE_SUCCESS } from './types'
import { mockProfile } from '../../constants/test-mock-data/mockProfile'

describe('Profile profileReducer', () => {
    it('should return the initial state', () => {
        expect(profileReducer(undefined, {})).toEqual(initialProfileState)
    })

    it('should handle GET_PROFILE_REQUEST', () => {
        expect(
            profileReducer([], {
                type: GET_PROFILE_REQUEST
            })
        ).toEqual({
            loading: true,
            errors: null
        })
    })

    it('should handle GET_PROFILE_SUCCESS', () => {

        expect(
            profileReducer([], {
                type: GET_PROFILE_SUCCESS,
                profile: mockProfile
            })
        ).toEqual({
            loading: false,
            profile: mockProfile,
            errors: null
        })
    })

    it('should handle GET_PROFILE_FAILED', () => {

        expect(
            profileReducer([], {
                type: GET_PROFILE_FAILED,

            })
        ).toEqual({
            loading: false,
            errors: true
        })
    })
})