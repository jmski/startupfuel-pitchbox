import styled from 'styled-components';
import { Link as LinkR} from 'react-router-dom';

export const AboutContainer = styled.div`
  display: grid;
  max-width: 1024px;
  grid-template-columns: repeat(2, 1fr);
`;

export const AboutInfo = styled.div`
margin-left: 2rem;
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
  margin: auto;
  display: grid;
  column-gap: 2rem;
  row-gap: 2rem;
  grid-template-columns: repeat(3, 1fr);

`;

export const CardsItem = styled.div`
  padding: 1rem;
  width: 150px;
  height: 250px;
  background: var(--color-white);
  border: 2px solid;
  border-radius: 1rem;
  text-align: center;
`;

export const CardsTitle = styled.h3`
  font-size: var(--small-font-size);
`;

export const CardsDesc = styled.p`
  font-size: var(--smaller-font-size);
`;

export const Img = styled.img`

`;