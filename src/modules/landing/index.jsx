import React from 'react'
import landingBackground from '../../assets/imgs/landingBackground.png'
import styled from 'styled-components'

const ScreenWrapper = styled.div`
    height:calc(100vh - 50px);
`
const MetalicStyle = styled.span`
    font-size: 4rem;
    margin:1rem;
	text-align: center;
    position:absolute;
    color: gray;
    text-shadow: 1px 1px 0px #eee, 2px 2px 0px #707070;

    animation: color-change 5s linear infinite alternate;

    @keyframes color-change {
        from {color: #171717;}
        to {color: gray;}
      }
    
`
export default function LandingPage() {
    return (


        <ScreenWrapper className='text-light position-relative d-flex justify-content-center'>
            <MetalicStyle>
                Welcome to my Code Test for GitFast
            </MetalicStyle>
            <img alt='' src={landingBackground} className='w-100' style={{ objectFit: 'cover' }} />
        </ScreenWrapper>
    )
}
