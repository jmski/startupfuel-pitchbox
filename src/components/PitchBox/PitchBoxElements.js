import styled from 'styled-components';
import { Link as LinkR } from 'react-router-dom';

export const PbContainer = styled.div`
  display: flex;
  flex-direction: column;
  background: var(--color-light-neutral);

  @media screen and (min-width: 35rem) {
    flex-direction: row;
    padding: 7.8125rem;
  }

  @media screen and (min-width: 50rem) {
    padding-left: 20vh;
  }

`; 

export const Wrap = styled.div`
  margin-top: 3.125rem;
`;

export const Img = styled.img`
  width: 80%;

  @media screen and (min-width: 35rem) {
    width: 50%;
    max-width: 20rem;
    margin-left: 5vw;
    margin-right: 5vw;
  }
`;

export const PbContent = styled.div`
  margin-top: 5vh;
  display: flex;
  flex-direction: column-reverse;
  margin-left: 3.8125rem;

  @media screen and (min-width: 35rem) {
    width: 50%;
    flex-direction: column;
  }
`;

export const PbTitle = styled.h2`
  display: none;
  font-weight: normal;
  font-size: 1.5rem;
  text-align: center;
  font-family: Merriweather;

  @media screen and (min-width: 35rem) {
		font-size: 2.6rem;
    text-align: left;
    display: block;

	}
`;

export const PbTitleMobile = styled(PbTitle)`
  display: block;

  @media screen and (min-width: 35rem) {
    display: none;
  }
`;

export const PbDesc = styled.p`
  font-weight: normal;
  font-size: 0.9375rem;
  margin-bottom: 3.125rem;

  @media screen and (min-width: 35rem) {
    width: 80%;
    font-size: 1.25rem;
  }
`;

export const PbBtn = styled.div`
  margin-left: auto;
  margin-right: auto;
  margin-top: 3.125rem;
  margin-bottom: 3.125rem;

  @media screen and (min-width: 35rem) {
    margin-left: 0;
    margin-top: 5vh;

  }
`;

export const PbBtnLink = styled(LinkR)`
  background: var(--color-purple);
  color: var(--color-white);
  border-radius: .5rem;
  padding: .7rem .7rem;
  font-weight: normal;
  font-size: 1rem;
  white-space: nowrap;
  font-style: italic;

  &:hover {
    background: #59019f;
  }

  @media screen and (min-width: 35rem) {
		padding: 1rem 1rem;
    font-size: 1.125rem;
	}
`;