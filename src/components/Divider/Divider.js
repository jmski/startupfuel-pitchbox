import React from 'react';
import {
  BusinessContainer,
  BusinessTitle,
  BusinessWrap,
  Img,

  StatsContainer,
  StatsItem,
  StatsTitle,
  StatsSubtitle,

} from './DividerElements';


import img1 from '../../img/business/finance-montreal.png';
import img2 from '../../img/business/bdc-capital.jpg';
import img3 from '../../img/business/norwest-venture-partners.jpg';
import img4 from '../../img/business/inovia.png';

export const Business = () => {
  return (
    <>
      <BusinessContainer>
        <BusinessTitle>
          Join the Movement and the Thousands of Companies Who are Using Us to Scale Their Business
        </BusinessTitle>
        <BusinessWrap>
         <Img src={ img1 }/>
         <Img src={ img2 }/>
         <Img src={ img3 }/>
         <Img src={ img4 }/>
         <Img src={ img2 }/>
        </BusinessWrap>
      </BusinessContainer>
    </>
  )
}

export const Stats = () => {
  return(
    <>
      <StatsContainer>

        <StatsItem>
          <StatsTitle>250+</StatsTitle>
          <StatsSubtitle>Funds/ Syndicates</StatsSubtitle>
        </StatsItem>

        <StatsItem>
          <StatsTitle>$300M+</StatsTitle>
          <StatsSubtitle>Assets Under Management</StatsSubtitle>
        </StatsItem>

        <StatsItem>
          <StatsTitle>2000+</StatsTitle>
          <StatsSubtitle>Startups</StatsSubtitle>
        </StatsItem>

        <StatsItem>
          <StatsTitle>~10%</StatsTitle>
          <StatsSubtitle>User Growth per Month</StatsSubtitle>
        </StatsItem>

      </StatsContainer>
    </>
  )
}
