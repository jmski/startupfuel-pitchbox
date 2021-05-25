import React, { useState } from 'react';


import NavBar  from '../components/Nav/NavBar';
import SideBar from '../components/SideBar/SideBar';
import { Business, Stats } from '../components/Divider/Divider';
import FooterSection from '../components/Footer/Footer';

import HeroSection from '../components/Hero/Hero';
import AboutSection from '../components/About/About';
import PitchBoxSection from '../components/PitchBox/PitchBox';

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
      <Business />
      <AboutSection />
      <Stats />
      <PitchBoxSection />
      <FooterSection />

    </>
  );
};

export default Home;