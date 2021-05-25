import React from 'react';
import { 
  PbContainer,
  Bg,
  PbTitle,
  PbDesc,
  PbBtn,
  PbBtnLink,
  FundBtnLink,


} from './PitchBoxElements';
import bg from '../../img/blob.png';

const PitchBoxSection = () => {
  return (
    <>
      <PbContainer id="contact">
        <Bg src={bg}/>
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


        <PbTitle>
          Join us in making a global impact with diversity funding and participating
          in the Sustainable Development Goals initiative.
        </PbTitle>
        <PbDesc>
          No longer will diverse or mission-driven startups be denied funding due
          to lack of access.
          <br/>
          When we open up the doors and allow everyone to contribute, there is no
          limit to what problems we can solve and challenges we can overcome.
        </PbDesc>
        <PbBtn>
          <FundBtnLink>View All Funds</FundBtnLink>
        </PbBtn>


      </PbContainer>
    </>
  )
}

export default PitchBoxSection;
