import React, { Component } from 'react';
import { Button } from './Button';
import '../css/Hero.css';

class Hero extends Component {
    render() {
        return (
            <div className="hero-container">
                <img src="/img/PitchBoxIconTop.png" alt="Icon Top" />
                {/*<video src="/video/video.mp4" autoPlay loop muted />*/}
                <h1>Dealflow Management For Startup Investors</h1>
                <p>A simple yet powerful software tool for collecting, reviewing and tracking startup deal flow.</p>
                <div className="hero-btns">
                    <Button
                        className="btns"
                        buttonStyle='btn--outline' 
                        buttonSize='btn--large'
                    >
                        Request a Demo
                    </Button>
                </div>
            </div>
        );
    }
}

export default Hero;