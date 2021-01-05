import React from 'react';
import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

const Nav = styled.nav`
    display: flex;
    justify-content: space-between;
    padding: 0 10vh;
`

const Link = styled(NavLink)`
    font-weight: 900;
    font-size: 20px;
    text-decoration: none;
    color: #8775D9;
    &:hover {
        color: white;
    }
`

const Header = () => {
    return (
        <Nav>
            <Link exact activeClassName='active' to='/'>
                Home
            </Link>
            <Link exact activeClassName='active' to='/projects'>
                Projects
            </Link>
            <Link exact activeClassName='active' to='/contact'>
                Contact
            </Link>
        </Nav>
    )
}

export default Header;