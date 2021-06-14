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

} from './AboutElements';

import img1 from '../../img/svg/Teamwork.svg';
import img2 from '../../img/svg/FilterStartups.svg';
import img3 from '../../img/svg/Customizable-Settings.svg';
import img4 from '../../img/svg/TargetedMarketing.svg';

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
              to="//startupfuel.zohobookings.com/#/customer/pitchbox"
              target="_blank"
            >Book Your Free Demo</AboutBtnLink>
          </AboutBtn>
        </AboutInfo>

        <GridContainer>

          <GridItem>
            <object type="image/svg+xml" max-width="350px" height="255px" data={img1}></object>
            <GridSubtitle>Team Collaborations</GridSubtitle>
            <ItemDesc>
              Your entire team gets access to all the data to ensure
              proper due diligence
            </ItemDesc>
          </GridItem>

          <GridItem>
            <object type="image/svg+xml" max-width="350px" height="255px" data={img2}></object>
            <GridSubtitle>Filter Startups</GridSubtitle>
            <ItemDesc>
              Save time by filtering out deals that don't fit your thesis
            </ItemDesc>
          </GridItem>

          <GridItem>
            <object type="image/svg+xml" max-width="350px" height="255px" data={img3}></object>
            <GridSubtitle>Customizable Settings</GridSubtitle>
            <ItemDesc>
              Create the solution you need including controlling
              intake forms, reviewing criteria,team management,
              and automating communication
            </ItemDesc>
          </GridItem>

          <GridItem>
            <object type="image/svg+xml" max-width="350px" height="255px" data={img4}></object>
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
