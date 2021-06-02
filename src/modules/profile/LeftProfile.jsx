import React from 'react'
import usersIcon from '../../assets/imgs/usersIcon.svg'
import styled from 'styled-components'

const LeftProfileContainer = styled.div`
    width:30vw;

    @media (max-width: 992px) { 
        width:40vw;
    }

    @media (max-width: 768px) { 
        width:100%;
    }

`

export default function LeftProfile({ profile }) {
    const profilePict = profile?.avatar_url
    const profileName = profile?.name
    const profileUser = profile?.login
    const followers = profile?.followers
    const following = profile?.following

    return (
        <LeftProfileContainer>
            <div className='d-flex justify-content-center'>
                <img alt='' src={profilePict} className='w-75  rounded-circle' />
            </div>

            <h3 className='fw-bold mt-2'>{profileName}</h3>
            <h4 className='mt-2 text-secondary'>{profileUser}</h4>
            <div className='d-flex w-100 justify-content-between'>
                <img alt='' src={usersIcon} width='20px' />

                <div> <div className='d-inline-block me-2 fw-bold'>{followers}</div>followers ·</div>

                <div><div className='d-inline-block me-2 fw-bold'>{following}</div>following</div>

            </div>
        </LeftProfileContainer>
    )
}
