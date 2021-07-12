import React from 'react'
import { SidebarContainer, Icon, CloseIcon, SidebarWrapper, SidebarMenu, SidebarLink, SideBtnWrap, SidebarRoute } from './SidebarElements'

const Sidebar = ({ isOpen, toggle }) => {
    return (
        <SidebarContainer isOpen={ isOpen } onClick={ toggle }>
            <Icon onClick={ toggle }>
                <CloseIcon />
            </Icon>
            <SidebarWrapper>
                <SidebarMenu>
                    <SidebarLink to="about" onClick={ toggle }>
                        About
                    </SidebarLink>
                    <SidebarLink to="gallery" onClick={ toggle }>
                        Gallery
                    </SidebarLink>
                    <SidebarLink to="events" onClick={ toggle }>
                        Events
                    </SidebarLink>
                </SidebarMenu>
                <SideBtnWrap>
                    <SidebarRoute to="/contact">
                        Contact Us
                    </SidebarRoute>
                </SideBtnWrap>
            </SidebarWrapper>
        </SidebarContainer>
    )
}

export default Sidebar
