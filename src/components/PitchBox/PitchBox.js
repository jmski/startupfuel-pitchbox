import React from 'react';
import { 
  PbContainer,
  Img,
  PbContent,
  PbTitle,
  PbTitleMobile,
  PbDesc,
  PbBtn,
  PbBtnLink,

} from './PitchBoxElements';

import img from '../../img/svg/mobile-phone.svg';

const PitchBoxSection = () => {
  return (
    <>
      <PbContainer>
        <Img src={img} />
        <PbContent>
          <PbTitle>
            Helping You Find Your Next Lucrative Deal
          </PbTitle>
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
          <PbTitleMobile>
            Helping You Find Your Next Lucrative Deal
          </PbTitleMobile>
          <PbBtn>
            <PbBtnLink>View Active PitchBoxes</PbBtnLink>
          </PbBtn>
        </PbContent>
      </PbContainer>
    </>
  )
}

export default PitchBoxSection;
