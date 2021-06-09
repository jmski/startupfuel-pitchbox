import styled from 'styled-components';
import { Link as LinkR } from 'react-router-dom';
import { PbBtn } from '../PitchBox/PitchBoxElements';

export const FundContainer = styled.div`
  margin-left: 5vw;
  margin-right: 5vw;

  @media screen and (min-width: 35rem) {
    margin-left: 9vw;
    margin-right: 9vw;
  }
`;

export const FundContent = styled.div`
  display: flex;
  flex-direction: column;

  @media screen and (min-width: 35rem) {
    flex-direction: row;
  }
`;

export const FundTitle = styled.h2`
  text-align: center;
  font-weight: normal;
  padding-top: 5vh;
  font-size: 1.5rem;

  @media screen and (min-width: 35rem) {
    font-size: 2rem;

  }
`;

export const FundBtn = styled(PbBtn)`
  text-align: center;

  @media screen and (min-width: 35rem) {
    text-align: left;
  }

`;

export const FundDesc = styled.p`
  margin-top: 2vh;
  text-align: left;
  width: 100%;
  font-weight: normal;
  font-size: 1rem;

  @media screen and (min-width: 35rem) {
    padding-right: 3rem;
    margin-top: 5vh;
    text-align: left;
  }

  @media screen and (min-width: 50rem) {
    margin-top: 20vh;
  }
`;

export const FundBtnLink = styled(LinkR)`
  border-radius: .5rem;
  padding: .7rem .7rem;
  font-weight: normal;
  font-size: 1rem;
  white-space: nowrap;
  background: var(--color-red);
  color: var(--color-white);

  &:hover {
    background: #96031b;
  }

  @media screen and (min-width: 35rem) {
    padding: 1rem 1rem;
  }
`;

export const Wrap = styled.div`

  @media screen and (min-width: 35rem) {
    text-align: left;
    width: 50%;
  }
`;

export const Img = styled.img`
  width: 100%;
  height: auto;

  @media screen and (min-width: 35rem) {
    width: 50%;
  }

  @media screen and (min-width: 50rem) {

  }
`;