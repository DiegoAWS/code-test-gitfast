import { createStructure, getDateFromCommit, groupCommitsByDate } from './groupCommitsByDate'
import { mockCommits } from '../constants/test-mock-data/mockCommits'

describe('Proccess Links Test', () => {


    it('Test getDateFromCommit()', () => {

        expect(getDateFromCommit(mockCommits[0])).toEqual('2021-06-03')
    })

    it('Test createStructure()', () => {

        expect(createStructure(mockCommits)).toEqual({
            date: '2021-06-03T10:10:45',
            commits: mockCommits
        })
    })

    it('Test groupCommitByDate', () => {
        // expect()
        const processed = groupCommitsByDate(mockCommits)

        expect(processed[0].commits).toEqual(mockCommits)
        expect(processed[0].date).toEqual('2021-06-03T10:10:45')

    })
});

