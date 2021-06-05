import RightProfile from './RightProfile'
import { render, screen } from '@testing-library/react';

const profile = {

    company: 'TEST NAME',
    location: 'Test City',
    bio: 'Bio'

}
describe('RightProfile  component', () => {


    it('Text is rendering', () => {
        render(<RightProfile profile={profile} />)



        expect(screen.getByText(/Company/)).toBeInTheDocument();
        expect(
            screen.getByText(/Company/)
                .parentElement
                .getElementsByTagName('input')[0]
                .value)
            .toBe(profile.company);

        expect(screen.getByText(/Location/)).toBeInTheDocument();

        expect(
            screen.getByText(/Location/)
                .parentElement
                .getElementsByTagName('input')[0]
                .value)
            .toBe(profile.location);

        screen.getAllByText(/Bio/).forEach(item => {
            expect(item).toBeInTheDocument();
        })



    });
});