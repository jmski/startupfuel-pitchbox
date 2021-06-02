import React from 'react';
import {
  HeroContainer,
  HeroContent,
  HeroTitle,
  HeroDesc,
  HeroBtn,
  HeroBtnLink,
  ImgWrapper,
  Img,
  MobileImg,
} from './HeroElements';
import img from '../../img/heroprism.png';

const HeroSection = () => {
  return (
    <>
      <HeroContainer id="home">
        <HeroContent>
        <ImgWrapper><MobileImg src={ img }/></ImgWrapper>
          <HeroTitle>
            Finally, a Way for Startup Investors
            to Find the Right Opportunities
          </HeroTitle>
          <HeroDesc>
            We help investors cut through the noise and match with startups
            that align with their goals, objectives, and overall mission.
            <br/>
            <br/>
            Try our software for 14 days at no cost!
          </HeroDesc>
          <HeroBtn>
            <HeroBtnLink
              to="/download"
            >Let's Get Started</HeroBtnLink>
          </HeroBtn>
        </HeroContent>
        <ImgWrapper><Img src={ img }/></ImgWrapper>
      </HeroContainer>
    </>
  )
}

export default HeroSection;
