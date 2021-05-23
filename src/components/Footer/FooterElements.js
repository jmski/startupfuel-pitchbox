import styled from 'styled-components';

export const FooterContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  padding: 20px 20px;
  background: var(--color-dark-neutral);
  column-gap: 1rem;
  row-gap: 1rem;

`;

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin: 0 auto;
  justify-content: center;
  text-align: left;
  max-width: 1024px;
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
`;

export const FooterCopy = styled.span`
  color: var(--color-light-neutral);
  font-size: var(--smallest-font-size);
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
  width: 4rem;
  height: 4rem;
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