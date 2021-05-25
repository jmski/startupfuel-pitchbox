import styled from 'styled-components';
import { Link as LinkR } from 'react-router-dom';
import { Link as LinkS } from 'react-scroll';

export const Header = styled.nav`
	/* max-width: 1024px;; */
	top: 0;
	display: flex;
	background: ${({ scrollnav }) => (scrollnav ? 'var(--color-white)' : 'transparent')};
	height: var(--header-height);
	margin-top: calc(-1 * var(--header-height));
	justify-content: center;
	align-items: center;
	position: sticky;
	z-index: var(--z-fixed);
		
	@media screen and (min-width: 768px) {
		transition: 0.8s all ease;
	}
`;

export const NavContainer = styled.div`
	display: flex;
	z-index: 1;
	width: 100%;
	padding: 0 24px;
	justify-content: space-between;
`;

export const NavLogo = styled(LinkR)`
	justify-self: flex-start;
	cursor: pointer;
	display: flex;
	align-items: center;
`;

export const Img = styled.img`
	width: 100%;
	max-width: 150px;

	@media screen and (min-width: 768px) {
		max-width: 200px;
	}
`;

export const BurgerIcon = styled.div`
	display: block;
	top: 0;
	right: 0;
	position: absolute;
	margin-top: calc(-1 * var(--mb-2));
	color: var(--color-black);
	font-size: var(--h1-font-size);
	transform: translate(-100%, 60%);
	transition: all 0.5s ease;
	cursor: pointer;

	@media screen and (min-width: 768px) {
		display: none;
	}
`;

export const NavMenu = styled.ul`
	display: flex;
	align-items: center;
	list-style: none;
	text-align: center;
		
	@media screen and (max-width: 768px) {
		display: none;
	}
`;

export const NavItem = styled.li`
	height: var(--header-height);
`;

export const NavLink = styled(LinkS)`
	color: var(--color-dark-neutral);
	display: flex;
	align-items: center;
	text-decoration: none;
	padding: 0 1rem;
	height: 100%;
	font-size: var(--small-font-size);
	font-weight: var(--font-semi-bold);
	cursor: pointer;

	&:hover {
		border-bottom: 3px solid var(--color-dark-neutral);
	}

	&.active {
		border-bottom: 3px solid var(--color-dark-neutral);
	}
`;

export const NavBtn = styled.nav`
	display: flex;
	align-items: center;

	@media screen and (max-width: 768px) {
		display: none;
	}
`;

export const NavMobileBtn = styled.nav`
	display: flex;
	align-items: center;
	margin-left: auto;
	margin-right: auto;
	
	@media screen and (min-width: 768px) {
		display: none;
	}
`;


export const NavBtnLink = styled(LinkR)`
	border-radius: .5rem;
	white-space: nowrap;
	padding: 5px 8px;
	font-size: var(--small-font-size);
	outline: none;
	border: none;
	cursor: pointer;
	transition: all 0.2s ease-in-out;
	text-decoration: none;
	color: ${({ scrollnav }) => (scrollnav ? 'var(--color-white)' : 'var(--color-dark-neutral)')};
	background: ${({ scrollnav }) => (scrollnav ? 'var(--color-dark-neutral)' : 'rgba(255, 255, 255, 0.7)')};

	&:hover {
		transition: all 0.2s ease-in-out;
		background: ${({ scrollnav }) => (scrollnav ? 'var(--color-light-neutral)' : 'var(--color-dark-neutral)')};
		color: ${({ scrollnav }) => (scrollnav ? 'var(--color-dar-neutral)' : 'var(--color-light-neutral)')};
	}
`;