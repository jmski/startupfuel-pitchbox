import styled from 'styled-components';

export const BusinessContainer = styled.div`
  /* max-width: 1024px; */
  margin-bottom: 150px;
  margin-left: 125px;
  margin-right: 125px;
`;

export const BusinessTitle = styled.h3`
  text-align: center;
  margin-bottom: 50px;
  font-weight: normal; 
  font-size: 32px;
`;

export const BusinessWrap = styled.div`
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  column-gap: .5rem;
  row-gap: 2rem;
`;

export const Img = styled.img`
  width: 150px;
  height: auto;
  margin: auto;

`;

export const StatsContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  /* max-width: 1024px; */
  margin-bottom: 10rem;
  margin-left: 125px;
  margin-right: 125px;
`;

export const StatsItem = styled.div`
  text-align: center;
  /* width: 40% */
`;

export const StatsTitle = styled.h1`
  font-weight: var(--font-bold);
  font-size: 56px;
`;

export const StatsSubtitle = styled.span`
  display: block;
  font-size: 24px;
  margin-top: -.5rem;
`;