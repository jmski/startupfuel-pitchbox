import React, { useState } from 'react';
import { Button } from '../ButtonElements';
import {
    HeroContainer,
    HeroBg,
    ImgBg,
    VideoBg,
    HeroContent,
    HeroH1,
    HeroP,
    HeroBtnWrapper,
    ArrowRight,
    ArrowForward
} from './HeroElements';

/* video bg provided by pexels free video stock */
import videobg from '../../videos/pexels-ivan-samkov-7252805.mp4';
import imgbg from '../../images/Spiral-light.jpg';

const Hero = () => {

    const [ hover, setHover ] = useState(false)
    const onHover = () => {
        setHover(!hover);
    }

    return (
        <HeroContainer>
            <HeroBg>
                <VideoBg autoPlay loop muted src={ videobg } type='video/mp4' />
                <ImgBg src={ imgbg }/>
            </HeroBg>
            <HeroContent>
                <HeroH1>Dealflow Management For Startup Investors</HeroH1>
                <HeroP>
                    A simple yet powerful software tool for collecting,
                    reviewing and tracking startup deal flow.
                </HeroP>
                <HeroBtnWrapper>
                    <Button
                        to="signup"
                        onMouseEnter={onHover}
                        onMouseLeave={onHover}
                        primary='true'
                        dark='true'
                    >
                        Get Started {hover ? <ArrowForward /> : <ArrowRight />}
                    </Button>
                </HeroBtnWrapper>
            </HeroContent>
        </HeroContainer>
    );
};

export default Hero;
