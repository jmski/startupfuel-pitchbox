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
  PodTitle,
  SocialWrapper,
  SocialLink,

} from './FooterElements';
import { FaTwitter, FaInstagram, FaFacebookSquare, FaLinkedin } from 'react-icons/fa';
import { GiOfficeChair } from 'react-icons/gi';

import img1 from '../../img/watermark-light.png';


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
              to="about"
            >
              About StartupFuel
            </Link>
            <Link
              to="home"
            >
              Terms of Use
            </Link>
            <Link
              to="about"
            >
              Privacy Policy
            </Link>
          </Wrapper>


          <Wrapper>
            <Title>Listen to our podcast on Spotify</Title>
              <PodcastContainer>
                <PodTitle>
                  Startup Legends
                </PodTitle>      
                <GiOfficeChair />      
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

        </FooterContainer>
      </Footer>
    </>
  )
}

export default FooterSection;
