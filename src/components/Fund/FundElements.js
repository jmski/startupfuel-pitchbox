import styled from 'styled-components';
import { Link as LinkR } from 'react-router-dom';

export const FundContainer = styled.div`
  margin-left: 5vw;
  margin-right: 5vw;
  margin-bottom: 5vw;

  @media screen and (min-width: 35rem) {
    margin-left: 9vw;
    margin-right: 9vw;
    margin-bottom: 7.8125rem;
  }
`;

export const FundContent = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  @media screen and (min-width: 35rem) {
    flex-direction: row;
  }
`;

export const FundTitle = styled.h2`
  margin-top: 3.125rem;
  margin-bottom: 1.8rem;
  text-align: center;
  font-weight: normal;
  font-size: 1.5rem;
  font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;

  @media screen and (min-width: 35rem) {
    font-size: 2.6rem;

  }
`;

export const Quote = styled.div`
  margin-left: auto;
  margin-right: auto;
  margin-bottom: 5rem;
  font-style: italic;
  font-size: 1.5rem;
  max-width: 1000px;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;

& > figcaption {
  float: right;
  font-size: 1rem;
}
`;

export const FundBtn = styled.button`
  background: none;
  text-align: center;
  white-space: nowrap;
  margin-left: auto;
  margin-right: auto;
  margin-top: 3.125rem;
  margin-bottom: 3.125rem;

  @media screen and (min-width: 35rem) {
    text-align: left;
  }

`;

export const FundDesc = styled.div`
  margin-top: 2vh;
  text-align: left;
  width: 100%;
  font-weight: 400;
  font-size: 0.9375rem;

  @media screen and (min-width: 35rem) {
    padding-right: 3rem;
    margin-top: 5vh;
    text-align: left;
    font-size: 1.25rem;
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
    font-size: 1.125rem;
  }
`;

export const Wrap = styled.div`

  @media screen and (min-width: 35rem) {
    text-align: left;
    width: 50%;
  }
`;

export const Img = styled.img`
  width: 60%;
`;