import React, { useRef } from 'react'
import styled from 'styled-components'

import MobileNavbar from './MobileNavbar';

const NavbarWrapper = styled.nav`
    align-items: center;
    align-self: flex-start;
    background-color: ${props => props.theme.body};
    border-bottom: 1px solid ${props => props.theme.text};
    display: flex;
    justify-content: space-between;
    padding: 1rem 2rem;
    height: 8%;
    @media only screen and (max-width: 40em) {
        border-top: 1px solid ${props => props.theme.text};
        bottom: 0;
        position: fixed;
        width: 100%;
    }
`

const NavbarLogo = styled.h1`
width: 15%;
padding: 0.5rem 1rem;
@media only screen and (max-width: 40em) {
    width: 100%;
}
`

const NavbarItems = styled.ul`
display: flex;
list-style: none;
@media only screen and (max-width: 40em) {
    background-color: ${ props => props.theme.body};
    border-left: 1px solid ${props => props.theme.text};
    flex-direction: column;
    
    height: 100%;
    
    padding: 2rem 4rem;
    position: fixed;
    
    right: 0;
    top: 0;
    transition: 0.2s ease-out;
    
    transform: ${({ openDrawer }) => openDrawer ? `translateX(0)` : `translateX(100%)`};
}
`
const NavbarItem = styled.li`
padding: 0 1rem;
cursor: pointer;
@media only screen and (max-width: 40em) {
    padding: 1rem 0;
}
`
function MainNavbar({ logo, items, onClick, openDrawer, drawerRef }) {
    
    const navbarRef = useRef(drawerRef)
    
    const generateItems = items.map((item, key) => {
        return (
            <NavbarItem key={`${item.name}${key}`} onClick={item.onClick}>{item.name}</NavbarItem>
            )
    })

    return (
        <NavbarWrapper>
            <NavbarLogo>{logo()}</NavbarLogo>
            <MobileNavbar onClick={onClick} />

            <NavbarItems ref={navbarRef} openDrawer={openDrawer}>
                {generateItems}
            </NavbarItems>
        </NavbarWrapper>
    )
}

export default MainNavbar