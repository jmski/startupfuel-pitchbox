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
  ItemWrap,
  Item,
  ItemImg,
  ItemSubtitle,

} from './PitchBoxElements';

import img1 from '../../img/svg/mobile-phone.svg';
import img2 from '../../img/svg/impact-based-angel-networks.svg';
import img3 from '../../img/svg/vc-corporate-funds.svg';
import img4 from '../../img/svg/startup-accel.svg';

const PitchBoxSection = () => {
  const [ isOpen, setIsOpen ] = useState(false)
  const toggle = () => setIsOpen(prev => !prev)
  return (
    <>
      <PbContainer>
        <Wrap>
          <Img src={img1} />
          
          <PbContent>
            <PbTitle>
              Helping You Find Your Next Unicorn
            </PbTitle>
            <PbDesc>
              We have simplified the scouting and due diligence process for various
              for various all startup funds including:
              <ItemWrap>

                <Item>
                  <ItemImg src={img2}/>
                  <ItemSubtitle>
                    Angel Networks
                  </ItemSubtitle>
                </Item>

                <Item>
                  <ItemImg src={img3}/>
                  <ItemSubtitle>
                    VC and Corporate Innovation Funds
                  </ItemSubtitle>
                </Item>

                <Item>
                  <ItemImg src={img4}/>
                  <ItemSubtitle>
                    Accelerators & Incubators
                  </ItemSubtitle>
                </Item>

              </ItemWrap>
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
