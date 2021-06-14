import React from 'react';
import {
  ModelContainer,
  ModelContent,
  ModelImg,
  CloseBtn,
} from './LightBoxElements';

import img from '../../img/svg/mobile-phone.svg';

const LightBox = ({ isOpen, setIsOpen }) => {
  return(
    <>
    <ModelContainer isOpen={isOpen}>
      <ModelContent>
        <CloseBtn onClick={() => setIsOpen (prev => !prev)} />
        <ModelImg src={img} />
      </ModelContent>

    </ModelContainer>
    </>
  )
}

export default LightBox;