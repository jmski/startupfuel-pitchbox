import React from 'react';


import NavBar  from '../components/Nav/NavBar';
import { Business, Stats } from '../components/Divider/Divider';
import FooterSection from '../components/Footer/Footer';

import HeroSection from '../components/Hero/Hero';
import AboutSection from '../components/About/About';
import PitchBoxSection from '../components/PitchBox/PitchBox';

const Home = () => {

  return(
    <>
      <NavBar />
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