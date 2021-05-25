import styled from 'styled-components';
import { Link as LinkR } from 'react-router-dom';

export const PbContainer = styled.div`
  padding: 2rem;
  margin-bottom: var(--mb-4);
`; 

export const Bg = styled.img`
  position: absolute;
  left: 0; 
  z-index: -1;
  display: none;
  transform: scaleX(-1);
  transform: scaleY(-1);
  overflow: hidden;
  opacity: 30%;

 @media screen and (min-width: 768px) {
   display: block;
 }
`;

export const Pb = styled.div`
  margin-bottom: 5rem;
`;

export const PbTitle = styled.h1`
  font-weight: normal;
  font-size: 42px;
  margin-left: 2rem;
`;

export const PbDesc = styled.p`
  font-weight: var(--normal-semi-bold);
  margin-bottom: var(--mb-5);
  margin-left: 2rem;
`;

export const PbBtn = styled.div`
  margin-left: 2rem;
  margin-bottom: var(--mb-4);
`;

export const PbBtnLink = styled(LinkR)`
  background: var(--color-purple);
  color: var(--color-white);
  border-radius: .5rem;
  padding: 1rem 1rem;
  font-weight: normal;

  &:hover {
    background: #59019f;
  }
`;

export const Fund = styled.div`
  max-width: 700px;
  margin-bottom: var(--mb-4);
`;

export const FundTitle = styled(PbTitle)`
  text-align: center;
  margin-bottom: var(--mb-4);
`;

export const FundBtn = styled(PbBtn)`
  /* text-align: center; */
`;

export const FundBtnLink = styled(LinkR)`
  background: var(--color-red);
  color: var(--color-white);
  border-radius: .5rem;
  padding: 1rem 1rem;
  font-weight: normal;

  &:hover {
    background: #96031b;
  }
`;