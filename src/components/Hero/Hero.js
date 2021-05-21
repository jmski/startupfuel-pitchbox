import React from 'react';
import {
  HeroContainer,
  HeroBanner,
  HeroContent,
  HeroTitle,
  HeroDesc,
  HeroBtn,
  HeroBtnLink,
  BusinessContainer,
  BusinessTitle,
  BusinessWrap,
  Img,


} from './HeroElements';

import img1 from '../../img/business/finance-montreal.png';
import img2 from '../../img/business/bdc-capital.jpg';
import img3 from '../../img/business/norwest-venture-partners.jpg';
import img4 from '../../img/business/inovia.png';

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
            <HeroBtnLink
              to="/download"
            >Get Started</HeroBtnLink>
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

      <BusinessContainer>
        <BusinessTitle>
          Join the Thousands of Companies Using StartupFuel to Scale their Business
        </BusinessTitle>
        <BusinessWrap>
         <Img src={ img1 }/>
         <Img src={ img2 }/>
         <Img src={ img3 }/>
         <Img src={ img4 }/>
         <Img src={ img1 }/>
        </BusinessWrap>
      </BusinessContainer>
    </>
  )
}

export default HeroSection;
