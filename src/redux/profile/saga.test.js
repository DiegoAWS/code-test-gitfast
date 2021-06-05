import { call, put, takeEvery } from 'redux-saga/effects';
import { errorFetchingProfile, saveFetchedProfile } from './actions';
import profileSaga, { fetchProfile } from './saga';
import { getOneProfile } from './services';
import mockProfile from '../../constants/test-mock-data/mockProfile'


describe('profileSaga', () => {
    const genObject = profileSaga();

    it('should wait for every GET_PROFILE_REQUEST action and call fetchProfile', () => {
        expect(genObject.next().value)
            .toEqual(takeEvery('GET_PROFILE_REQUEST', fetchProfile));
    });

    it('should be done on next iteration', () => {
        expect(genObject.next().done).toBeTruthy();
    });
});

describe('fetchProfile', () => {
    it('success triggers success action with a Profile', () => {

        const generator = fetchProfile();
        const response = {
            data: mockProfile,
            headers: { link: '' }
        };

        expect(generator.next().value)
            .toEqual(call(getOneProfile));

        const profile = response.data
        const links = response.headers.link

        expect(generator.next(response).value)
            .toEqual(put(saveFetchedProfile({ profile, links })));

        expect(generator.next())
            .toEqual({ done: true, value: undefined });
    });

    it('failure triggers failure action', () => {

        const generator = fetchProfile();
        const response = {};

        expect(generator.next().value)
            .toEqual(call(getOneProfile));

        expect(generator.next(response).value)
            .toEqual(put(errorFetchingProfile()));

        expect(generator.next())
            .toEqual({ done: true, value: undefined });
    });
});