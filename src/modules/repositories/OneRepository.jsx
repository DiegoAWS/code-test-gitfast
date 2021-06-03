import { formatDistance, isValid } from 'date-fns'
import React from 'react'
import starIcon from '../../assets/imgs/starIcon.svg'
import forkIcon from '../../assets/imgs/forkIcon.svg'
import gitHubLogo from '../../assets/imgs/gitHubLogo.svg'

import { Button } from 'reactstrap'
import { useDispatch } from 'react-redux'
import { setNewRepoUser } from '../../redux/repo/actions'

export default function OneRepository({ repo, ...props }) {

    const dispatch = useDispatch()

    const setRepo = () => {
        const info = repo.full_name.split('/')
        dispatch(setNewRepoUser({
            user: info[0],
            repo: info[1]
        }))
    }

    const commitDate = isValid(new Date(repo.updated_at))
        ? new Date(repo.updated_at) : new Date()

    const timeUpdated = 'Updated ' + formatDistance(commitDate, new Date()) + ' ago'
    return (
        <div className='d-flex  border-light border-top py-5' {...props}>
            <div className='flex-grow-1'>
                <div>
                    <a href={repo.html_url} >
                        <h5>{repo.name}</h5>
                    </a>
                    <div className='d-flex align-items-center text-secondary'>
                        <div className='fs-6'>{repo.language}</div>
                        {!!repo.stargazers_count && <>
                            <img alt='' src={starIcon} width='15px' className='ms-3 me-2' />
                            <div>{repo.stargazers_count}</div>
                        </>
                        }
                        {!!repo.forks && <>
                            <img alt='' src={forkIcon} width='20px' className='ms-3 me-2' />
                            <div>{repo.forks}</div>
                        </>
                        }
                        <div className='ms-3'>{timeUpdated}</div>
                    </div>
                </div>
            </div>
            <div>
                <Button color="primary" size="sm" onClick={setRepo}>
                    <img alt='' src={gitHubLogo} width='15px' className=' me-2' />
                    Use it!</Button>
            </div>
        </div>
    )
}
