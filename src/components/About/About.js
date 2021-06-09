import React from 'react';
import {
  AboutContainer,
  AboutInfo,
  AboutTitle,
  AboutSubtitle,
  AboutDesc,
  AboutBtn,
  AboutBtnLink,
  GridContainer,
  GridItem,
  GridSubtitle,
  ItemDesc,
  Img,

} from './AboutElements';

import img1 from '../../img/svg/team-collab.svg';
import img2 from '../../img/svg/filter-startup.svg';
import img3 from '../../img/svg/custom-settings.svg';
import img4 from '../../img/svg/target-marketing.svg';

const AboutSection = () => {
  return (
    <>
      <AboutContainer id="about">
        <AboutInfo>
          <AboutSubtitle>Powered by StartupFuel</AboutSubtitle>
          <AboutTitle>What is the PitchBox?</AboutTitle>
          <AboutDesc>
            PitchBox helps startup investors find innovative and impactful
            investment opportunities. It also helps manage their deal flow
            by organizing all of your startup pitches in one place. Our solution
            provides your analysts with all the necessary information in one
            easy-to-navigate dashboard. Now, your team can review all types of pitches
            and make informed decisions based on the data available.
          </AboutDesc>
          <AboutBtn>
            <AboutBtnLink
              to="/download"
            >Book Your Free Demo</AboutBtnLink>
          </AboutBtn>
        </AboutInfo>

        <GridContainer>

          <GridItem>
            <Img src={img1} />
            <GridSubtitle>Team Collaborations</GridSubtitle>
            <ItemDesc>
              Your entire team gets access to all the data to ensure
              proper due diligence
            </ItemDesc>
          </GridItem>

          <GridItem>
            <Img src={img2} />
            <GridSubtitle>Filter Startups</GridSubtitle>
            <ItemDesc>
              Save time by filtering out deals that don't fit your thesis
            </ItemDesc>
          </GridItem>

          <GridItem>
            <Img src={img3} />
            <GridSubtitle>Customizable Settings</GridSubtitle>
            <ItemDesc>
              Create the solution you need including controlling
              intake forms, reviewing criteria,team management,
              and automating communication
            </ItemDesc>
          </GridItem>

          <GridItem>
            <Img src={img4} />
            <GridSubtitle>Targeted Marketing</GridSubtitle>
            <ItemDesc>
              Find the ideal startups to promote your fund to
              according to your thesis
            </ItemDesc>
          </GridItem>

        </GridContainer>

      </AboutContainer>
    </>
  )
}

export default AboutSection;
