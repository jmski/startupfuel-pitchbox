import React, { useState, useEffect } from 'react';
import { animateScroll as scroll } from 'react-scroll';

import { 
	NavContainer,
	NavLogo,
	Img,
	NavBtn,
	NavBtnLink,

 } from './NavBarElements';

import img from '../../img/PitchBoxIcon.png';

const NavBar = () => {

	const [ scrollnav, setScrollnav ] = useState(false);

	const changeNav = () => {
			if(window.scrollY >= 370) {
					setScrollnav(true);
			} else {
					setScrollnav(false);
			}
	}
	useEffect(() => {
			window.addEventListener('scroll', changeNav)

	}, []);

	const toggleHome = () => {
			scroll.scrollToTop();
	}

	return (
		<>
			<NavContainer scrollnav={ scrollnav }>

				<NavLogo to='/' onClick={ toggleHome }>
					<Img src={ img } />
				</NavLogo>

				<NavBtn>
					<NavBtnLink 
						scrollnav={ scrollnav }
						to="//startupfuel.zohobookings.com/#/customer/pitchbox"
						target="_blank"
					>
						Book Free Demo
					</NavBtnLink>
				</NavBtn>
				
			</NavContainer>
		</>
	)
}

export default NavBar;
