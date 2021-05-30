import styled from 'styled-components';
import { Link as LinkR } from 'react-router-dom';

export const PbContainer = styled.div`
  padding: 2rem;
  margin-bottom: var(--mb-4);
`; 

export const Vector = styled.div`
  position: absolute;
  width: 1200.79px;
  height: 1189.94px;
  /* left: 970.91px;
  top: 3486.91px; */

  background: rgba(229, 229, 229, 0.25);
  border: 1px solid #000000;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  transform: matrix(0.54, -0.84, -0.84, -0.54, 0, 0);
`;


export const Bg = styled.img`
  position: absolute;
  left: 0; 
  z-index: -1;
  display: none;
  transform: scaleX(-1);
  transform: scaleY(-1);
  overflow: hidden;
  opacity: 80%;

 @media screen and (min-width: 768px) {
   display: block;
 }
`;

export const Pb = styled.div`
  margin-bottom: 5rem;
  width: 40%;
  margin-left: 125px;
`;

export const PbTitle = styled.h2`
  font-weight: normal;
  font-size: 38px;
`;

export const PbDesc = styled.p`
  font-weight: normal;
  margin-bottom: var(--mb-5);
  font-size: 16px;
`;

export const PbBtn = styled.div`
  margin-bottom: 150px;
`;

export const PbBtnLink = styled(LinkR)`
  background: var(--color-purple);
  color: var(--color-white);
  border-radius: .5rem;
  padding: 1rem 1rem;
  font-weight: normal;
  font-size: 18px;


  &:hover {
    background: #59019f;
  }
`;

export const Fund = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  /* max-width: 700px; */
  margin-bottom: var(--mb-4);
  margin-left: 125px;
`;

export const FundTitle = styled.h4`
  text-align: center;
  font-weight: normal;
  font-size: 38px;
  margin-bottom: var(--mb-4);
  margin-left: 125px;
  margin-right: 125px;
`;

export const FundBtn = styled(PbBtn)`
  /* text-align: center; */
`;

export const FundDesc = styled.div`
  margin-top: 150px;
  text-align: left;
  padding-right: 50px;
  margin-bottom: 50px;
`;

export const FundBtnLink = styled(LinkR)`
  background: var(--color-red);
  color: var(--color-white);
  border-radius: .5rem;
  padding: 1rem 1rem;
  font-weight: normal;
  font-size: 18px;

  &:hover {
    background: #96031b;
  }
`;

export const Wrap = styled.div`
  align-content: center;
  text-align: center;
  justify-content: center;
`;

export const Video = styled.video`
  width: 100%;
  height: 100%;
/* @media screen and (min-width: 768px) {
  width: 70%;
  height: 70%; */
}
`;

export const Img = styled.img`

`;