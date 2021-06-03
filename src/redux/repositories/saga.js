import { call, put, takeEvery } from 'redux-saga/effects'
import { getAllRepositories } from './services'
import { GET_REPOSITORIES_REQUEST, GET_REPOSITORIES_SUCCESS, GET_REPOSITORIES_FAILED } from './types'



function* fetchRepositories(action) {

    try {
        const repositoriesRequest = yield call(getAllRepositories, action.payload)
        yield put({
            type: GET_REPOSITORIES_SUCCESS,
            repositories: repositoriesRequest.data,
            links: repositoriesRequest.headers.link
        })
    }
    catch (e) {
        yield put({
            type: GET_REPOSITORIES_FAILED,
            message: e.message
        })
    }
}

function* repositoriesSaga() {
    yield takeEvery(GET_REPOSITORIES_REQUEST, fetchRepositories)
}

export default repositoriesSaga