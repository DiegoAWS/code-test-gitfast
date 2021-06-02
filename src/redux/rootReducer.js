import { combineReducers } from 'redux'

import commitsReducer from './commits/reducer'
import profileReducer from './profile/reducer'

const rootReducer = combineReducers({
    commits: commitsReducer,
    profile: profileReducer
})

export default rootReducer