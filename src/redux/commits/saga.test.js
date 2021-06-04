import { runSaga } from '@redux-saga/core';
import { call, put, takeEvery } from 'redux-saga/effects';
import { errorFetchingCommits, saveFetchedCommits } from './actions';
import commitsSaga, { fetchCommits } from './saga';
import { getAllCommits } from './services';
import dummyCommits from '../../constants/test-mock-data/dummyCommits'

describe('commitsSaga', () => {
    const genObject = commitsSaga();

    it('should wait for every GET_COMMITS_REQUEST action and call fetchCommits', () => {
        expect(genObject.next().value)
            .toEqual(takeEvery('GET_COMMITS_REQUEST', fetchCommits));
    });

    it('should be done on next iteration', () => {
        expect(genObject.next().done).toBeTruthy();
    });
});

describe('getCharacters', () => {
    it('success triggers success action with characters', () => {
        const action = { payload: { page: 1 } }
        const generator = fetchCommits(action);
        const response = {
            data: dummyCommits,
            headers: { link: '' }
        };
        const commits = response.data
        const links = response.headers.link

        expect(generator.next().value)
            .toEqual(call(getAllCommits, action.payload));

        expect(generator.next(response).value)
            .toEqual(put(saveFetchedCommits({ commits, links })));

        expect(generator.next())
            .toEqual({ done: true, value: undefined });
    });

    it('failure triggers failure action', () => {
        const action = { payload: { page: 1 } }
        const generator = fetchCommits(action);
        const response = {};
        const error = { message: "Cannot read property 'link' of undefined" }

        expect(generator.next().value)
            .toEqual(call(getAllCommits, action.payload));

        expect(generator.next(response).value)
            .toEqual(put(errorFetchingCommits(error)));

        expect(generator.next())
            .toEqual({ done: true, value: undefined });
    });
});