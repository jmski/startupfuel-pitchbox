import React from 'react';
import {
    SideBarContainer,
    CloseIcon,
    Icon,
    SideBarWrapper,
    SideBarMenu,
    SideBarLink,
    SideBtnWrap,
    SideBarRoute
}  from './SideBarElements';

const SideBar = ({isOpen, toggle }) => {
    return (
        <>
            <SideBarContainer isOpen={ isOpen } onClick={ toggle }>
                <Icon onClick={ toggle }>
                    <CloseIcon />
                </Icon>
                <SideBarWrapper>
                    <SideBarMenu>
                        <SideBarLink to="download" onClick={ toggle }>Download</SideBarLink>
                        <SideBarLink to="about" onClick={ toggle }>About</SideBarLink>
                        <SideBarLink to="services" onClick={ toggle }>Services</SideBarLink>
                        <SideBarLink to="signup" onClick={ toggle }>Sign Up</SideBarLink>
                    </SideBarMenu>
                    <SideBtnWrap>
                        <SideBarRoute to="/demo">Request a Demo</SideBarRoute>
                    </SideBtnWrap>
                </SideBarWrapper>
            </SideBarContainer>  
        </>
    )
}

export default SideBar;
