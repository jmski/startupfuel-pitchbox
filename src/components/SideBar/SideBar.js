import React from 'react';
import {
  SideBarContainer,
  CloseIcon,
  SideBarMenu,
  SideBarItem,
  SideBarLink,
  SideBtn,
  SideLinkBtn,


} from './SideBarElements';


import { FaTimes } from 'react-icons/fa';

const SideBar = ({ isOpen, toggle }) => {

  return (
    <>
      <SideBarContainer isOpen={ isOpen } onClick={ toggle }>
        <CloseIcon>
          <FaTimes />
        </CloseIcon>

        <SideBarMenu>

          <SideBarItem>
            <SideBarLink
              to="home"
              offset={-100}
              onClick={ toggle }
            >
              Home
            </SideBarLink>
          </SideBarItem>

          <SideBarItem>
            <SideBarLink
              to="about"
              onClick={ toggle }
            >
              About
            </SideBarLink>
          </SideBarItem>

          <SideBarItem>
            <SideBarLink
              to="contact"
              onClick={ toggle }
            >
              Contact
            </SideBarLink>
          </SideBarItem>

          <SideBtn>
          <SideLinkBtn>Book Free Demo</SideLinkBtn>
        </SideBtn>
        </SideBarMenu>

      </SideBarContainer>
    </>
  )
}

export default SideBar
