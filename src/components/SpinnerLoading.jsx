import React from 'react'
import loadingIcon from '../assets/imgs/loadingIcon.gif'

export default function SpinnerLoading({ loading, ...props }) {
    return (
        <>
            {
                loading && <div className='ps-4 d-flex' {...props} >
                    <img alt='' src={loadingIcon} width='20px' height='20px' />
                </div>
            }
        </>
    )
}
