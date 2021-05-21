import React from 'react';
import {
  AboutContainer,
  AboutInfo,
  AboutTitle,
  AboutSubtitle,
  AboutDesc,
  AboutBtn,
  AboutBtnLink,
  CardsContainer,
  CardsItem,
  CardsTitle,
  CardsDesc,
  Img,
} from './AboutElements';

import img1 from '../../img/svg/undraw_filter.svg';
import img2 from '../../img/svg/undraw_team.svg';
import img3 from '../../img/svg/undraw_personal.svg';
import img4 from '../../img/svg/undraw_reviews.svg';
import img5 from '../../img/svg/undraw_target.svg';

const AboutSection = () => {
  return (
    <>
      <AboutContainer id="about">

        <AboutInfo>
          <AboutSubtitle>Powered by Startup Fuel</AboutSubtitle>
          <AboutTitle>What is the PitchBox?</AboutTitle>
          <AboutDesc>
            PitchBox is a deal flow management software built specifically
            for startup investors and funds globally. Using our easy to use
            solution, firms can <b>run intake, collaborate </b>&<b> review startup
            pitches all in one place.</b> We simplify the process for startup
            forunders to apply to your PitchBox, while ensuring that analysts
            can be equally efficient with managing and reviewing
            applications, truly a win-win for both sides.
          </AboutDesc>
          <AboutBtn>
            <AboutBtnLink
              to="/download"
            >Book a Free Demo</AboutBtnLink>
          </AboutBtn>
        </AboutInfo>

        <CardsContainer>
          <CardsItem>
            <Img src={ img1 }/>
            <CardsTitle>Filter Startups</CardsTitle>
            <CardsDesc>
              Save time by filtering out deals that don't fit your thesis.
            </CardsDesc>
          </CardsItem>

          <CardsItem>
            <Img src={ img2 }/>
            <CardsTitle>Team Collaboration</CardsTitle>
            <CardsDesc>
              Internal & external team members to assist in virtual due diligence.
            </CardsDesc>
          </CardsItem>

          <CardsItem>
            <Img src={ img3 }/>
            <CardsTitle>Customizable Settings</CardsTitle>
            <CardsDesc>
              Feature rich settings to control intake forms,
              review criteria, managing teams and automating
              communication.
            </CardsDesc>
          </CardsItem>

          <CardsItem>
            <Img src={ img4 }/>
            <CardsTitle>Review Companies</CardsTitle>
            <CardsDesc>
              A state of the art review system to shortlist the
              best deals for your fund.
            </CardsDesc>
          </CardsItem>

          <CardsItem>
            <Img src={ img5 }/>
            <CardsTitle>Targeted Marketing</CardsTitle>
            <CardsDesc>
              Promote your fund to specific startups based on your thesis.
            </CardsDesc>
          </CardsItem>

        </CardsContainer>

      </AboutContainer>
    </>
  )
}

export default AboutSection;
