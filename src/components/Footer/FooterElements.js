import styled from 'styled-components';

export const Footer = styled.div`
  background: var(--color-dark-neutral);
  height: 344px;
`;

export const FooterContainer = styled.div`
  position: relative;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  padding: 20px 20px;
  column-gap: 1rem;
  row-gap: 1rem;
  /* max-width: 1024px; */

`;

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin: 0 auto;
  justify-content: center;
  text-align: left;
  column-gap: 1rem;
  row-gap: .1rem;
`;

export const Row = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(230px, 1fr));
  grid-gap: 20px;
`;

export const FooterLogo = styled.a`
  position: relative;
  margin-bottom: 5rem;
  cursor: pointer;

`;

export const LogoImg = styled.img`
  width: 100%;
  max-width: 200px;
`;

export const FooterCopy = styled.span`
  color: var(--color-light-neutral);
  font-size: 14px;
`;

export const Title = styled.span`
  font-weight: var(--font-semi-bold);
  font-size: var(--small-font-size);
  color: var(--color-white);
`;

export const Link = styled.a`
  color: var(--color-light-neutral);
  font-size: var(--smaller-font-size);
  margin-bottom: var(--mb-1);
  cursor: pointer;
`;

export const PodcastContainer = styled.div`
  text-align: center;
  align-items: center;
  justify-content: center;
  width: 108px;
  height: 116px;
  border-radius: .75rem;
  background: var(--color-darker-neutral);
  color: var(--color-white);
  cursor: pointer;
`;

export const PodTitle = styled.span`
  font-size: var(--smallest-font-size);
  font-weight: var(--font-semi-bold);
`;

export const SocialWrapper = styled(Wrapper)`
  flex-direction: row;
`;


export const SocialLink = styled(Link)`
  font-size: var(--normal-font-size);
  color: var(--color-white);
`;