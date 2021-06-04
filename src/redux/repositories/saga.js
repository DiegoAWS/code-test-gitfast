import { call, put, takeEvery } from 'redux-saga/effects'
import { errorFetchingRepositories, saveFetchedRepositories } from './actions'
import { getAllRepositories } from './services'
import { GET_REPOSITORIES_REQUEST } from './types'



export function* fetchRepositories(action) {

    try {
        const repositoriesRequest = yield call(getAllRepositories, action.payload)

        const repositories = repositoriesRequest.data
        const links = repositoriesRequest.headers.link

        yield put(saveFetchedRepositories({ repositories, links }))
    }
    catch (e) {
        yield put(errorFetchingRepositories())
    }
}

function* repositoriesSaga() {
    yield takeEvery(GET_REPOSITORIES_REQUEST, fetchRepositories)
}

export default repositoriesSaga