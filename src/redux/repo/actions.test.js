import { setNewRepoUser } from "./actions";
import { SET_NEW_REPO_USER } from "./types";


// Tests
describe('Repo User Actions', () => {
    it('Set New Repo User', () => {
        const payload = { ramdomPayload: 'XYZ' }
        const action = setNewRepoUser(payload);

        expect(action).toEqual({
            type: SET_NEW_REPO_USER,
            payload
        });
    });

});

