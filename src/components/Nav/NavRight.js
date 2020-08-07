import React  from 'react'
import { BrowserRouter,  Switch } from 'react-router-dom'
import styled from 'styled-components'
import { Link } from 'react-scroll'


const Ul = styled.ul`
    list-style: none;
    display: flex;
    flex-flow: row nowrap;
    color:yellow;

    li{
        padding:18px 10px;
        margin-right:30px;
    }

    @media(max-width: 768px){
        flex-flow: column nowrap;
        background-color: #0D2538;
        position: fixed;
        transform:${({ open }) => open ? 'translateX(0)' : 'translateX(100%)'};
        top:0;
        right: 0;
        height: 100vh;
        width: 300px;
        padding-top: 3.5rem;
        transition: transform 0.3s ease-in-out;

        li{
            color: #D9D9D9;
        }
    }
`



const NavRight = ({ open }) => {
    return(
        <BrowserRouter>
       <Switch>
        <Ul open={open}>
            <li><Link to='texto' smooth={true} duration={1000}> Mais  </Link></li>
            <li></li>
           
        </Ul>
        </Switch>
        </BrowserRouter>
    )
} 






export default NavRight