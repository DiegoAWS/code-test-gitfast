import React from 'react';

import { screen } from '@testing-library/react';

import NavbarComponent from './Navbar';
import { customRender } from '../setupTests';
import routes from '../constants/routes'

describe('NavbarComponent test', () => {
    const user = 'XXX_USER_XXX'
    const repo = 'XXX_REPO_XXX'

    it('render about link', () => {
        customRender(<NavbarComponent />, { initialState: { repo: { user, repo } } })

        screen.getAllByText(user).forEach(item => {
            expect(item).toBeInTheDocument();
        })
        screen.getAllByText(repo).forEach(item => {
            expect(item).toBeInTheDocument()
        })
    })

    it('Render each Link declared in ./constants/routes.js', () => {
        customRender(<NavbarComponent />, { initialState: { repo: { user, repo } } })

        routes.forEach(item => {
            expect(screen.getByText(item.main)).toBeInTheDocument()
            expect(screen.getByText(item.main).parentElement).toHaveAttribute("href", item.path);
        })
    })

})