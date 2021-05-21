import styled from 'styled-components';
import { Link as LinkR } from 'react-router-dom';

export const FooterContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  background: var(--color-dark-neutral);
  width: 100%;
  height: 15rem;

`;

export const Wrapper = styled.div`
  display: grid;
  margin-left: auto;
  margin-right: auto;
  align-items: center;
  text-align: left;
  width: calc(100% - 2rem);
  column-gap: 1rem;
  row-gap: .1rem;
`;

export const FooterLogo = styled.div`

`;

export const LogoImg = styled.img`
  width: 100%;
`;

export const FooterCopy = styled.span`
  color: var(--color-white);
  font-size: var(--smallest-font-size);
`;

export const Title = styled.span`
  font-weight: var(--font-semi-bold);
  font-size: var(--small-font-size);
  color: var(--color-white);
`;

export const Subtitle = styled.span`
  font-size: var(--smallest-font-size);
  font-weight: var(--font-semi-bold);
`;

export const Link = styled(LinkR)`
  color: var(--color-white);
  font-size: var(--small-font-size);
`;

export const PodcastContainer = styled.div`
  text-align: center;
  align-items: center;
  justify-content: center;
  width: 5rem;
  height: 5rem;
  border-radius: .5rem;
  background: var(--color-darker-neutral);
  color: var(--color-white);
  display: grid;
`;