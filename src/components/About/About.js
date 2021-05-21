import React from 'react';
import {
  AboutContainer,
  AboutInfo,
  AboutTitle,
  AboutSubtitle,
  AboutBtn,
  AboutBtnLink,


} from './AboutElements';

const AboutSection = () => {
  return (
    <>
      <AboutContainer id="about">
        <AboutInfo>
          <AboutSubtitle>Powered by Startup Fuel</AboutSubtitle>
          <AboutTitle>What is the PitchBox?</AboutTitle>

          <AboutBtn>
            <AboutBtnLink
              to="/download"
            >Book a Free Demo</AboutBtnLink>
          </AboutBtn>
        </AboutInfo>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum, non?
      </AboutContainer>
    </>
  )
}

export default AboutSection;
