import { call, put, takeEvery } from 'redux-saga/effects';
import { errorFetchingCommits, saveFetchedCommits } from './actions';
import commitsSaga, { fetchCommits } from './saga';
import { getAllCommits } from './services';
import { mockCommits } from '../../constants/test-mock-data/mockCommits'

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

describe('fetchCommits', () => {
    it('success triggers success action with commits', () => {
        const action = { payload: { page: 1 } }
        const generator = fetchCommits(action);
        const response = {
            data: mockCommits,
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

        expect(generator.next().value)
            .toEqual(call(getAllCommits, action.payload));

        expect(generator.next(response).value)
            .toEqual(put(errorFetchingCommits()));

        expect(generator.next())
            .toEqual({ done: true, value: undefined });
    });
});