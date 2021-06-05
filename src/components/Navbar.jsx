import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import {
    Collapse,
    Navbar,
    NavbarBrand,
    Nav,
    NavItem
} from 'reactstrap';
import styled from 'styled-components';
import gitHubLogo from '../assets/imgs/gitHubLogo.svg'
import menuIcon from '../assets/imgs/menuIcon.svg'
import routes from '../constants/routes';

const TransparentNavbar = styled(Navbar)`
    background-color:#ffffff1f !important;
    padding:0 5px;
    height:50px;
    box-sizing: border-box;
`

const GitHubLogo = styled.img`
    background: #c1c1c1;
    cursor:pointer;
    border-radius:5px;
    width:35px;
    height:35px;

    :hover{
        background: white; 
    }
    
`
const CustomNavLink = styled(Link)`


text-decoration:none;
margin:5px;

`

const NavbarComponent = () => {
    const repo = useSelector((state) => state?.repo?.repo)
    const user = useSelector((state) => state?.repo?.user)


    const [isOpen, setIsOpen] = useState(false);

    const toggle = () => setIsOpen(!isOpen);

    return (
        <TransparentNavbar color="dark" expand="md">
            <NavbarBrand className='d-flex' href="https://github.com/DiegoCuba/code-test-gitfast#readme">
                <GitHubLogo src={gitHubLogo} alt='GitHubLogo' title='GitHub Code' />
            </NavbarBrand>
            <div className='d-none d-sm-block ms-1 fs-5 text-primary'>
                <a href={`https://github.com/${user}`}>{user}</a>
                <span>/</span>
                <a href={`https://github.com/${user}/${repo}`}>{repo}</a>
            </div>
            <img alt='' src={menuIcon} className='border rounded btn p-0  d-md-none' onClick={toggle} width='30px' />
            <Collapse className="justify-content-end" isOpen={isOpen} navbar>

                <Nav navbar>
                    <div className='d-sm-none ms-1 fs-5 text-primary'>
                        <a href={`https://github.com/${user}`}>{user}</a>
                        <span>/</span>
                        <a href={`https://github.com/${user}/${repo}`}>{repo}</a>
                    </div>
                    {routes.map(item => (
                        <NavItem key={item.path}>

                            <CustomNavLink to={item.path}>
                                <div className='d-block d-md-inline-block mx-1 btn btn-outline-primary'>{item.main}</div>
                            </CustomNavLink>

                        </NavItem>
                    ))}

                </Nav>

            </Collapse>
        </TransparentNavbar>
    );
}

export default NavbarComponent;