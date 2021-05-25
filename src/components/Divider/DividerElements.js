import styled from 'styled-components';

export const BusinessContainer = styled.div`
  /* max-width: 1024px; */
  margin-bottom: 10rem;
`;

export const BusinessTitle = styled.h3`
  text-align: center;
  margin-bottom: var(--mb-1);
  font-weight: normal; 
  font-size: 32px;
`;

export const BusinessWrap = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  column-gap: .5rem;
  row-gap: 2rem;
`;

export const Img = styled.img`
  position: grid;
  width: 120px;
  margin: auto;
  grid-template-columns: repeat(4, 1fr);

`;

export const StatsContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  width: 100%;
  /* max-width: 1024px; */
  margin-bottom: 10rem;
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
  font-weight: var(--font-medium);
  font-size: 24px;
  margin-top: -.5rem;
`;