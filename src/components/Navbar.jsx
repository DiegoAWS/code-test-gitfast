import React, { useState } from 'react';
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
    const [isOpen, setIsOpen] = useState(false);

    const toggle = () => setIsOpen(!isOpen);

    return (
        <div>
            <TransparentNavbar color="dark" expand="md">
                <NavbarBrand href="https://github.com/DiegoCuba/code-test-gitfast#readme">
                    <GitHubLogo src={gitHubLogo} alt='GitHubLogo' title='GitHub Code' />
                </NavbarBrand>
                <img alt='' src={menuIcon} className='border rounded btn p-0' onClick={toggle} width='30px' />
                <Collapse className="justify-content-end" isOpen={isOpen} navbar>

                    <Nav navbar>

                        {routes.map(item => (
                            <NavItem key={item.path}>

                                <CustomNavLink to={item.path}>{item.main}</CustomNavLink>

                            </NavItem>
                        ))}

                    </Nav>

                </Collapse>
            </TransparentNavbar>
        </div>
    );
}

export default NavbarComponent;