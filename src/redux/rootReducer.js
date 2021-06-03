import { combineReducers } from 'redux'

import commitsReducer from './commits/reducer'
import profileReducer from './profile/reducer'
import repoReducer from './repo/reducer'
import repositoriesReducer from './repositories/reducer'

const rootReducer = combineReducers({
    commits: commitsReducer,
    profile: profileReducer,
    repositories: repositoriesReducer,
    repo: repoReducer

})

export default rootReducer