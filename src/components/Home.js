import React from 'react';
import '../css/App.css';
import Hero from './Hero';
import Cards from './Cards';
import SignUp from './SignUp';
import Divider from './Divider';

const Home = () => {
    return (
<>
        <Hero />
        <Divider />
        <Cards />
        <SignUp />
</>
    );
}
export default Home;