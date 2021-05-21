import styled from 'styled-components';

export const BusinessContainer = styled.div`
  max-width: 1024px;
  margin-bottom: var(--mb-5);
`;

export const BusinessTitle = styled.h3`
  text-align: center;
  margin-bottom: var(--mb-4);
`;

export const BusinessWrap = styled.div`
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  column-gap: 2rem;
  row-gap: 2rem;
`;

export const Img = styled.img`
  position: relative;
  width: 120px;
  margin: auto;

`;