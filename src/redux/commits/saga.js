import { call, put, takeEvery } from 'redux-saga/effects'
import { errorFetchingCommits, saveFetchedCommits } from './actions'
import { getAllCommits } from './services'
import { GET_COMMITS_REQUEST } from './types'



export function* fetchCommits(action) {

    try {
        const commitsRequest = yield call(getAllCommits, action.payload)
        const commits = commitsRequest.data
        const links = commitsRequest.headers.link
        yield put(saveFetchedCommits({ commits, links }))
    }
    catch (e) {
        yield put(errorFetchingCommits(e))
    }
}

function* commitsSaga() {
    yield takeEvery(GET_COMMITS_REQUEST, fetchCommits)
}

export default commitsSaga