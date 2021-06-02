import styled from 'styled-components';

export const Footer = styled.div`
  background: var(--color-dark-neutral);
  height: 550px;

  @media screen and (min-width: 768px) {
    height: 300px;
  }
`;

export const FooterContainer = styled.div`
  display: block;
  text-align: center;

  @media screen and (min-width: 768px) {
    position: absolute;
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    margin-top: 25px;
    z-index: 1;
    overflow: hidden;
  }

  @media screen and (min-width: 1024px) {
    grid-template-columns: repeat(4, 1fr);
    width: 100%;
  }
`;

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  margin-left: 10%;
  margin-right: 10%;

  @media screen and (max-width: 768px) {
    margin-left: 0;
    margin-right: 0;
  }
`;


export const FooterLogo = styled.a`
  cursor: pointer;
  margin-bottom: 150px;

  @media screen and (max-width: 768px) {
    margin-bottom: 0;
  }
`;

export const LogoImg = styled.img`
  margin-top: 15px;
  width: 100%;
  max-width: 200px;
`;

export const FooterCopy = styled.span`
  color: var(--color-light-neutral);
  font-size: 14px;

  @media screen and (max-width: 768px) {
    display: none;
  }
`;

export const Title = styled.h4`
  font-weight: var(--font-semi-bold);
  font-size: 16px;
  color: var(--color-white);
  margin-bottom: 15px;
`;

export const Link = styled.a`
  color: var(--color-light-neutral);
  font-size: 14px;
  margin-bottom: 15px;
  cursor: pointer;
  font-weight: normal;
`;

export const PodcastContainer = styled.div`
  width: 108px;
  height: 116px;
  border-radius: .75rem;
  background: var(--color-darker-neutral);
  color: var(--color-white);
  cursor: pointer;
  margin-left: auto;
  margin-right: auto;
`;

export const PodTitle = styled.h4`
  font-size: 15px;
  text-align: center;
`;

export const SocialWrapper = styled(Wrapper)`
  display: flex;
  flex-direction: row;
  justify-content: center;
  margin-top: 20px;
  margin-left: auto;
  margin-right: auto;

  @media screen and (min-width: 768px) {
    flex-direction: column;
    margin-top: -20px;
  }

  @media screen and (min-width: 1024px) {

}
`;


export const SocialLink = styled(Link)`
  font-size: 25px;
  padding-right: 25px;
  color: var(--color-white);
  
  @media screen and (max-width: 768px) {
    margin-bottom: 50px;
  }
`;

export const MobileFooterCopy = styled(FooterCopy)`
 display: none;

 @media screen and (max-width: 768px) {
   display: block;
 }
`;