import React from 'react';
import {
  HeroContainer,
  HeroBanner,
  HeroContent,
  HeroTitle,
  HeroDesc,
  HeroBtn,
  HeroBtnLink,


} from './HeroElements';

const HeroSection = () => {
  return (
    <>
      <HeroBanner/>
        <HeroContainer id="home">
          <HeroContent>
            <HeroTitle>Dealflow Management for Startup Investors</HeroTitle>
            <HeroDesc>
              Helping you discover and access diverse startups all
              while collecting, reviewing and tracking startup dealflow.
            <br/>
            <br/>
              Try our software for 14 days at no cost!
            </HeroDesc>
            <HeroBtn>
            <HeroBtnLink>Get Started</HeroBtnLink>
          </HeroBtn>
        </HeroContent>
        <HeroContent>
          <HeroTitle>Insert Picture Here</HeroTitle>
          <HeroDesc>
            PS. Still working on the gradient thing.
            It's a pain in the butt
          </HeroDesc>
        </HeroContent>

        </HeroContainer>
    </>
  )
}

export default HeroSection;
