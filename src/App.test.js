import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { createMemoryHistory } from 'history'
import React from 'react'
import { Router } from 'react-router-dom'
import App from './App'
import '@testing-library/jest-dom/extend-expect'

describe('Routing System test', () => {

    it('Commits Link and Route test', () => {
        const history = createMemoryHistory()
        render(
            <Router history={history}>
                <App />
            </Router>
        )

        expect(screen.getByText(/Welcome to my Code Test for GitFast enterprise!!/i)).toBeInTheDocument()

        const leftClick = { button: 0 }

        userEvent.click(screen.getAllByText(/Commits/i)[0], leftClick)

        // check that the content changed to the new page

        expect(screen.getByText(/Repository Commits/i)).toBeInTheDocument()
    })

    it('Profile Link and Route test', () => {
        const history = createMemoryHistory()
        render(
            <Router history={history}>
                <App />
            </Router>
        )

        const leftClick = { button: 0 }

        userEvent.click(screen.getAllByText(/Profile/i)[0], leftClick)

        // check that the content changed to the new page

        expect(screen.getByText(/GitHub Profile/i)).toBeInTheDocument()
    })

    test('landing on a bad page', () => {
        const history = createMemoryHistory()
        history.push('/some/bad/route')
        render(
            <Router history={history}>
                <App />
            </Router>
        )
        setTimeout(() => {
            // Redirect to Home
            expect(screen.getByText(/Welcome to my Code Test for GitFast enterprise!!/i)).toBeInTheDocument()
        }, 100)// Time to react-router change the current history and make the redirect(1ms is enougth)

    })


})




