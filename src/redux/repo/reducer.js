import { toast } from 'react-toastify'
import { SET_NEW_REPO_USER } from './types'

export const initialRepoState = {
    repo: 'code-test-gitfast',
    user: 'DiegoCuba',

}

const repoReducer = (state = initialRepoState, action) => {

    switch (action.type) {
        case SET_NEW_REPO_USER:
            toast.success(`Set successfully: ${action.payload.user}/${action.payload.repo}`)
            return {
                repo: action.payload.repo,
                user: action.payload.user
            }

        default:
            return state
    }
}

export default repoReducer