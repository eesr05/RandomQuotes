import React from 'react'
import styled from 'styled-components'
import Burger from './Burger'
import Logo from './logo/logo.png'

const Nav = styled.nav`
    width: 100%;
    position: fixed;
    top: 0;
    
    /* margin-bottom:250px; */
    border-bottom: 1px solid #f1f1f1;
    padding: 0 5px;
    display: flex;
    justify-content: space-between;
    background-color:red;
    z-index:1;

    .logo{
       margin:15px 0 0 25px;
       color: #000;
       font-size: 23px;
       width: 100px;
       height: 50px;
    }
`

const Navbar = () => {
    return(
        <Nav>
            <div > 
            <img className="logo" src={Logo} alt='Logo'/>
             </div>
            <Burger />
        </Nav>
    )
}

export default Navbar