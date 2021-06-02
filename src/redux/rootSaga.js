import { all } from 'redux-saga/effects'
import commitsSaga from './commits/saga'
import profileSaga from './profile/saga'

export default function* rootSaga() {
    yield all([
        commitsSaga(),
        profileSaga()
    ])
}