import React, { useState } from 'react'
import NavBar from '../components/NavBar';
import SideBar from '../components/SideBar';
import Hero from '../components/Hero';
import Info from '../components/Info';
import Services from '../components/Services';
import Footer from '../components/Footer';

import { homeObjOne } from '../components/Info/data';
import { homeObjTwo } from '../components/Info/data';
import { homeObjThree } from '../components/Info/data';
import { homeObjFour } from '../components/Info/data';

const Home = () => {  
    const [ isOpen, setIsOpen ] = useState(false);
    const toggle = () => {
        setIsOpen(!isOpen);
    }

    return (
        <>
            <SideBar isOpen={isOpen} toggle={toggle}/>
            <NavBar toggle={toggle}/>
            <Hero />
            <Info {...homeObjOne}/>
            <Info {...homeObjTwo}/>
            <Info {...homeObjThree} />
            <Services />
            <Info {...homeObjFour} />
            <Footer />
        </>
    );
};

export default Home;
