
import React from 'react'
import { Button, ButtonGroup } from 'reactstrap';
import processLinkText from '../helpers/processLinkText';

export default function Pagination({ links, loading, page, setPage }) {


    const paginationData = links && processLinkText(links)

    return (
        <>
            {links && <div className='flex-grow-1 d-flex justify-content-end '>
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
