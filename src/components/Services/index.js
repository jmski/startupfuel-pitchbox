import React from 'react';
import icon1 from '../../images/svg-31.svg';
import icon2 from '../../images/svg-32.svg';
import icon3 from '../../images/svg-33.svg';
import icon4 from '../../images/svg-34.svg';
import {
    ServicesContainer,
    ServicesH1,
    ServicesWrapper,
    ServicesCard,
    ServicesH2,
    ServicesIcon,
    ServicesP
} from './ServicesElements';


const Services = () => {
    return (
        <>
            <ServicesContainer id="features">
                <ServicesH1>PitchBox Features</ServicesH1>
                <ServicesWrapper>
                    <ServicesCard>
                        <ServicesIcon src={icon1} />
                        <ServicesH2>Filter Startups</ServicesH2>
                        <ServicesP>Save time by filtering out deals that don't fit your thesis.</ServicesP>
                    </ServicesCard>
                    <ServicesCard>
                        <ServicesIcon src={icon2} />
                        <ServicesH2>Team Collaboration</ServicesH2>
                        <ServicesP>Internal & external team members to assist in virtual due diligence.</ServicesP>
                    </ServicesCard>
                    <ServicesCard>
                        <ServicesIcon src={icon3} />
                        <ServicesH2>Review Companies</ServicesH2>
                        <ServicesP>A state of the art review system to shorlist the best deals for your fund.</ServicesP>
                    </ServicesCard>
                    <ServicesCard>
                        <ServicesIcon src={icon4} />
                        <ServicesH2>Targeted Marketing</ServicesH2>
                        <ServicesP>Promote your fund to specific startups based on your thesis.</ServicesP>
                    </ServicesCard>
                </ServicesWrapper>
            </ServicesContainer>
        </>
    )
}

export default Services;
