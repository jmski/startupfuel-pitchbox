import styled from 'styled-components';

export const BusinessContainer = styled.div`
  margin-left: 5vw;
  margin-right: 5vw;
  margin-bottom: 7.8125rem;

  @media screen and (min-width: 50rem) {
    margin-left: 9vw;
    margin-right: 9vw;
  }
`;

export const CarouselWrap = styled.div`
  width: 100%;
  margin-left: auto;
  margin-right: auto;
  max-width: 59.375rem;
  
`;

export const BusinessTitle = styled.h2` 
  text-align: center;
  margin-bottom: 1.5rem;
  font-weight: normal; 
  font-size: 1.5rem;
  line-height: 2rem;

  @media screen and (min-width: 35rem) {
    font-size: 2rem;
  }
`;

export const Img = styled.img`
  width: 8.75rem;
  height: auto;
  align-content: center;
  margin-left: 10vw;
  margin-right: 10vw;

  @media screen and (min-width: 35rem) {
    margin-left: 5vw;
    margin-right: 5vw;
  }

  @media screen and (min-width: 50rem) {
    width: 6.75rem;
    margin-left: 50vw;
    margin-right: 50vw;

  }
`;
export const Container = styled.div`
  background: #202131;
  margin-top: 10vh;
  margin-bottom: 10vh;
`;

export const Section = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  padding-top: 1rem;
  padding-bottom: 1.5rem;
  margin-right: 5vw;
  margin-left: 5vw;
  row-gap: 2.25rem;
  color: var(--color-white);

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
  font-size: 2.25rem;

  @media screen and (min-width: 50rem) {
    font-size: 3.5rem;
  }
`;

export const StatsSubtitle = styled.span`
  display: block;
  font-size: 1rem;
  margin-top: -1.5rem;
  font-weight: 300;

  @media screen and (min-width: 50rem) {
    font-size: 1.5rem;
  }
`;