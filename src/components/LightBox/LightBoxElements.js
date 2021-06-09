import styled from 'styled-components';
import { Img } from '../PitchBox/PitchBoxElements';

export const ModelContainer = styled.div`
position: fixed;
z-index: 200;
padding-top: 10rem;
left: 0;
top: 0;
width: 100%;
height: 100%;
overflow: auto;
background: rgba(0, 0, 0, 0.7);
display: ${({ isOpen }) => (isOpen ? 'block' : 'none' )};
`;

export const ModelContent = styled.div`
position: relative; 
background: var(--color-dark-neutral);
margin: auto;
padding: 0;
width: 90%;
margin-left: auto;
margin-right: auto;
`;

export const ModelImg = styled(Img)`

`;

export const CloseBtn = styled.button`
color: var(--color-light-neutral);
position: absolute;
top: 1rem;
right: 2rem;
font-size:2rem;
font-weight: bold;
border: none;
background: none;

&:hover {
  color: #999;
  text-decoration: none;
  cursor: pointer;
}
`;