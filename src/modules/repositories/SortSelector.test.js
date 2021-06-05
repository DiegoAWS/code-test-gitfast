import { fireEvent, render, screen } from "@testing-library/react"
import SortSelector from "./SortSelector"

describe('SortSelector Test', () => {

    const sortSearch = 'XXX_TEST_XXX'
    const mockSetSortSearch = jest.fn()



    it('Render text behavior', () => {
        render(<SortSelector sortSearch={sortSearch} setSortSearch={mockSetSortSearch} />)

        expect(screen.getByText(sortSearch)).toBeInTheDocument()
    })


    it('Click Selection Behavior', () => {
        render(<SortSelector sortSearch={sortSearch} setSortSearch={mockSetSortSearch} />)

        const button = screen.getByText('Created')
        fireEvent.click(button)
        expect(mockSetSortSearch).toBeCalledWith('created')

        const button1 = screen.getByText('Updated')
        fireEvent.click(button1)
        expect(mockSetSortSearch).toBeCalledWith('updated')

        const button2 = screen.getByText('Pushed')
        fireEvent.click(button2)
        expect(mockSetSortSearch).toBeCalledWith('pushed')

        const button3 = screen.getByText('Full name')
        fireEvent.click(button3)
        expect(mockSetSortSearch).toBeCalledWith('full_name')

    })
})