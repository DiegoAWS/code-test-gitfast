import { format } from 'date-fns/fp';
import {
    compose as composeFp,

    map as mapFp,
    groupBy,
    path,
    head,
    values
} from 'ramda';

const toDate = (input) => new Date(input)

export const getDateFromCommit = composeFp
    (
        format('yyyy-M-dd'),
        toDate,
        path(['commit', 'author', 'date'])
    )



export const createStructure = input => ({
    commits: input,
    date: composeFp
        (
            path(['commit', 'author', 'date']),
            head
        )(input)

})


export const groupCommitsByDate = composeFp
    (
        mapFp(createStructure),
        values,
        groupBy(getDateFromCommit)
    )



