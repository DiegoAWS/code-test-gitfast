import { fireEvent, render, screen } from "@testing-library/react"
import TypeSelector from "./TypeSelector"

describe('TypeSelector Test', () => {

    const typeSearch = 'XXX_TEST_XXX'

    const mockSetTypeSearch = jest.fn()


    it('Render text behavior', () => {

        render(<TypeSelector typeSearch={typeSearch} setTypeSearch={mockSetTypeSearch} />)

        expect(screen.getByText(typeSearch)).toBeInTheDocument()
    })

    it('Click Selection Behavior', () => {

        render(<TypeSelector typeSearch={typeSearch} setTypeSearch={mockSetTypeSearch} />)

        const button = screen.getByText('All')
        fireEvent.click(button)
        expect(mockSetTypeSearch).toBeCalledWith('all')

        const button1 = screen.getByText('Owner')
        fireEvent.click(button1)
        expect(mockSetTypeSearch).toBeCalledWith('owner')

        const button2 = screen.getByText('Member')
        fireEvent.click(button2)
        expect(mockSetTypeSearch).toBeCalledWith('member')

    })
})