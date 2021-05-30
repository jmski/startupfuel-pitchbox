import styled from 'styled-components';

export const Footer = styled.div`
  background: var(--color-dark-neutral);
  height: 300px;
  z-index: 0;
`;

export const FooterContainer = styled.div`
  position: absolute;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  margin-top: 25px;
  margin-left: 125px;
  z-index: 1;
`;

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  margin-left: 50px;
  margin-right: 150px;
`;


export const FooterLogo = styled.a`
  cursor: pointer;
  margin-bottom: 150px;
`;

export const LogoImg = styled.img`
  margin-top: 15px;
  width: 100%;
  max-width: 200px;
`;

export const FooterCopy = styled.span`
  color: var(--color-light-neutral);
  font-size: 14px;
`;

export const Title = styled.h4`
  font-weight: var(--font-semi-bold);
  font-size: 16px;
  color: var(--color-white);
  margin-bottom: 15px;
`;

export const Link = styled.a`
  color: var(--color-light-neutral);
  font-size: var(--smaller-font-size);
  margin-bottom: 15px;
  cursor: pointer;
`;

export const PodcastContainer = styled.div`
  width: 108px;
  height: 116px;
  border-radius: .75rem;
  background: var(--color-darker-neutral);
  color: var(--color-white);
  cursor: pointer;
`;

export const PodTitle = styled.span`

`;

export const SocialWrapper = styled(Wrapper)`
  margin-top: 20px;
  flex-direction: row;
`;


export const SocialLink = styled(Link)`
  font-size: 25px;
  padding-right: 25px;
  color: var(--color-white);
`;