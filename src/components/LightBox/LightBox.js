import React from 'react';
import {
  ModelContainer,
  ModelContent,
  ModelImg,
  CloseBtn,
} from './LightBoxElements';

import { FaTimes } from 'react-icons/fa';

const LightBox = () => {
  return (
    <>
      <ModelContainer>
        <ModelContent>
          <CloseBtn isOpen ={ isOpen } toggle={ toggle }><FaTimes/></CloseBtn>
          <ModelImg src={img} />
        </ModelContent>


      </ModelContainer>
    </>
  )
}

export default LightBox
