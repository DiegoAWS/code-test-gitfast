import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getProfile } from '../../redux/profile/actions'
import LeftProfile from './LeftProfile'
import RightProfile from './RightProfile'
import loadingIcon from '../../assets/imgs/loadingIcon.gif'
import { NavLink } from 'reactstrap'


export default function Profile() {
    const dispatch = useDispatch()
    const profile = useSelector((state) => state?.profile.profile)
    const loading = useSelector((state) => state?.profile.loading)


    useEffect(() => {
        console.log('here')
        dispatch(getProfile())
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])
    const html_url = profile?.html_url
    return (
        <div className='p-4  p-lg-5 text-white'>
            <div className='d-flex justify-content-between'>
                <div className='d-flex align-items-center'>
                    <div className='fs-2'>GitHub Profile</div>

                    {
                        loading && <div className='ms-4 d-flex'>
                            <img alt='' src={loadingIcon} width='20px' height='20px' />
                        </div>
                    }
                </div>
                <NavLink href={html_url}>{html_url}</NavLink>
            </div>
            {profile && <div className='d-md-flex py-5'>
                <LeftProfile profile={profile} />
                <RightProfile profile={profile} />
            </div>}
        </div>
    )
}
