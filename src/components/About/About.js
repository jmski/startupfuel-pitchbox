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


  CardOne,
  CardTwo,
  CardThree,
  CardFour,
  CardFive,

  ImgOne,
  ImgTwo,
  ImgThree,
  ImgFour,
  ImgFive,

  CardOneOverlay,
  CardTwoOverlay,
  CardThreeOverlay,
  CardFourOverlay,
  CardFiveOverlay,

  CardTitle,
  CardDesc,
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


        <CardsContainer>

          <CardOne>
            <ImgOne src={ img1 } />
            <CardOneOverlay>
              <CardTitle>
                Filter Startups
              </CardTitle>
              <CardDesc>
                Save time by filtering out deals that don't fit your thesis.
              </CardDesc>
            </CardOneOverlay>
          </CardOne>

          <CardTwo>
            <ImgTwo src={ img2 } />
            <CardTwoOverlay>
              <CardTitle>
                Team Collaboration
              </CardTitle>
              <CardDesc>
                Your entire team gets access to all the data to ensure proper due diligence.
              </CardDesc> 
            </CardTwoOverlay>
          </CardTwo>

          <CardThree>
            <ImgThree src={ img3 } />
            <CardThreeOverlay>
              <CardTitle>
                Customizable Settings
              </CardTitle>
              <CardDesc>
                Create the solution you need including controlling intake forms,
                reviewing criteria, team management, and automating communication.
              </CardDesc>
            </CardThreeOverlay>
          </CardThree>

          <CardFour>
            <ImgFour src={ img4 } />
            <CardFourOverlay>
              <CardTitle>
                  Comprehensive Shortlist
              </CardTitle>
              <CardDesc>
                Our state of the art review system reviews your list and finds the best
                deals for your fund.
              </CardDesc>
            </CardFourOverlay>
          </CardFour>

          <CardFive>
            <ImgFive src={ img5 } />
            <CardFiveOverlay>
              <CardTitle>
                Targeted Marketing
              </CardTitle>
              <CardDesc>
                Find the ideal startups to promote your fund to according to your thesis.
              </CardDesc>
            </CardFiveOverlay>
          </CardFive>
          
        </CardsContainer>

      </AboutContainer>
    </>
  )
}

export default AboutSection;
