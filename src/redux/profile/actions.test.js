import { errorFetchingProfile, getProfile, saveFetchedProfile } from "./actions";
import { GET_PROFILE_FAILED, GET_PROFILE_REQUEST, GET_PROFILE_SUCCESS } from "./types";
import mockProfile from '../../constants/test-mock-data/mockProfile'


// Tests
describe('Profile Actions', () => {
    it('Gets All Profile', () => {
        const action = getProfile();

        expect(action).toEqual({
            type: GET_PROFILE_REQUEST
        });
    });

    it('Save fetched Profile', () => {

        const links = ''
        const profile = mockProfile
        const action = saveFetchedProfile({ profile, links });

        expect(action).toEqual({
            type: GET_PROFILE_SUCCESS,
            profile,
            links
        });
    });

    it('Fetching Error', () => {

        const action = errorFetchingProfile();

        expect(action).toEqual({
            type: GET_PROFILE_FAILED
        });
    });


});

