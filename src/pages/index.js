import React, { useState } from 'react'
import NavBar from '../components/NavBar';
import SideBar from '../components/SideBar';
import Hero from '../components/Hero';
import Info from '../components/Info';
import { homeObjOne } from '../components/Info/data';


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
        </>
    )
}

export default Home;
