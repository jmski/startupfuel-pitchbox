import React from 'react';
import {
  HeroContainer,
  HeroContent,
  HeroTitle,
  HeroDesc,

} from './HeroElements';

const HeroSection = () => {
  return (
    <>
      <HeroContainer id="home">
        <HeroContent>
            <HeroTitle>Dealflow Management for Startup Investors</HeroTitle>
            <HeroDesc>
              Helping you discover and access diverse startups all
              while collecting, reviewing and tracking startup dealflow.

              Try our software for 14 days at no cost!
            </HeroDesc>
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
