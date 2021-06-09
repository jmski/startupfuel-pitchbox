import styled from 'styled-components';
import { Link as LinkR } from 'react-router-dom';
import { PbBtn } from '../PitchBox/PitchBoxElements';

export const FundContainer = styled.div`

`;

export const Fund = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  margin-bottom: var(--mb-4);
  margin-left: 125px;

  @media screen and (max-width: 768px) {
    margin-left: 30px;
    grid-template-columns: 100%;
  }
`;

export const FundTitle = styled.h4`
  text-align: center;
  font-weight: normal;
  font-size: 38px;
  margin-bottom: var(--mb-4);
  margin-left: 125px;
  margin-right: 125px;

  @media screen and (max-width: 768px) {
    font-size: 24px;
    margin-left: 30px;
    margin-right: 30px;
    margin-bottom: 0;
  }
`;

export const FundBtn = styled(PbBtn)`
  text-align: center;
  
`;

export const FundDesc = styled.p`
  margin-top: 20px;
  text-align: left;
  padding-right: 50px;
  margin-bottom: 50px;
  font-weight: normal;
  font-size: 16px;

  @media screen and (min-width: 768px) {
    margin-top: 60px;
    text-align: center;
  }

  @media screen and (min-width: 1024px) {
    margin-top: 150px;
    text-align: center;
  }
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

  @media screen and (max-width: 768px) {
    font-size: 16px;
    padding: .7rem .7rem;
  }
`;

export const Wrap = styled.div`
  align-content: center;
  text-align: center;
  justify-content: center;

  @media screen and (max-width: 768px) {
    text-align: left;
  }
`;

export const Img = styled.img`
  width: 95%;
  @media screen and (min-width: 768px) {
    max-width: 500px;
    width: 100%;
  }
`;