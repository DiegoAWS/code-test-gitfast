import {combineReducers} from 'redux'

import commitsReducer from './commits/reducer'

const rootReducer = combineReducers({
    commits:commitsReducer
})

export default rootReducer