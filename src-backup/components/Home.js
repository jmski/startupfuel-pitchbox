import React from 'react';
import '../css/App.css';
import Hero from './Hero';
import SignUp from './SignUp';
import Divider from './Divider';

const Home = () => {
    return (
        <>
            <Hero />
            <Divider />
            <SignUp />
        </>
    );
}
export default Home;