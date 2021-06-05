
import { render, screen } from '@testing-library/react';
import { mockLinks } from '../constants/test-mock-data/mockLinks'
import Pagination from './Pagination';

describe('Pagination component', () => {

    it('Pagination number is displaying properly', () => {
        render(
            <Pagination
                links={mockLinks}
                loading={false}
                page={123456789} // Very weird Number
                setPage={() => { }}
            />)

        expect(screen.getByText('123456789')).toBeInTheDocument();
    })

    it('Disabled Buttons while loading', () => {
        render(
            <Pagination
                links={mockLinks}
                loading={true}
                page={1}
                setPage={() => { }}
            />)
        const buttonsArray = document.querySelectorAll("button")
        buttonsArray.forEach(item => {
            expect(item.disabled).toBeTruthy()
        })
    })

});