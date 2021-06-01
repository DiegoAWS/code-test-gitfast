import React from 'react'
import { Button, ButtonGroup } from 'reactstrap';

export default function Pagination({ links, loading, page, setPage }) {
    const linksArray = links?.split(',')
    const paginationDataArray = linksArray?.map(item => {

        const pageStart = item.indexOf('?page=');
        const pageEnd = item.indexOf('>;')
        const pageNumber = item.substring(pageStart + 6, pageEnd)

        const relStart = item.indexOf('rel=')
        const relation = item.substring(relStart + 5).replace('"', '')
        return { pageNumber, relation }
    })
    const paginationData = paginationDataArray?.reduce((acc, item) => {
        acc[item.relation] = item.pageNumber
        return acc
    }, {})
    return (
        <>
            {paginationData && <div className='d-flex justify-content-center'>
                <ButtonGroup className='ms-2' size="sm">
                    <Button disabled={loading || !paginationData?.first} className='bg-dark text-primary fs-6' onClick={() => { setPage(paginationData?.first) }} > First </Button>
                    <Button disabled={loading || !paginationData?.prev} className='bg-dark text-primary fs-6' onClick={() => { setPage(paginationData?.prev) }} > Prev </Button>
                    <Button disabled className='bg-dark text-primary fs-6' > {page} </Button>
                    <Button disabled={loading || !paginationData?.next} className='bg-dark text-primary fs-6' onClick={() => { setPage(paginationData?.next) }}>Next</Button>
                    <Button disabled={loading || !paginationData?.last} className='bg-dark text-primary fs-6' onClick={() => { setPage(paginationData?.last) }} > Last </Button>

                </ButtonGroup>
            </div>}
        </>
    )
}
