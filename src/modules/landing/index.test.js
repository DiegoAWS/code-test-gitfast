import LandingPage from '.'
import { render, screen } from '@testing-library/react';
import landingBackground from '../../assets/imgs/landingBackground.jpg'


describe('LandingPage component', () => {

    it('Image is displaying', () => {
        render(<LandingPage />)

        const displayedImage = document.querySelector("img");

        expect(displayedImage.src).toContain(landingBackground);
    })


    it('Text is rendering', () => {
        render(<LandingPage />)



        expect(screen.getByText).toBeInTheDocument();


    })
});