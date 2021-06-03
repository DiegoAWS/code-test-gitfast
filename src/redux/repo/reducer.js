import { SET_NEW_REPO_USER } from './types'

const initialRepositoriesState = {
    repo: 'code-test-gitfast',
    user: 'DiegoCuba',

}

const repoReducer = (state = initialRepositoriesState, action) => {

    switch (action.type) {
        case SET_NEW_REPO_USER:

            return {
                repo: action.payload.repo,
                user: action.payload.user
            }

        default:
            return state
    }
}

export default repoReducer