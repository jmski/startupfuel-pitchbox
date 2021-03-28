import React from 'react';
import { 
    FaLinkedin,
    FaTwitter,
    FaInstagram,
    FaFacebook
 } from 'react-icons/fa';
import {
    FooterContainer,
    FooterWrapper,
    FooterLinksContainer,
    FooterLinksWrapper,
    FooterLinkItems,
    FooterLinkTitle,
    FooterLink,
    SocialMedia,
    SocialMediaWrap,
    SocialLogo,
    SocialImg,
    WebsiteRights,
    SocialIcons,
    SocialIconLink
} from './FooterElements';
import { animateScroll as scroll } from 'react-scroll';

import img from '../../images/watermark-light.png';

const Footer = () => {

    const toggleHome = () => {
        scroll.scrollToTop();
    };

    return (
        <>
            <FooterContainer>
                <FooterWrapper>
                    <FooterLinksContainer>
                        <FooterLinksWrapper>
                            <FooterLinkItems>
                                <FooterLinkTitle> About Us</FooterLinkTitle>
                                <FooterLink to='/'>How it works</FooterLink>
                                <FooterLink to='/'>Testimonials</FooterLink>
                                <FooterLink to='/'>FAQs</FooterLink>
                                <FooterLink to='/'>Terms of Service</FooterLink>
                            </FooterLinkItems>
                            <FooterLinkItems>
                                <FooterLinkTitle> Contact Us</FooterLinkTitle>
                                <FooterLink to='/'>Contact</FooterLink>
                                <FooterLink to='/'>Support</FooterLink>
                                <FooterLink to='/'>Request a Demo</FooterLink>
                            </FooterLinkItems>
                        </FooterLinksWrapper>
                        <FooterLinksWrapper>
                            <FooterLinkItems>
                                <FooterLinkTitle> Social Media</FooterLinkTitle>
                                <FooterLink to='/'>LinkedIn</FooterLink>
                                <FooterLink to='/'>Twitter</FooterLink>
                                <FooterLink to='/'>Instagram</FooterLink>
                                <FooterLink to='/'>Facebook</FooterLink>
                            </FooterLinkItems>
                        </FooterLinksWrapper>
                    </FooterLinksContainer>
                    <SocialMedia>
                        <SocialMediaWrap>
                            <SocialLogo to='/'>
                                <SocialImg src={ img } onClick={toggleHome}/>
                            </SocialLogo>
                            <WebsiteRights>© 2020 StartupFuel Inc.  All Rights Reserved.</WebsiteRights>
                            <SocialIcons>
                                <SocialIconLink
                                    href='//'
                                    target='_blank'
                                    aria-label="LinkedIn"
                                >
                                    <FaLinkedin />
                                </SocialIconLink>
                                <SocialIconLink
                                    href='//'
                                    target='_blank'
                                    aria-label="Twitter"
                                >
                                    <FaTwitter />
                                </SocialIconLink>
                                <SocialIconLink
                                    href='//'
                                    target='_blank'
                                    aria-label="Instagram"
                                >
                                    <FaInstagram />
                                </SocialIconLink>
                                <SocialIconLink
                                    href='//'
                                    target='_blank'
                                    aria-label="Facebook"
                                >
                                    <FaFacebook />
                                </SocialIconLink>
                            </SocialIcons>
                        </SocialMediaWrap>
                    </SocialMedia>
                </FooterWrapper>
            </FooterContainer>
        </>
    )
}

export default Footer;
