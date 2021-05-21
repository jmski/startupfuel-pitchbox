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
              onClick={ toggle}
            >
              Home
            </SideBarLink>
          </SideBarItem>

          <SideBarItem>
            <SideBarLink
              to="About"
              onClick={ toggle}
            >
              About
            </SideBarLink>
          </SideBarItem>

          <SideBarItem>
            <SideBarLink
              to="Contact"
              onClick={ toggle}
            >
              Contact
            </SideBarLink>
          </SideBarItem>


        </SideBarMenu>
        <SideBtn>
          <SideLinkBtn>Book a Free Demo</SideLinkBtn>
        </SideBtn>

      </SideBarContainer>
    </>
  )
}

export default SideBar
