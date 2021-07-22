import React from 'react';
import {
  Hero,
  Section,
  HeroContent,
  HeroTitle,
  HeroDesc,
  HeroBtn,
  HeroBtnLink,
  TopWrap,
  BottomWrap,
  Img,
  EmailWrap,
  EmailInput,

} from './HeroElements';
import img from '../../img/svg/Computer-screen.svg';

const HeroSection = () => {
  return (
    <>
      <Hero>
        <Section>
          <TopWrap>
            <Img src={img} />
          </TopWrap>
          <HeroContent>
            <HeroTitle>
              Data. Diversity.
              <br/>
              Diligence. Dealflow.
            </HeroTitle>
            <HeroDesc>
            <li>Instant access & connection to quality startup founders</li>
            <li>Data driven scouting, tracking & due diligence process</li>
            <li>Collaborative workspace for your team, advisors & LPs</li>
            <li>The #1 solution for funds investing into diversity & impact</li>
            </HeroDesc>
            <EmailWrap>
              <EmailInput
                type='text'
                placeholder={'Email Address'}
              />
              <HeroBtnLink
                to="//www.startupfuel.com/"
                target="_blank"
              >
                Let's Get Started</HeroBtnLink>
            </EmailWrap>
          </HeroContent>
          <BottomWrap>
            <Img src={img} />
          </BottomWrap>
        </Section>
      </Hero>
    </>
  )
}

export default HeroSection;
