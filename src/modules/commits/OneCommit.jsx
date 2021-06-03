
import React, { useState } from 'react'
import formatDistance from 'date-fns/formatDistance'
import isValid from 'date-fns/isValid';
import format from 'date-fns/format';
import gitHubLogo from '../../assets/imgs/gitHubLogo.svg'
import clipboardIcon from '../../assets/imgs/clipboardIcon.svg'
import { Button, ButtonGroup } from 'reactstrap';
import copy from "copy-to-clipboard";
import { toast } from 'react-toastify';

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



    const verifiedCommit = commit?.commit?.verification?.verified

    const sha = commit?.sha

    const successShaCopiedNotification = (shaCopied) => {
        toast.success(() => <div>
            <h5 className='text-center'>Commit SHA copied !!!</h5>
            <div className='rounded bg-primary text-white text-center' style={{ fontSize: '10px' }}>{sha}</div>
        </div>)
    }
    const copyShaToClipboard = () => {

        copy(sha) && successShaCopiedNotification(sha)

    }
    const reducedSha = sha?.substring(0, 7)

    const commitURL = commit?.html_url
    const treeURL = commitURL.replace('/commit/', '/tree/')

    return (
        <div className='d-md-flex border-bottom border-white p-2'>
            <div className='flex-grow-1'>
                <div className='flex text-white fs-6 text-break'>
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
            <div className='d-flex align-items-center'>
                {verifiedCommit && <div className='rounded-pill border border-success text-success px-1 '> Verified</div>}
                <ButtonGroup className='ms-2' size="sm">
                    <Button className='bg-dark text-primary' onClick={copyShaToClipboard}>
                        <img alt='Copy to clipboard SHA' src={clipboardIcon} width='15px' height='15px' />
                    </Button>
                    <Button className='bg-dark text-primary fs-6' style={{ width: '8rem' }} href={commitURL}>{reducedSha}</Button>
                </ButtonGroup>
                <Button size="sm"
                    className='bg-dark text-primary fs-6 ms-2'
                    href={treeURL}
                    title='Browse the repository at this point in the history'
                >{'<>'}</Button>
            </div>
        </div>
    )
}

