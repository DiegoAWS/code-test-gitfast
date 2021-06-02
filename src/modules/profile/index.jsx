import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getProfile } from '../../redux/profile/actions'
import LeftProfile from './LeftProfile'

import loadingIcon from '../../assets/imgs/loadingIcon.gif'
import RightProfile from './RightProfile'

export default function Profile() {
    const dispatch = useDispatch()
    const profile = useSelector((state) => state?.profile.profile)
    const loading = useSelector((state) => state?.profile.loading)


    useEffect(() => {
        console.log('here')
        dispatch(getProfile())
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    return (
        <div className='p-4 m-md-5 p-lg-5 text-white'>
            <div className='d-flex'>
                <h2>Profile</h2>
                {
                    loading && <div className='ms-3 d-flex'>
                        <img alt='' src={loadingIcon} width='20px' height='20px' />
                    </div>
                }
            </div>

            {profile && <div className='d-md-flex py-5'>
                <LeftProfile profile={profile} />
                <RightProfile profile={profile} />
            </div>}
        </div>
    )
}
