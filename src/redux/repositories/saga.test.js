import { call, put, takeEvery } from 'redux-saga/effects';
import { mockRepositories } from '../../constants/test-mock-data/mockRepositories';
import { errorFetchingRepositories, saveFetchedRepositories } from './actions';
import repositoriesSaga, { fetchRepositories } from './saga';
import { getAllRepositories } from './services';

describe('repositoriesSaga', () => {
    const genObject = repositoriesSaga();

    it('should wait for every GET_REPOSITORIES_REQUEST action and call fetchRepositories', () => {
        expect(genObject.next().value)
            .toEqual(takeEvery('GET_REPOSITORIES_REQUEST', fetchRepositories));
    });

    it('should be done on next iteration', () => {
        expect(genObject.next().done).toBeTruthy();
    });
});

describe('fetchRepositories', () => {
    it('success triggers success action with commits', () => {
        const action = {
            payload: {
                userName: 'DiegoCuba',
                page: 1,
                type: 'owner',
                sort: 'full_name'
            }
        }
        const generator = fetchRepositories(action);
        const response = {
            data: mockRepositories,
            headers: { link: '' }
        };
        expect(generator.next().value)
            .toEqual(call(getAllRepositories, action.payload));

        const repositories = response.data
        const links = response.headers.link

        expect(generator.next(response).value)
            .toEqual(put(saveFetchedRepositories({ repositories, links })));

        expect(generator.next())
            .toEqual({ done: true, value: undefined });
    });

    it('failure triggers failure action', () => {
        const action = { payload: { page: 1 } }
        const generator = fetchRepositories(action);
        const response = {};

        expect(generator.next().value)
            .toEqual(call(getAllRepositories, action.payload));

        expect(generator.next(response).value)
            .toEqual(put(errorFetchingRepositories()));

        expect(generator.next())
            .toEqual({ done: true, value: undefined });
    });
});