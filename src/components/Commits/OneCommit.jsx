
import React, { useState } from 'react'
import formatDistance from 'date-fns/formatDistance'
import isValid from 'date-fns/isValid';
import format from 'date-fns/format';
import gitHubLogo from '../../assets/imgs/gitHubLogo.svg'

export default function OneCommit({ commit }) {
    const [openCollapse, setOpenCollapse] = useState(false);
    const toggleCollapse = () => setOpenCollapse(!openCollapse);

    const message = commit?.commit?.message
    const multiline = message.match(/\n\n/)
    const mainMessage = multiline ? message.substring(0, multiline?.index) : message
    const secondaryMessage = multiline ? message.substring(multiline?.index) : ''

    const authorProfile = commit?.author?.html_url
    const authorProfilePict = commit?.author?.avatar_url

    const commitDate = isValid(new Date(commit?.commit?.author?.date))
        ? new Date(commit?.commit?.author?.date) : new Date()
    const timeDistance = 'Commited ' + formatDistance(commitDate, new Date()) + ' ago - ' + format(commitDate, 'PPpp')


    return (
        <div className='d-md-flex border-bottom border-white p-2'>
            <div className='flex-grow-1'>
                <div className='flex text-white fs-6'>
                    {mainMessage}
                    {multiline && <div onClick={toggleCollapse}
                        className='d-inline-block bg-secondary p-0 ms-3 lh-1 btn' >
                        ···
                        </div>}
                </div>
                {openCollapse && multiline &&
                    <div className='text-secondary fs-6 font-monospace'>{secondaryMessage}</div>
                }
                <div className='d-flex align-items-center'>
                    <a href={authorProfile}><img alt='' src={authorProfilePict || gitHubLogo} className='rounded-circle bg-primary' width='25px' height='25px' />
                    </a>

                    <div className='ms-2' id='toolTipTarget'>{timeDistance}</div>
                </div>
            </div>
            <div>Right Side</div>
        </div>
    )
}
