import React, { useState, useEffect } from 'react';
import { animateScroll as scroll } from 'react-scroll';

import { 
	Header,
	NavContainer,
	NavLogo,
	Img,
	NavMobileBtn,
	BurgerIcon,
	NavMenu,
	NavItem,
	NavLink,
	NavBtn,
	NavBtnLink,

 } from './NavBarElements';

import img from '../../img/PitchBoxIcon.png';
import { FaBars } from 'react-icons/fa';

const NavBar = ({ toggle }) => {

	const [ scrollNav, setScrollNav ] = useState(false);

	const changeNav = () => {
			if(window.scrollY >= 370) {
					setScrollNav(true);
			} else {
					setScrollNav(false);
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
			<Header scrollNav={ scrollNav }>
				<NavContainer>
					<NavLogo to='/' onClick={ toggleHome }>
						<Img src={ img } />
					</NavLogo>
					<NavMobileBtn>
						<NavBtnLink scrollNav={ scrollNav }>Book a Free Demo</NavBtnLink>
					</NavMobileBtn>
					<BurgerIcon onClick={ toggle }>
						<FaBars />
					</BurgerIcon>

					<NavMenu>

						<NavItem>
							<NavLink
								to="home"
								smooth={true}
								duration={500}
								spy={true}
								exact="true"
								offset={-80}
							>
								Home
							</NavLink>
						</NavItem>

						<NavItem>
							<NavLink								
								to="about"
								smooth={true}
								duration={500}
								spy={true}
								exact="true"
								offset={0}
							>
								About
							</NavLink>
						</NavItem>

						<NavItem>
						<NavLink								
								to="contact"
								smooth={true}
								duration={500}
								spy={true}
								exact="true"
								offset={0}
							>
								Contact
							</NavLink>
						</NavItem>


					</NavMenu>
					<NavBtn>
						<NavBtnLink scrollNav={ scrollNav }>Book a Free Demo</NavBtnLink>
					</NavBtn>

				</NavContainer>
			</Header>
		</>
	)
}

export default NavBar;
