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
          <AboutTitle>How does the PitchBox help you?</AboutTitle>
          <AboutDesc>
            Pitchbox is an advanced software system that enpowers venture capital investors with data & intelligence.
            It helps startup investors scout innovative and impactful investment opportunities.
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
            <GridSubtitle>Enhanced Team Collaborations</GridSubtitle>
            <ItemDesc>
              Your internal Team & external advisors get access
              to all the data to ensure proper due diligence
            </ItemDesc>
          </GridItem>

          <GridItem>
            <object type="image/svg+xml" max-width="350px" height="255px" data={img2}></object>
            <GridSubtitle>Data Driven Deal Scouting</GridSubtitle>
            <ItemDesc>
              Save time by filtering and organizing deals based
              on thesis, impact and success probability
            </ItemDesc>
          </GridItem>

          <GridItem>
            <object type="image/svg+xml" max-width="350px" height="255px" data={img3}></object>
            <GridSubtitle>Build Relationships with Founders</GridSubtitle>
            <ItemDesc>
              Invest in Lines, not Dots to build relationships and tracking
              deals in real-time with founders
            </ItemDesc>
          </GridItem>

          <GridItem>
            <object type="image/svg+xml" max-width="350px" height="255px" data={img4}></object>
            <GridSubtitle>Dedicated Venture Capital Advisor</GridSubtitle>
            <ItemDesc>
              A trained and dedicated advisor walking you
              through the end-to-end VC process
            </ItemDesc>
          </GridItem>

        </GridContainer>

      </AboutContainer>
    </>
  )
}

export default AboutSection;
