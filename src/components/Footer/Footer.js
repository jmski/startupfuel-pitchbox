import React from 'react';
import { animateScroll as scroll } from 'react-scroll';
import {
  Footer,
  FooterContainer,
  Wrapper,
  FooterLogo,
  LogoImg,
  FooterCopy,
  Title,
  Link,
  PodcastContainer,
  Img,
  SocialWrapper,
  SocialLink,
  MobileFooterCopy,

} from './FooterElements';
import { FaTwitter, FaInstagram, FaFacebookSquare, FaLinkedin } from 'react-icons/fa';

import img1 from '../../img/watermark-light.png';
import img2 from '../../img/startup-legends.jpeg';

const toggleHome = () => scroll.scrollToTop();

const FooterSection = ( toggle ) => {
  return (
    <>
      <Footer>
        <FooterContainer>
          <Wrapper>
            <FooterLogo
              onClick ={ toggleHome }
            >
              <LogoImg src={ img1 }/>
            </FooterLogo>
            <FooterCopy>© Copyright 2021 StartupFuel Inc.</FooterCopy>
          </Wrapper>


          <Wrapper>
            <Title>About</Title>
            <Link
              to="//www.startupfuel.com"
              target="_blank"
            >
              About StartupFuel
            </Link>
            <Link
              to="//www.startupfuel.com/terms_conditions"
              target="_blank"
            >
              Terms of Use
            </Link>
            <Link
              to="//www.startupfuel.com/privacy_policy"
              target="_blank"
            >
              Privacy Policy
            </Link>
          </Wrapper>


          <Wrapper>
            <Title>Listen to our podcast on Spotify</Title>
              <PodcastContainer
                to="//open.spotify.com/show/26emscy85nHS93dBjnQDrX"
                target="_blank"  
              >
                <Img src={img2} />
              </PodcastContainer>
          </Wrapper>

          <SocialWrapper>
            <SocialLink
              href="https://twitter.com/startupfuel/"
              target="_blank"
            >
              <FaTwitter />
            </SocialLink>

            <SocialLink
              href="https://www.instagram.com/startupfueltv/?hl=en/"
              target="_blank"
            >
              <FaInstagram />
            </SocialLink>

            <SocialLink
              href="https://www.facebook.com/FuelYourStartup/"
              target="_blank"
            >
              <FaFacebookSquare />
            </SocialLink>

            <SocialLink
              href="https://www.linkedin.com/company/startupfuelapp/?originalSubdomain=ca"
              target="_blank"
            >
              <FaLinkedin />
            </SocialLink>
          </SocialWrapper>
          <MobileFooterCopy>© Copyright 2021 StartupFuel Inc.</MobileFooterCopy>
        </FooterContainer>
      </Footer>
    </>
  )
}



          


export default FooterSection;
