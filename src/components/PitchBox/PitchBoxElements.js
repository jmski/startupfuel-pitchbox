import styled from 'styled-components';
import { Link as LinkR } from 'react-router-dom';

export const PbContainer = styled.div`
  background: var(--color-light-neutral);
  display: flex;
`; 

export const Wrap = styled.div`
  display: flex;
  margin-top: 3.125rem;
  flex-wrap: wrap;
  flex-direction: column;
  justify-content: center;
  margin-left: auto;
  margin-right: auto;

  @media screen and (min-width: 35rem) {
    flex-direction: row;
  }

  @media screen and (min-width: 50rem) {
    margin-left: auto;
    margin-right: auto;
    margin-bottom: 3.125rem;
  }
`;

export const Img = styled.img`
  width: 50%;
  margin-left: auto;
  margin-right: auto;

  @media screen and (min-width: 35rem) {
    max-width: 20rem;
  }
`;

export const PbContent = styled.div`
  /* margin-top: 4vh; */
  display: flex;
  flex-direction: column-reverse;
  width: 80%;
  margin-left: auto;
  margin-right: auto;

  @media screen and (min-width: 35rem) {
    flex-direction: column;
    width: 70%;
  }

  @media screen and (min-width: 50rem) {
    width: 60%;
    margin-left: 3.8125rem;
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
    text-align: center;
    display: block;
	}

  @media screen and (min-width: 50rem) {
    text-align: left;
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

export const PbBtn = styled.button`
  background: var(--color-purple);
  color: var(--color-white);
  border-radius: .5rem;
  padding: .7rem .7rem;
  font-weight: normal;
  font-size: 1rem;
  white-space: nowrap;
  font-style: italic;
  margin-left: auto;
  margin-right: auto;
  margin-top: 3.125rem;
  margin-bottom: 3.125rem;


  &:hover {
    background: #59019f;
  }

  @media screen and (min-width: 35rem) {
    margin-left: 0;
    padding: 1rem 1rem;
    font-size: 1.125rem;

  }
`;

// export const PbBtnLink = styled.button`
//   background: var(--color-purple);
//   color: var(--color-white);
//   border-radius: .5rem;
//   padding: .7rem .7rem;
//   font-weight: normal;
//   font-size: 1rem;
//   white-space: nowrap;
//   font-style: italic;

//   &:hover {
//     background: #59019f;
//   }

//   @media screen and (min-width: 35rem) {
// 		padding: 1rem 1rem;
//     font-size: 1.125rem;
// 	}
// `;