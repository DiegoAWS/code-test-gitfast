import React from 'react'
import landingBackground from '../../assets/imgs/landingBackground.jpg'

export default function LandingPage() {
    return (
        <div className='text-light'>
            <h2 className='m-4'>Welcome to my Code Test for GitFast enterprise!!!</h2>
            <img alt='' src={landingBackground} className='w-100' />
        </div>
    )
}
