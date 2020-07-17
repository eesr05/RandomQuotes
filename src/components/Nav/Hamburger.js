import React from 'react'
import styled from 'styled-components'
import Burger from './Burger'

const Nav = styled.nav`
    width: 100%;
    position: fixed;
    top: 0;
    width: 100%;
    /* margin-bottom:250px; */
    border-bottom: 1px solid #f1f1f1;
    padding: 0 5px;
    display: flex;
    justify-content: space-between;
    background-color:red;
    z-index:1;

    .logo{
       margin:30px;
       color: #000;
       font-size: 23px;
    }
`

const Navbar = () => {
    return(
        <Nav>
            <div className="logo"> Citações </div>
            <Burger />
        </Nav>
    )
}

export default Navbar