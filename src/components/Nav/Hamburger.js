import React from 'react'
import styled from 'styled-components'
import Burger from './Burger'
import Logo from './logo/logo2.png'
import { animateScroll as scroll } from 'react-scroll'

const Nav = styled.nav`
    width: 100%;
    position: fixed;
    top: 0;
    height: 100px;
    /* margin-bottom:250px; */
    border-bottom: 1px solid #f1f1f1;
    padding: 0 5px;
    display: flex;
    justify-content: space-between;
    background-color:#E97146;
    z-index:1;

    .logo{
       margin:15px 0 0 25px;
       color: #000;
       width: 160px;
       height: 70px;
    }
`

const Navbar = () => {
    return(
        <Nav>
            <div > 
            <img className="logo" id="logo" src={Logo} alt='Logo' onClick={() => scroll.scrollToTop()}/>
             </div>
            <Burger />
        </Nav>
    )
}

export default Navbar