import { combineReducers } from 'redux'

import commitsReducer from './commits/reducer'
import profileReducer from './profile/reducer'
import repositoriesReducer from './repositories/reducer'

const rootReducer = combineReducers({
    commits: commitsReducer,
    profile: profileReducer,
    repositories: repositoriesReducer
})

export default rootReducer