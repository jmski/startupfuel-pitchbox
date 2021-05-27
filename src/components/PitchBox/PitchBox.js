import React from 'react';
import { 
  PbContainer,
  Bg,
  Pb,
  PbTitle,
  PbDesc,
  PbBtn,
  PbBtnLink,
  Fund,
  FundBtn,
  FundTitle,
  FundBtnLink,
  Wrap,
  // Video,
  Img,


} from './PitchBoxElements';
import bg from '../../img/blob.png';
// import video from '../../img/SustainableDevelopmentGoals.mp4';
import img from '../../img/SustainableDevelopmentGoals.gif';

const PitchBoxSection = () => {
  return (
    <>
      <PbContainer id="contact">
        <Bg src={bg}/>
        <Pb>
          <PbTitle>Let's find your next fund</PbTitle>
          <PbDesc>
            We have simplified the scouting and due diligence process for various
            businesses including
            <ul>
              <li>Impact Based Angel Networks</li>
              <li>VC and Corporate Funds</li>
              <li>Startup Accelerators</li>
            </ul>
            Scroll through just a few of the firms we have helped find startup investment
            opportunities that align with their thesis.
          </PbDesc>
          <PbBtn>
            <PbBtnLink>View Active PitchBoxes</PbBtnLink>
          </PbBtn>
        </Pb>
        <FundTitle>
          Join us in making a global impact with diversity funding and participating
          in the Sustainable Development Goals initiative.
        </FundTitle>
        <Fund>
          <Wrap>
          <PbDesc>
            No longer will diverse or mission-driven startups be denied funding due
            to lack of access.
            <br/>
            When we open up the doors and allow everyone to contribute, there is no
            limit to what problems we can solve and challenges we can overcome.
          </PbDesc>
          <FundBtn>
            <FundBtnLink>View All Funds</FundBtnLink>
          </FundBtn>
          </Wrap>
          {/* <Wrap>
            test
          </Wrap>
          <Video autoPlay loop muted src={ video } type='video/mp4' /> */}
          <Img src={ img } />
        </Fund>


      </PbContainer>
    </>
  )
}

export default PitchBoxSection;
