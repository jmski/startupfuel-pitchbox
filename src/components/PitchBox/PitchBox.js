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
          Simplifying scouring and due diligence for 
          impact based Angel Networks, VC Funds,
          Corporate Funds, or Startup Accelerators with
          the PitchBox.
        </PbDesc>
        <PbBtn>
          <PbBtnLink>View Active PitchBoxes</PbBtnLink>
        </PbBtn>


        <PbTitle>
          Make an impact with diversity funding and become
          an SDG participant
        </PbTitle>
        <PbDesc>
          Diversity drives innovation - 
          when we limit who can contribute,
          we in turn limit what problems we can solve.
        </PbDesc>
        <PbBtn>
          <FundBtnLink>View All Funds</FundBtnLink>
        </PbBtn>


      </PbContainer>
    </>
  )
}

export default PitchBoxSection;
