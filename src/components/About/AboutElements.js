import styled from 'styled-components';
import { Link as LinkR } from 'react-router-dom';

export const AboutContainer = styled.div`
  display: grid;
  max-width: 1024px;
  margin-bottom: var(--mb-4);


  @media screen and (min-width: 768px) {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
  }
`;

export const Bg = styled.img`
  position: absolute;
  display: none;
  opacity: 50%;

 @media screen and (min-width: 768px) {
   display: block;
 }
`;

export const AboutInfo = styled.div`
position: relative;
margin-left: auto;
margin-right: auto;
margin-bottom: var(--mb-4);
text-align: center;
padding: 2rem;

@media screen and (min-width: 768px) {
  text-align: left;
}
`;

export const AboutTitle = styled.h1`
  margin-bottom: var(--mb-2);
`;

export const AboutSubtitle = styled.h3`
  color: var(--color-blue);
  margin-bottom: var(--mb-2);
`;

export const AboutDesc = styled.p`
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
	max-width: 1024px;
	display: grid;
  grid-template-columns: repeat(, 1fr);
	width: calc(100% - 2rem);
  column-gap: 1rem;
  row-gap: 1rem;
	margin-left: var(--mb-2);
	margin-right: var(--mb-2);

	@media screen and (min-width: 768px) {
		grid-template-columns: repeat(2, 1fr);
	}
;`

export const CardContent = styled.div`
  overflow: hidden;
  position: relative;
  border-radius: 1rem;
  transition: all 0.5s ease-in-out;
  text-align: center;
  background: var(--color-white);

  @media screen and (min-width: 768px) {
    height: auto;
  }
`;

export const CardOne = styled(CardContent)`
  border: 2px solid var(--color-purple);
`;

export const CardTwo = styled(CardContent)`
  border: 2px solid var(--color-blue);
`;

export const CardThree = styled(CardContent)`
  border: 2px solid var(--color-yellow);
`;

export const CardFour = styled(CardContent)`
  border: 2px solid var(--color-red);
`;

export const CardFive = styled(CardContent)`
  border: 2px solid var(--color-green);
`;

export const CardTitle = styled.h3`
  font-size: var(--h3-font-size);
  margin-bottom: var(--mb-2);

  @media screen and (min-width: 768px) {
    display: none;
  }
`;

export const CardOverlay = styled.div`
  padding-left: 1rem;
  padding-right: 1rem;
  position: absolute;
  top: -200;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  transition: 0.2s ease-in-out;

  ${CardContent}:hover & {
    top: 0;
    transition: 0.2s ease-in-out;
    background: rgba(255, 255, 255, 0.9);
  }
`;

export const CardTitleOverlay = styled.h3`
  font-size: var(--h3-font-size);
  margin-bottom: var(--mb-2);
`;

export const CardDesc = styled.p`
  font-size: var(--smaller-font-size);
`;

export const Img = styled.img`
  display: absolute;
  top: 0;
  height: 200px;
  width: 200px;
  margin-left: auto;
  margin-right: auto;
`;