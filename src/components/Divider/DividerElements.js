import styled from 'styled-components';

export const BusinessContainer = styled.div`
  max-width: 1024px;
  margin-bottom: var(--mb-5);
  padding: 0 2rem;
`;

export const BusinessTitle = styled.h3`
  text-align: center;
  margin-bottom: var(--mb-1);
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
  max-width: 1024px;
  margin-bottom: var(--mb-4);
`;

export const StatsItem = styled.div`
  text-align: center;
  /* width: 40% */
`;

export const StatsTitle = styled.h1`
  font-weight: var(--font-bold);
`;

export const StatsSubtitle = styled.span`
display: block;
  font-weight: var(--font-medium);
  font-size: var(--small-font-size);
  margin-top: -.5rem;
`;