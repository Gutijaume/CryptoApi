import styled from 'styled-components'
import {NavLink as Link} from 'react-router-dom'



export const Nav = styled.nav`
background: #000;
border: solid 0.1cm #ac32e4;
height: 80px;
display: flex;
justify-content: space-between;
padding: 0.5rem ;
z-index: 10;
`

export const NavLink = styled(Link)`
color: #fff;
display: flex;
align-items: center;
text-decoration: none;
padding: 0 1rem;
height: 100%;
cursor: pointer;
    &.active{
        color: #ac32e4;
    }

    & img{
       
        width: 10%
    }

    & h3{
        
        color: #ac32e4;
        padding-left: 100px;
       
    }
`

export const NavMenu = styled.div `
display: flex;
align-items: center;
margin-right: -24px;


@media screen and (max-width: 768px){
    display: none;
    }
`
export const NavBtn = styled.nav`
display: flex;
align-items: center;
margin-right: 24px;

@media screen and (max-width: 768px){
    display: none;
    }
`
