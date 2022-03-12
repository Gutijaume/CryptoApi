import React from 'react'
import {Nav, NavLink, Bars, NavMenu, NavBtn} from './NavbarElements'

import SignBtn from '../Buttons/SignBtn'

const icon = 'https://cdn-icons-png.flaticon.com/512/3378/3378138.png'


const Navbar = () => {
  return (
    <>
    <Nav>
    <NavLink to = '/'>
        <img src = {icon} alt='HOME'/>
        <h3>CRYPTO HUB</h3>
    </NavLink>
    <Bars/>
    <NavMenu>
        <NavLink to = '/about' activeStyle>
            About
        </NavLink>
        <NavLink to = '/contact' activeStyle>
            Contact
       </NavLink>
        <NavLink to = '/doc' activeStyle>
            Documentation
        </NavLink>
    </NavMenu>
    <NavBtn>
        
        <SignBtn to = 'sign-in'>Sign In</SignBtn>
    </NavBtn>

    </Nav>
    </>
  )
}

export default Navbar