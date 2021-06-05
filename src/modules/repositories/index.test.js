import React from 'react';

import { screen } from '@testing-library/react';
import { customRender } from '../../setupTests';
import Repositories from '.';
import loadingIcon from '../../assets/imgs/loadingIcon.gif'
import { mockRepositories } from '../../constants/test-mock-data/mockRepositories'

describe('Repositories test', () => {


    it('Render Loading State', () => {
        customRender(<Repositories />, {
            initialState: {
                repositories: {
                    repositories: [],
                    loading: true,
                    errors: false,
                    links: ''
                }
            }
        })
        const displayedImage = document.querySelector("img");

        expect(displayedImage.src).toContain(loadingIcon);

    })


    it('Render Repositories Rendered', () => {
        customRender(<Repositories />, {
            initialState: {
                repositories: {
                    repositories: mockRepositories,
                    loading: false,
                    errors: false,
                    links: ''
                }
            }
        })

        expect(screen.getByText(/TESTING TEXT PRESENT/i)).toBeInTheDocument()
    })


})