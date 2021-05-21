import styled from 'styled-components';
import { Link as LinkR} from 'react-router-dom';

export const AboutContainer = styled.div`
  display: block;
  max-width: 1024px;
  margin-bottom: var(--mb-4);

  @media screen and (min-width: 768px) {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
  }
`;

export const AboutInfo = styled.div`
position: relative;
margin-left: 2rem;
margin-bottom: var(--mb-4);
`;

export const AboutTitle = styled.h1`
  margin-bottom: var(--mb-4);
`;

export const AboutSubtitle = styled.h3`
  color: var(--color-blue);
  margin-bottom: var(--mb-2);
`;

export const AboutDesc = styled.p`
  max-width:370px;
  margin-bottom: var(--mb-4);
  font-size: var(--smaller-font-size);
`;

export const AboutBtn = styled.div`

`;

export const AboutBtnLink = styled(LinkR)`
  background: var(--color-blue);
  color: var(--color-white);
  padding: 1rem 1rem;
  border-radius: .5rem;
`;

export const CardsContainer = styled.div`
  display: grid;
  column-gap: 1rem;
  row-gap: 1rem;
  grid-template-columns: 100%;

  @media screen and (min-width: 768px) {
    grid-template-columns: repeat(2, 1fr);
    margin-right: 1rem;
  }

  /* @media screen and (min-width: 1024px) {
    grid-template-columns: repeat(3, 1fr);
  } */
`;

export const CardsItem = styled.div`
  padding: 1rem;
  width: calc(100%- 2rem);
  background: var(--color-white);
  border: 2px solid;
  border-radius: 1rem;
  text-align: center;
  margin-left: 2rem;
  margin-right: 2rem;

  @media screen and (min-width: 768px) {
    margin-left: auto;
    margin-right: auto;
  }
`;

export const CardsTitle = styled.h3`
  font-size: var(--small-font-size);
`;

export const CardsDesc = styled.p`
  font-size: var(--smaller-font-size);
`;

export const Img = styled.img`
  width: 50%;
  height: auto;
  margin-left: auto;
  margin-right: auto;
  
`;