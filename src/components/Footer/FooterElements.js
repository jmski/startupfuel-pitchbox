import styled from 'styled-components';
import { Link as LinkR } from 'react-router-dom';

export const Footer = styled.div`
  background: var(--color-dark-neutral);
  height: 20rem;

  @media screen and (max-width: 35rem) {
    height: 40rem;
  }
`;

export const FooterContainer = styled.div`
  display: flex;
  flex-direction: column;
  text-align: center;


  @media screen and (min-width: 50rem) {
    flex-direction: row;
  }
`;

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  margin-top: 1rem;

  @media screen and (min-width: 50rem) {
    margin-top: 2rem;
  }
`;


export const FooterLogo = styled.a`
  cursor: pointer;
  margin-bottom: 0;

  @media screen and (min-width: 50rem) {
    margin-bottom: 9.375rem;
  }
`;

export const LogoImg = styled.img`
  margin-top: 3.125rem;
  width: 100%;
  max-width: 12.5rem;

  @media screen and (min-width: 35rem) {
    margin-top: 0;
  }
`;

export const FooterCopy = styled.span`
  color: var(--color-light-neutral);
  font-size: .9375rem;
  display: none;

  @media screen and (min-width: 50rem) {
    display: block;
  }
`;

export const Title = styled.h4`
  font-weight: var(--font-semi-bold);
  font-size: 1rem;
  color: var(--color-white);
  margin-bottom: .9375rem;
`;

export const Link = styled(LinkR)`
  color: var(--color-light-neutral);
  font-size: .9375rem;
  margin-bottom: .9375rem;
  cursor: pointer;
  font-weight: normal;
`;

export const PodcastContainer = styled(LinkR)`
  width: 6.75rem;
  height: 7.25rem;
  border-radius: 1rem;
  background: var(--color-darker-neutral);
  color: var(--color-white);
  cursor: pointer;
  margin-left: auto;
  margin-right: auto;
  margin-top: .9375rem;
`;

export const Img = styled.img`
  width: 100%;
  border-radius: 1rem;
`;

export const SocialWrapper = styled(Wrapper)`
  display: flex;
  flex-direction: row;
  justify-content: center;
  margin-top: 1.5rem;
  margin-left: auto;
  margin-right: auto;

  @media screen and (min-width: 50rem) {
    margin-top: 1rem;
} 
`;


export const SocialLink = styled(Link)`
  font-size: 1.5rem;
  margin: 1rem;
  color: var(--color-white);
  margin-bottom: 3rem;
`;

export const MobileFooterCopy = styled(FooterCopy)`
  display: block;

 @media screen and (min-width: 50rem) {
   display: none;
 }
`;