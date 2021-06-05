import { errorFetchingRepositories, getRepositories, saveFetchedRepositories } from "./actions";
import { GET_REPOSITORIES_FAILED, GET_REPOSITORIES_REQUEST, GET_REPOSITORIES_SUCCESS } from "./types";
import mockRepositories from '../../constants/test-mock-data/mockRepositories'


// Tests
describe('Repositories Actions', () => {
    it('Gets All Repositories', () => {
        const payload = { ramdomPayload: 'XYZ' }
        const action = getRepositories(payload);

        expect(action).toEqual({
            type: GET_REPOSITORIES_REQUEST,
            payload
        });
    });

    it('Save fetched Repositories', () => {

        const links = ''
        const repositories = mockRepositories
        const action = saveFetchedRepositories({ repositories, links });

        expect(action).toEqual({
            type: GET_REPOSITORIES_SUCCESS,
            repositories,
            links
        });
    });

    it('Fetching Error', () => {
        const error = {
            message: 'XXX_TEST_XXX'
        }
        const action = errorFetchingRepositories(error);

        expect(action).toEqual({
            type: GET_REPOSITORIES_FAILED,
            message: error.message
        });
    });


});

