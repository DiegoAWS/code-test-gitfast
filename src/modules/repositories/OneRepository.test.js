import { screen } from "@testing-library/react"
import { mockRepositories } from "../../constants/test-mock-data/mockRepositories"
import { customRender } from "../../setupTests"
import OneRepository from "./OneRepository"

describe('One Repository Component', () => {
    it('render test property', () => {

        customRender(<OneRepository repo={mockRepositories[0]} />)

        expect(screen.getByText('TESTING TEXT PRESENT')).toBeInTheDocument()


    })
})