
import { render } from '@testing-library/react';
import SpinnerLoading from './SpinnerLoading';
import loadingIcon from '../assets/imgs/loadingIcon.gif'


describe('SpinnerLoading component', () => {

    it('Image is displaying if loading', () => {
        render(<SpinnerLoading loading />)

        const displayedImage = document.querySelector("img");

        expect(displayedImage.src).toContain(loadingIcon);
    })


    it('Render Nothing if loading is false', () => {
        render(<SpinnerLoading loading={false} />)

        const displayedImage = document.querySelector("img");

        expect(displayedImage).toBeNull();


    })
});