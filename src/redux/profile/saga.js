import { call, put, takeEvery } from 'redux-saga/effects'
import { getAllProfile } from './services'
import { GET_PROFILE_REQUEST, GET_PROFILE_SUCCESS, GET_PROFILE_FAILED } from './types'



function* fetchProfile(action) {

    try {
        const profileRequest = yield call(getAllProfile, action.payload)
        yield put({
            type: GET_PROFILE_SUCCESS,
            profile: profileRequest.data,
            links: profileRequest.headers.link
        })
    }
    catch (e) {
        yield put({
            type: GET_PROFILE_FAILED,
            message: e.message
        })
    }
}

function* profileSaga() {
    yield takeEvery(GET_PROFILE_REQUEST, fetchProfile)
}

export default profileSaga