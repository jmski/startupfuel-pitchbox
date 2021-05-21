import React, { useState } from 'react';


import NavBar from '../components/Nav/NavBar';
import SideBar from '../components/SideBar/SideBar';

import HeroSection from '../components/Hero/Hero';

const Home = () => {
  const [ isOpen, setIsOpen ] = useState(false);
  const toggle = () => {
    setIsOpen(!isOpen);
  }

  return(
    <>
      <NavBar toggle={ toggle } />
      <SideBar isOpen={ isOpen } toggle={ toggle } />
      <HeroSection />

    </>
  )
}

export default Home;