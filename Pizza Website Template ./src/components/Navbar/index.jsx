import React from 'react';
import {Nav,NavLink, PizzaIcon,NavIcon} from './NavbarElements';

const Navbar = ({ toggle }) => {
    return (
        <div>
            <Nav>
             <NavLink to='/'>Sam's Pizza🍕 </NavLink>
             <NavIcon onClick={toggle}>
                 <p>More</p>
                 <PizzaIcon />
             </NavIcon>
            </Nav>
    
        </div>
    )
}

export default Navbar
