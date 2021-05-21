import React from 'react';
import {
  FooterContainer,
  Wrapper,
  FooterLogo,
  LogoImg,
  FooterCopy,
  Title,
  Subtitle,
  Link,
  PodcastContainer,

} from './FooterElements';
import { FaTwitter, FaInstagram, FaFacebookSquare, FaLinkedin } from 'react-icons/fa';
import { GiOfficeChair } from 'react-icons/gi';

import img1 from '../../img/watermark-light.png';


const Footer = () => {
  return (
    <>
      <FooterContainer>
        <Wrapper>
          <FooterLogo>
            <LogoImg src={ img1 }/>
          </FooterLogo>
          <FooterCopy>© Copyright 2021 StartupFuel Inc.</FooterCopy>
        </Wrapper>


        <Wrapper>
          <Title>About</Title>
          <Link>About StartupFuel</Link>
          <Link>Terms of Use</Link>
          <Link>Privacy Policy</Link>
        </Wrapper>


        <Wrapper>
          <Title>Listen to our podcast on Spotify</Title>
            <PodcastContainer>
              <Subtitle>
                Startup Legends
              </Subtitle>      
              <GiOfficeChair />      
            </PodcastContainer>
        </Wrapper>

        <Wrapper>
          <Link>
            <FaTwitter />
          </Link>

          <Link>
            <FaInstagram />
          </Link>

          <Link>
            <FaFacebookSquare />
          </Link>

          <Link>
            <FaLinkedin />
          </Link>
        </Wrapper>

      </FooterContainer>
    </>
  )
}

export default Footer;
