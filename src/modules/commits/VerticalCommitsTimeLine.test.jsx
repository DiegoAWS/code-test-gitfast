import { render, screen } from "@testing-library/react"
import { format } from "date-fns";
import { mockCommits } from "../../constants/test-mock-data/mockCommits"

import VerticalCommitsTimeLine from "./VerticalCommitsTimeLine"

describe('VerticalCommitsTimeLine Component', () => {
    it('render each date into a single data', () => {

        render(<VerticalCommitsTimeLine commitList={mockCommits} />)

        mockCommits.forEach(item => {
            const dateBase = item.commit.author.date

            expect(screen.getByText(format(new Date(dateBase), 'PPPP'))).toBeInTheDocument()
        })



    })
})