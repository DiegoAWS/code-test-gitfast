import repositoriesReducer, { initialRepositoriesState } from './reducer'
import { GET_REPOSITORIES_FAILED, GET_REPOSITORIES_REQUEST, GET_REPOSITORIES_SUCCESS } from './types'
import { mockRepositories } from '../../constants/test-mock-data/mockRepositories'
import { mockLinks } from '../../constants/test-mock-data/mockLinks'

describe('Repositories repositoriesReducer', () => {
    it('should return the initial state', () => {
        expect(repositoriesReducer(undefined, {})).toEqual(initialRepositoriesState)
    })

    it('should handle GET_REPOSITORIES_REQUEST', () => {
        expect(
            repositoriesReducer([], {
                type: GET_REPOSITORIES_REQUEST
            })
        ).toEqual({
            loading: true,
            errors: null
        })
    })

    it('should handle GET_REPOSITORIES_SUCCESS', () => {

        expect(
            repositoriesReducer([], {
                type: GET_REPOSITORIES_SUCCESS,
                repositories: mockRepositories,
                links: mockLinks
            })
        ).toEqual({
            loading: false,
            links: mockLinks,
            repositories: mockRepositories,
            errors: null
        })
    })

    it('should handle GET_REPOSITORIES_FAILED 404', () => {

        expect(
            repositoriesReducer([], {
                type: GET_REPOSITORIES_FAILED,
                message: 'Error 404'
            })
        ).toEqual({
            loading: false,
            errors: true,
            error404: true
        })
    })

    it('should handle GET_REPOSITORIES_FAILED Other than 404', () => {

        expect(
            repositoriesReducer([], {
                type: GET_REPOSITORIES_FAILED,
                message: 'Error 500'
            })
        ).toEqual({
            loading: false,
            errors: true,
            error404: false
        })
    })
})