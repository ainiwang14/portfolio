import React from 'react';
import { NavLink } from 'react-router-dom';

const Header = () => {
    return (
        <nav>
            <NavLink exact activeClassName='active' to='/'>
                Home
            </NavLink>
            <NavLink exact activeClassName='active' to='/projects'>
                Projects
            </NavLink>
            <NavLink exact activeClassName='active' to='/contact'>
                Contact
            </NavLink>
        </nav>
    )
}

export default Header;