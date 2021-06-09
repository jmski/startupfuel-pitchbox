import styled from 'styled-components';

export const BusinessContainer = styled.div`
  margin-left: 5vw;
  margin-right: 5vw;
  margin-bottom: 20vh;

  @media screen and (min-width: 50rem) {
    margin-left: 9vw;
    margin-right: 9vw;
  }
`;

export const BusinessTitle = styled.h2` 
  text-align: center;
  margin-bottom: 5vh;
  font-weight: normal; 
  font-size: 1.5rem;
  line-height: 2rem;

  @media screen and (min-width: 35rem) {
    font-size: 2rem;
  }
`;

export const Img = styled.img`
  width: 12.5rem;
  height: auto;
  margin: 1rem;

  @media screen and (min-width: 35rem) {
    width: 10rem;

  }
`;


export const StatsContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  margin-bottom: 15vh;
  margin-right: 5vw;
  margin-left: 5vw;

  @media screen and (min-width: 50rem) {
    grid-template-columns: repeat(4, 1fr);
    margin-left: 9vw;
    margin-right: 9vw;
  }
`;

export const StatsItem = styled.div`
  text-align: center;
`;

export const StatsTitle = styled.h1`
  font-weight: var(--font-bold);
  font-size: 3rem;

  @media screen and (min-width: 50rem) {
    font-size: 4rem;
  }
`;

export const StatsSubtitle = styled.span`
  display: block;
  font-size: 1rem;
  margin-top: -.5rem;

  @media screen and (min-width: 50rem) {
    font-size: 1.5rem;
  }
`;