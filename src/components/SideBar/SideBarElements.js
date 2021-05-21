import styled from 'styled-components';
import { Link as LinkR } from 'react-router-dom';
import { Link as LinkS } from 'react-scroll';

export const SideBarContainer = styled.div`
  top: 0;
  right: 0;
  position: fixed;
  z-index: 999;
  width: 45%;
  height: 100vh;
  background: var(--color-white);
  display: grid;
  transition: 0.3s ease-in-out;
  opacity: ${({ isOpen }) => ( isOpen ? '100%' : '0%' )};
  right: ${({ isOpen }) => ( isOpen ? '0' : '-100%')};
  padding: 1rem 0 2rem 0;
`;

export const CloseIcon = styled.div`
  position: absolute;
  top: 0.5rem;
  right:1.5rem;
  font-size: 1.5rem;
  color: var(--color-black);
  cursor: pointer;
  outline: none;
`;

export const SideBarMenu = styled.ul`
  margin: var(--mb-3);
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: repeat(6, 60px);
`;

export const SideBarItem = styled.li`
`;

export const SideBarLink = styled(LinkS)`
  font-size: var(--h3-font-size);
  font-weight: var(--font-semi-bold);
  transition: all 0.2s ease-in-out;
  color: var(--color-black);
  cursor: pointer;

  &:hover {
    background: var(--first-color);
  }

`;

export const SideBtn = styled.div`
margin-left: auto;
margin-right: auto;
`;

export const SideLinkBtn = styled(LinkR)`
  border-radius: .5rem;
  background: var(--color-black);
  white-space: nowrap;
  padding: 10px 10px;
  color: #fff;
  font-size: var(--h3-font-size);
  outline: none;
  border: none;
  cursor: pointer;
  transition: all 0.2s ease-in-out;

  &:hover {
      transition: all 0.2s ease-in-ease-out;
      background: var(--color-white);
      color: var(--color-black);
    }
`;