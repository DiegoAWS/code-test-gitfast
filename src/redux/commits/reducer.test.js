import commitsReducer, { initialCommitsState } from './reducer'
import { GET_COMMITS_FAILED, GET_COMMITS_REQUEST, GET_COMMITS_SUCCESS } from './types'
import { mockCommits } from '../../constants/test-mock-data/mockCommits'
import { mockLinks } from '../../constants/test-mock-data/mockLinks'

describe('Commits commitsReducer', () => {
    it('should return the initial state', () => {
        expect(commitsReducer(undefined, {})).toEqual(initialCommitsState)
    })

    it('should handle GET_COMMITS_REQUEST', () => {
        expect(
            commitsReducer([], {
                type: GET_COMMITS_REQUEST
            })
        ).toEqual({
            loading: true,
            errors: false
        })
    })

    it('should handle GET_COMMITS_SUCCESS', () => {

        expect(
            commitsReducer([], {
                type: GET_COMMITS_SUCCESS,
                commits: mockCommits,
                links: mockLinks
            })
        ).toEqual({
            loading: false,
            commits: mockCommits,
            links: mockLinks,
            errors: false
        })
    })

    it('should handle GET_COMMITS_FAILED', () => {

        expect(
            commitsReducer([], {
                type: GET_COMMITS_FAILED,

            })
        ).toEqual({
            loading: false,
            errors: true
        })
    })
})