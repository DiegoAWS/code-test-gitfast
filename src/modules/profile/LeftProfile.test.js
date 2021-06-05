import LeftProfile from './LeftProfile'
import { render, screen } from '@testing-library/react';
import usersIcon from '../../assets/imgs/usersIcon.svg'

const profile = {

    avatar_url: usersIcon,
    name: 'TEST NAME',
    login: 'TestName'

}
describe('LeftProfile component', () => {

    it('Image is displaying', () => {
        render(<LeftProfile profile={profile} />)

        const displayedImages = document.querySelectorAll("img");
        displayedImages.forEach(item => {
            expect(item.src).toContain(usersIcon);
        })

    })


    it('Text is rendering', () => {
        render(<LeftProfile profile={profile} />)

        expect(screen.getByText(profile.name)).toBeInTheDocument();
        expect(screen.getByText(profile.login)).toBeInTheDocument();


    })
});