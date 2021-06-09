import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { GlobalStyles } from './components/GlobalStyles';
import './style.css';

import { Gradient } from './webgl.js';

import NavBar from './components/Nav/NavBar';
import HeroSection from './components/Hero/Hero';
import AboutSection from './components/About/About';
import { Business } from './components/Divider/Divider';
import { Stats } from './components/Divider/Divider';
import PitchBoxSection from './components/PitchBox/PitchBox';
import FundSection from './components/Fund/Fund';
import FooterSection from './components/Footer/Footer';


export default function App() {

  React.useEffect(() => {
    var gradient = new Gradient();
    gradient.initGradient('#gradient-canvas');
  });

  return (
    <>
      <Router>
        <canvas id="gradient-canvas" />
        <NavBar />
        <HeroSection />
        <Business />
        <AboutSection />
        <Stats />
        <PitchBoxSection />
        <FundSection />
        <FooterSection />
        <GlobalStyles />
      </Router>
    </>
  );
}
