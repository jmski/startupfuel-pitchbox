import React from 'react';

import {
  FundContainer,
  FundTitle,
  Quote,
  FundContent,
  Wrap,
  FundDesc,
  FundBtn,
  FundBtnLink,
  IconImg,
  Img,
} from './FundElements';

import img1 from '../../img/svg/Diversity-Icons.svg';
import img2 from '../../img/svg/Diversity-Image.svg';

const FundSection = () => {
  return (
    <>
      <FundContainer>
        <FundTitle>
          Introducing People, Planet and Profit into Venture Capital
          <Quote>
            <p>
              "Diversity drives innovation.
              When we limit who can contribute,
              we in turn limit what problems we can solve."
            </p>
            <figcaption>- Telle Whitney</figcaption>
          </Quote>
        </FundTitle>
        <FundContent>
          <Wrap>
            <IconImg src={ img1 } />
            <FundDesc>
              Find underrespresented, overlooked founders building
              extraordinary, distruptive solutions to humanities
              problems.
            </FundDesc>
            <FundBtn>
              <FundBtnLink
                to="//www.startupfuel.com/explore"
                target="_blank"
              >
                View All Funds
              </FundBtnLink>
            </FundBtn>
          </Wrap>
          <Img src={ img2 } />
        </FundContent>
      </FundContainer>
    </>
  )
}

export default FundSection;