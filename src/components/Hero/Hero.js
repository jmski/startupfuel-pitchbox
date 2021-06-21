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
} from './HeroElements';
import img from '../../img/svg/Process.svg';

const HeroSection = () => {
  return (
    <>
      <HeroContainer id="home">
        <ImgWrapper>
          <Img>
            <object type="image/svg+xml" data={img}></object>
          </Img>
        </ImgWrapper>

        <HeroContent>
          <HeroTitle>
            Giving Venture Capital an Advantage
          </HeroTitle>
          <HeroDesc>
            We help investors cut through the noise and match with startups
            that align with their goals, objectives, and overall mission.
            <br/>
            <br/>
            Try our software for 14 days at no cost!
            <HeroBtn>
              <HeroBtnLink
                to="//www.startupfuel.com/"
                target="_blank"
              >
                Let's Get Started</HeroBtnLink>
            </HeroBtn>
          </HeroDesc>
        </HeroContent>

      </HeroContainer>
    </>
  )
}

export default HeroSection;
