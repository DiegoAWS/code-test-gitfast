import { call, put, takeEvery } from 'redux-saga/effects'
import { getAllCommits } from './services'
import { GET_COMMITS_REQUEST, GET_COMMITS_SUCCESS, GET_COMMITS_FAILED } from './types'



function* fetchCommits(action) {

    try {
        const commits = yield call(getAllCommits)
        yield put({
            type: GET_COMMITS_SUCCESS,
            commits: commits
        })
    }
    catch (e) {
        yield put({
            type: GET_COMMITS_FAILED,
            message: e.message
        })
    }
}

function* commitsSaga(){
    yield takeEvery(GET_COMMITS_REQUEST,fetchCommits)
}

export default commitsSaga