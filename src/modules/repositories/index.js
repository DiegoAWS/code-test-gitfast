import React, { useEffect, useState, useRef } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Input } from 'reactstrap'
import { getRepositories } from '../../redux/repositories/actions'
import SpinnerLoading from '../../components/SpinnerLoading'
import { includes } from 'ramda'
import OneRepository from './OneRepository'
import Pagination from '../../components/Pagination'
import TypeSelector from './TypeSelector'
import SortSelector from './SortSelector'


const clearText = (dirtyText) => {
    const inputText = dirtyText.replace(/[^a-zA-Z0-9-]/g, '')// Avoiding invalid URL characters 
    return inputText
}

export default function Settings() {
    const [page, setPage] = useState(1)
    const [searchingText, setSearchingText] = useState('DiegoCuba')
    const [typeSearch, setTypeSearch] = useState('owner')
    const [sortSearch, setSortSearch] = useState('full_name')
    const [userNameInput, setUserNameInput] = useState('DiegoCuba')



    const dispatch = useDispatch()

    const repositories = useSelector((state) => state.repositories.repositories)
    const loading = useSelector((state) => state.repositories.loading)
    const errors = useSelector((state) => state.repositories.errors)
    const error404 = errors && includes('404', errors) // UserName not Found

    const links = useSelector((state) => state.repositories.links)

    useEffect(() => {
        if (searchingText)  //If there is no UserName to search, avoid the unnecessary search
        {
            dispatch(getRepositories(
                {
                    userName: searchingText,
                    type: typeSearch,
                    page,
                    sort: sortSearch
                }
            ))

        }

        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [page, searchingText, typeSearch, sortSearch])

    const timeout = useRef();


    const searchInputHandler = (e) => {

        const inputText = clearText(e?.target?.value)

        setUserNameInput(inputText)// Making our Input Controlled

        timeout.current && clearTimeout(timeout.current);// Remove prev. setTimeout

        timeout.current = setTimeout(() => {

            setSearchingText(inputText || null)// If inputText is '', set as null so the input Looks like waiting for inputs

        }, 1000); // Just Search if User Stop Typing
    }

    const searchInputKeyUp = (e) => {
        const keyPressedCode = e.keyCode

        if (keyPressedCode === 13) {
            timeout.current && clearTimeout(timeout.current);// Remove prev. setTimeout
            const inputText = clearText(e?.target?.value)
            setSearchingText(inputText || null)// If inputText is '', set as null so the input Looks like waiting for inputs
        }

    }

    const colorInputBorder = userNameInput === searchingText // User Stop typing
        ? error404
            ? 'border-danger' // Non existing GitHub UserName
            : 'border-primary' // UserName founded
        : 'border-light' // User is typing

    return (
        <div className='p-4  p-lg-5 text-white'>
            <div className='d-flex align-items-center p-2'>
                <div className='w-75'>
                    <Input type="text"
                        className={`border border-3 shadow-none ${colorInputBorder}`}
                        value={userNameInput}
                        aria-label='UserName to search'
                        placeholder='UserName to search'
                        onChange={searchInputHandler}
                        onKeyUp={searchInputKeyUp}
                    />
                </div>

                <div className='d-flex mx-3'>
                    <div className='me-2'>Searching: </div>
                    <div className='text-primary'>{searchingText}</div>
                    <SpinnerLoading loading={loading} />
                </div>
                <div className='d-flex mx-3'>
                    <TypeSelector typeSearch={typeSearch} setTypeSearch={setTypeSearch} />
                </div>
                <div className='d-flex mx-3'>
                    <SortSelector sortSearch={sortSearch} setSortSearch={setSortSearch} />
                </div>
            </div>

            <Pagination links={links} loading={loading} page={page} setPage={setPage} />

            <div>

                {error404 && <div>UserName not Found</div>}
                <div className='p-3'>
                    {repositories && Array.isArray(repositories) && repositories.map(repo => (
                        <OneRepository key={repo.id} repo={repo} />
                    ))}
                </div>
                <Pagination links={links} loading={loading} page={page} setPage={setPage} />
            </div>
        </div>
    )
}
