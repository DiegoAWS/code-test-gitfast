import repoReducer, { initialRepoState } from './reducer'
import { SET_NEW_REPO_USER } from './types'

const mockData = {
    repo: 'testRepo',
    user: 'testUser'
}

describe('Repo reducer Tet', () => {
    it('should return the initial state', () => {
        expect(repoReducer(undefined, {})).toEqual(initialRepoState)
    })

    it('should handle GET_REPOSITORIES_REQUEST', () => {
        expect(
            repoReducer([], {
                type: SET_NEW_REPO_USER,
                payload: mockData
            })
        ).toEqual(mockData)
    })

})