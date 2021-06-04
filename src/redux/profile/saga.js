import { call, put, takeEvery } from 'redux-saga/effects'
import { saveFetchedProfile, errorFetchingProfile } from './actions'
import { getOneProfile } from './services'
import { GET_PROFILE_REQUEST } from './types'



export function* fetchProfile() {

    try {
        const profileRequest = yield call(getOneProfile)

        const profile = profileRequest.data
        const links = profileRequest.headers.link

        yield put(saveFetchedProfile({ profile, links }))
    }
    catch (e) {
        yield put(errorFetchingProfile())
    }
}

function* profileSaga() {
    yield takeEvery(GET_PROFILE_REQUEST, fetchProfile)
}

export default profileSaga