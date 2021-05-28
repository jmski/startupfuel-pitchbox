import React from 'react';
import {
  AboutContainer,
  Bg,
  AboutInfo,
  AboutTitle,
  AboutSubtitle,
  AboutDesc,
  AboutBtn,
  AboutBtnLink,
  CardsContainer,
  // CardContent,
  CardOne,
  CardTwo,
  CardThree,
  CardFour,
  CardFive,
  CardOverlay,
  CardTitle,
  CardTitleOverlay,
  CardDesc,
  Img,
} from './AboutElements';
import bg from '../../img/blob.png';
import img1 from '../../img/svg/undraw_filter.svg';
import img2 from '../../img/svg/undraw_team.svg';
import img3 from '../../img/svg/undraw_personal.svg';
import img4 from '../../img/svg/undraw_reviews.svg';
import img5 from '../../img/svg/undraw_target.svg';

const AboutSection = () => {
  return (
    <>
      <AboutContainer id="about">
        <Bg src={bg}/>
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
            <Img src={ img1 }/>
            <CardTitle>
              Filter Startups
            </CardTitle>
            <CardOverlay>
              <CardTitleOverlay>
                Filter Startups
              </CardTitleOverlay>
              <CardDesc>
                Save time by filtering out deals that don't fit your thesis.
              </CardDesc>
            </CardOverlay>
          </CardOne>

          <CardTwo>
            <Img src={ img2 }/>
            <CardTitle>
              Team Collaboration
            </CardTitle>
            <CardOverlay>
              <CardTitleOverlay>
                Team Collaboration
              </CardTitleOverlay>
              <CardDesc>
                Your entire team gets access to all the data to ensure proper due diligence.
              </CardDesc> 
            </CardOverlay>
          </CardTwo>

          <CardThree>
            <Img src={ img3 }/>
            <CardTitle>
              Customizable Settings
            </CardTitle>
            <CardOverlay>
              <CardTitleOverlay>
                Customizable Settings
              </CardTitleOverlay>
              <CardDesc>
                Create the solution you need including controlling intake forms,
                reviewing criteria, team management, and automating communication.
              </CardDesc>
            </CardOverlay>
          </CardThree>
          

          <CardFour>
            <Img src={ img4 }/>
            <CardTitle>
                Comprehensive Shortlist
            </CardTitle>
            <CardOverlay>
              <CardTitleOverlay>
                Comprehensive Shortlist
              </CardTitleOverlay>
              <CardDesc>
                Our state of the art review system reviews your list and finds the best
                deals for your fund.
              </CardDesc>
            </CardOverlay>
          </CardFour>

          <CardFive>
            <Img src={ img5 }/>
            <CardTitle>
              Targeted Marketing
            </CardTitle>
            <CardOverlay>
              <CardTitleOverlay>
                Targeted Marketing
              </CardTitleOverlay>
              <CardDesc>
                Find the ideal startups to promote your fund to according to your thesis.
              </CardDesc>
            </CardOverlay>
          </CardFive>

        </CardsContainer>

      </AboutContainer>
    </>
  )
}

export default AboutSection;
