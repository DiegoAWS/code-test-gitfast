import React from 'react';

import { cleanup, screen } from '@testing-library/react';
import { customRender } from '../../setupTests';
import Commits from '.';
import loadingIcon from '../../assets/imgs/loadingIcon.gif'
import { mockCommits } from '../../constants/test-mock-data/mockCommits'

describe('NavbarComponent test', () => {

    afterEach(cleanup)

    it('Render Loading State', () => {
        customRender(<Commits />, {
            initialState: {
                commits: {
                    commits: [],
                    loading: true,
                    errors: false,
                    links: ''
                }
            }
        })
        const displayedImage = document.querySelector("img");

        expect(displayedImage.src).toContain(loadingIcon);

    })


    it('Render Commits Rendered', () => {
        customRender(<Commits />, {
            initialState: {
                commits: {
                    commits: mockCommits,
                    loading: false,
                    errors: false,
                    links: ''
                }
            }
        })

        expect(screen.getByText(/TESTING TEXT PRESENT/i)).toBeInTheDocument()
    })


})