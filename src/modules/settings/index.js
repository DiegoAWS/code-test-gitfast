import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Input } from 'reactstrap'
import { getRepositories } from '../../redux/repositories/actions'

export default function Settings() {
    const [page, setPage] = useState(1)
    const dispatch = useDispatch()
    const repositories = useSelector((state) => state.repositories.repositories)
    const loading = useSelector((state) => state.repositories.loading)
    const links = useSelector((state) => state.repositories.links)

    useEffect(() => {
        dispatch(getRepositories(page))

        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [page])

    console.log({ repositories, loading, links })

    return (
        <div className='text-white'>
            <div className='d-flex'>
                <Input type="text" aria-label='UserName to search' placeholder='UserName to search' />
            </div>
        </div>
    )
}
