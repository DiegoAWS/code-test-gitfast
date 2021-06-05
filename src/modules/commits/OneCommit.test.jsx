import { render, screen } from "@testing-library/react"
import { mockCommits } from "../../constants/test-mock-data/mockCommits"
import OneCommit from "./OneCommit"

describe('One Commit Component', () => {
    it('render a test property', () => {

        render(<OneCommit commit={mockCommits[0]} />)

        expect(screen.getByText('TESTING TEXT PRESENT')).toBeInTheDocument()


    })
})