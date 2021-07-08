import React from 'react'
import { FaBars } from 'react-icons/fa'
import {Nav, NavbarContainer, NavLogo, MobileIcon, NavMenu, NavItem, NavLinks, NavBtn, NavBtnLink} from './NavbarElements'

const Navbar = ({ toggle }) => {
    return (
        <>
            <Nav>
                <NavbarContainer>
                    <NavLogo to="">Home</NavLogo>
                    <MobileIcon onClick={ toggle }>
                        <FaBars />
                    </MobileIcon>
                    <NavMenu>
                        <NavItem>
                            <NavLinks to="about">About</NavLinks>
                        </NavItem>
                        <NavItem>
                            <NavLinks to="gallery">Gallery</NavLinks>
                        </NavItem>
                        <NavItem>
                            <NavLinks to="events">Events</NavLinks>
                        </NavItem>
                        <NavItem>
                            <NavLinks to="signup">Sign Up</NavLinks>
                        </NavItem>
                        
                    </NavMenu>
                    <NavBtn>
                        <NavBtnLink to="/contact">Contact Us
                        </NavBtnLink>
                    </NavBtn>

                </NavbarContainer>
            </Nav>
        </>
    )
}

export default Navbar
