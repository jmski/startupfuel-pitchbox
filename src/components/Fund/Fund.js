import React from 'react';

import {
  FundContainer,
  FundTitle,
  Fund,
  Wrap,
  FundDesc,
  FundBtn,
  FundBtnLink,
  Img,
} from './FundElements';

import img from '../../img/SustainableDevelopmentGoals.gif';

const FundSection = () => {
  return (
    <>
      <FundContainer>
        <FundTitle>
          Join us in making a global impact with diversity funding and participating
          in the Sustainable Development Goals initiative.
        </FundTitle>
        <Fund>
          <Wrap>
            <FundDesc>
              No longer will diverse or mission-driven startups be denied funding due to lack of access.
              <br/>
              <br/>
              When we open up the doors and allow everyone to contribute, there is no limit to what problems we can solve and challenges we can overcome.
            </FundDesc>
            <FundBtn>
              <FundBtnLink>View All Funds</FundBtnLink>
            </FundBtn>
          </Wrap>
          <Img src={ img } />
        </Fund>
      </FundContainer>
    </>
  )
}

export default FundSection;