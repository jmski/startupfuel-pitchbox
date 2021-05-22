import styled from 'styled-components';
import { Link as LinkR } from 'react-router-dom';

export const PbContainer = styled.div`
  padding: 2rem;
  margin-bottom: var(--mb-4);
`; 

export const Bg = styled.img`
  position: absolute;
  z-index: -1;
`;

export const PbTitle = styled.h1`
  font-weight: var(--normal-font);
`;

export const PbDesc = styled.p`
font-weight: var(--normal-semi-bold);
  margin-bottom: var(--mb-5);
`;

export const PbBtn = styled.div`
  margin-bottom: var(--mb-4);
`;

export const PbBtnLink = styled(LinkR)`
  background: var(--color-purple);
  color: var(--color-white);
  border-radius: .5rem;
  padding: .5rem .6rem;
`;

export const FundBtnLink = styled(LinkR)`
  background: var(--color-red);
  color: var(--color-white);
  border-radius: .5rem;
  padding: .5rem .6rem;
`;