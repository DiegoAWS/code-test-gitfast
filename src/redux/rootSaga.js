import {all} from 'redux-saga/effects'
import commitsSaga from './commits/saga'

export default function* rootSaga(){
    yield all([
        commitsSaga()
    ])
}