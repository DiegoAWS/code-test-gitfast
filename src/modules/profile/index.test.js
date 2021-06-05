import React from 'react';

import { cleanup, screen } from '@testing-library/react';
import { customRender } from '../../setupTests';
import Profile from '.';
import loadingIcon from '../../assets/imgs/loadingIcon.gif'
import { mockProfile } from '../../constants/test-mock-data/mockProfile'

describe('Profile test', () => {

    afterEach(cleanup)

    it('Render Loading State', () => {
        customRender(<Profile />, {
            initialState: {
                profile: {
                    profile: {},
                    loading: true,
                    errors: false,
                    links: ''
                }
            }
        })
        const displayedImage = document.querySelector("img");

        expect(displayedImage.src).toContain(loadingIcon);

    })


    it('Render Profile Rendered', () => {
        customRender(<Profile />, {
            initialState: {
                profile: {
                    profile: mockProfile,
                    loading: false,
                    errors: false,
                    links: ''
                }
            }
        })

        expect(screen.getByText(/TESTING TEXT PRESENT/i)).toBeInTheDocument()
    })


})