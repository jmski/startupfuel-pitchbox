import React from 'react';
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import {
  BusinessContainer,
  BusinessTitle,
  Img,
  Container,
  Section,
  StatsItem,
  StatsTitle,
  StatsSubtitle,
  CarouselWrap,

} from './DividerElements';

import img1 from '../../img/business/finance-montreal.png';
import img2 from '../../img/business/bdc-capital.jpg';
import img3 from '../../img/business/norwest-venture-partners.jpg';
import img4 from '../../img/business/inovia.png';

const responsive = {
  superLargeDesktop: {
    breakpoint: { max: 4000, min: 3000 },
    items: 5
  },
  desktop: {
    breakpoint: { max: 3000, min: 1008 },
    items: 5
  },
  tablet: {
    breakpoint: { max: 1007, min: 641 },
    items: 3
  },
  mobile: {
    breakpoint: { max: 640, min: 0 },
    items: 2
  }
};

export const Business = () => {
  return (
    <>
      <BusinessContainer>
        <BusinessTitle>
          Trusted by Top Venture Funds
        </BusinessTitle>
        <CarouselWrap>
          <Carousel
            responsive={responsive}
            infinite={true}
            arrows={false}
            draggable={false}
            swipeable={false}
            autoPlay={true}
            keyBoardControl={false}
            autoPlaySpeed='3000'
            centerMode={false}
          >
            <Img src={ img1 }/>
            <Img src={ img2 }/>
            <Img src={ img3 }/>
            <Img src={ img4 }/>
            <Img src={ img1 }/>
            <Img src={ img2 }/>
            <Img src={ img3 }/>
            <Img src={ img4 }/>
          </Carousel>
        </CarouselWrap>
      </BusinessContainer>
    </>
  )
}

export const Stats = () => {
  return(
    <>
      <Container>
        <Section>

          <StatsItem>
            <StatsTitle>2000+</StatsTitle>
            <StatsSubtitle>Startup Deals</StatsSubtitle>
          </StatsItem>

          <StatsItem>
            <StatsTitle>50+</StatsTitle>
            <StatsSubtitle>Funds/ Syndicates</StatsSubtitle>
          </StatsItem>

          <StatsItem>
            <StatsTitle>36+</StatsTitle>
            <StatsSubtitle>Industries</StatsSubtitle>
          </StatsItem>

          <StatsItem>
            <StatsTitle>50+</StatsTitle>
            <StatsSubtitle>Countries</StatsSubtitle>
          </StatsItem>

        </Section>
      </Container>
    </>
  )
}
