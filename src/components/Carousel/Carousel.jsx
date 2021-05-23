import React from 'react';
import TouchCarousel from 'react-touch-carousel';

const listOfData = [
  {
    "id": 0,
    "title": "Filter Startups",
    "description": "Save time by filtering out deals that don't fit your thesis.",
    "image": "../../img/svg/undraw_filter.svg",
  },
  {
    "id": 1,
    "title": "Team Collaboration",
    "description": "Internal & external team members to assist in virtual due diligence.",
    "image": "../../img/svg/undraw_team.svg",
  },
  {
    "id": 2,
    "title": "Customizable Settings",
    "description": "Feature rich settings to control intake forms, review criteria, managing teams and automating communication.",
    "image": "../../img/svg/undraw_personal.svg",
  },
  {
    "id": 3,
    "title": "Review Companies",
    "description": "A state of the art review system to shortlist the best deals for your fund.",
    "image": "../../img/svg/undraw_reviews.svg",
  },
  {
    "id": 4,
    "title": "Targeted Marketing",
    "description": "Promote your fund to specific startups based on your thesis.",
    "image": "../../img/svg/undraw_target.svg",
  },
]

function CarouselContainer(props) {
  // render carousel structure
};

function renderCard ( index, modIndex, cursor ) {
  const item = listOfData[modIndex]
  // render the item
}

const Carousel = () => {
  <TouchCarousel
    component={ CarouselContainer }
    cardCount={ listOfData.length }
    cardSize={ 375 }
    renderCard={ renderCard }
    loop
    autoplay={ 3000 }
  />

}