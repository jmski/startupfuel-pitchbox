import React, { useState } from 'react';
import LightBox from '../LightBox/LightBox';
import { 
  PbContainer,
  Wrap,
  Img,
  PbContent,
  PbTitle,
  PbTitleMobile,
  PbDesc,
  PbBtn,

} from './PitchBoxElements';

import img from '../../img/svg/mobile-phone.svg';

const PitchBoxSection = () => {
  const [ isOpen, setIsOpen ] = useState(false)
  const toggle = () => setIsOpen(prev => !prev)
  return (
    <>
      <PbContainer>
        <Wrap>
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
              Test out our app to see the types of business opportunities
              you could match with before specifying your thesis
            </PbDesc>
            <PbTitleMobile>
              Helping You Find Your Next Lucrative Deal
            </PbTitleMobile>
            <PbBtn onClick={ toggle }>Test the PitchBox App</PbBtn>
            <LightBox isOpen={ isOpen } setIsOpen={ setIsOpen } />
          </PbContent>
        </Wrap>
      </PbContainer>


    </>
  )
}

export default PitchBoxSection;
