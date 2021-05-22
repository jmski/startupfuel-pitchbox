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
  CardContent,
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
          <CardContent>
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
          </CardContent>

          <CardContent>
            <Img src={ img2 }/>
            <CardTitle>
              Team Collaboration
            </CardTitle>
            <CardOverlay>
              <CardTitleOverlay>
                Team Collaboration
              </CardTitleOverlay>
              <CardDesc>
                Internal & external team members to assist in virtual due diligence.
              </CardDesc> 
            </CardOverlay>
          </CardContent>

          <CardContent>
            <Img src={ img3 }/>
            <CardTitle>
              Customizable Settings
            </CardTitle>
            <CardOverlay>
              <CardTitleOverlay>
                Customizable Settings
              </CardTitleOverlay>
              <CardDesc>
                Feature rich settings to control intake forms,
                review criteria, managing teams and automating
                communication.
              </CardDesc>
            </CardOverlay>
          </CardContent>
          

          <CardContent>
            <Img src={ img4 }/>
            <CardTitle>
                Review Companies
            </CardTitle>
            <CardOverlay>
              <CardTitleOverlay>
                Review Companies
              </CardTitleOverlay>
              <CardDesc>
                A state of the art review system to shortlist the
                best deals for your fund.
            </CardDesc>
            </CardOverlay>
          </CardContent>

          <CardContent>
            <Img src={ img5 }/>
            <CardTitle>
              Targeted Marketing
            </CardTitle>
            <CardOverlay>
              <CardTitleOverlay>
                Targeted Marketing
              </CardTitleOverlay>
              <CardDesc>
                Promote your fund to specific startups based on your thesis.
              </CardDesc>
            </CardOverlay>
          </CardContent>

        </CardsContainer>

      </AboutContainer>
    </>
  )
}

export default AboutSection;
