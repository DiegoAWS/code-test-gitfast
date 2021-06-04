import { errorFetchingCommits, getCommits, saveFetchedCommits } from "./actions";
import { GET_COMMITS_FAILED, GET_COMMITS_REQUEST, GET_COMMITS_SUCCESS } from "./types";
import mockCommits from '../../constants/test-mock-data/mockCommits'


// Tests
describe('Commits Actions', () => {
    it('Gets All Commits', () => {
        const page = '1'
        const action = getCommits(page);

        expect(action).toEqual({
            type: GET_COMMITS_REQUEST,
            payload: page
        });
    });

    it('Save fetched Commits', () => {

        const links = ''
        const commits = mockCommits
        const action = saveFetchedCommits({ commits, links });

        expect(action).toEqual({
            type: GET_COMMITS_SUCCESS,
            commits,
            links
        });
    });

    it('Fetching Error', () => {

        const action = errorFetchingCommits();

        expect(action).toEqual({
            type: GET_COMMITS_FAILED
        });
    });


});

