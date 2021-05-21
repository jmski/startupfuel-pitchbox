import React from 'react';
import {
  BusinessContainer,
  BusinessTitle,
  BusinessWrap,
  Img,

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
          Join the Thousands of Companies Using StartupFuel to Scale their Business
        </BusinessTitle>
        <BusinessWrap>
         <Img src={ img1 }/>
         <Img src={ img2 }/>
         <Img src={ img3 }/>
         <Img src={ img4 }/>
         <Img src={ img1 }/>
        </BusinessWrap>
      </BusinessContainer>
    </>
  )
}

export const Stats = () => {
  return(
    <>

    </>
  )
}
