import styled from 'styled-components';
import { Link as LinkR } from 'react-router-dom';
import { Link as LinkS } from 'react-scroll';

export const NavContainer = styled.div`
	top: 0px;
	display: fixed;
	position: sticky;
	z-index: var(--z-fixed);
	overflow: hidden;
	height: var(--header-height);
	margin-top: calc(-1 * var(--header-height));
	background: ${({ scrollnav }) => (scrollnav ? 'var(--color-white)' : 'transparent')};
	box-shadow: ${({ scrollnav }) => (scrollnav ? `0 2px 20px 1px rgba(0, 0, 0, 0.1)` : 'transparent')};
	transition: all 0.3s ease-in-out;
	padding-top: 30px;

	@media screen and (min-width: 768px) {
		height: calc(var(--header-height) + 30px);
		padding-top: 15px;
	}
`;

export const NavLogo = styled(LinkS)`
`;

export const Img = styled.img`
	position: absolute;
	width: 100%;
	max-width: 400px;
	margin-left: 125px;

	@media screen and (max-width: 1024px) {
		margin-left: 60px;
	}

	@media screen and (max-width: 768px) {
		max-width: 220px;
		margin-left: 30px;
	}
`;

export const NavBtn = styled.nav`
	padding-top: 20px;

	@media screen and (max-width: 768px) {
		padding-top: 5px;
	}
`;

export const NavBtnLink = styled(LinkR)`
	right: 0;
	margin-right: 125px;
	position: absolute;
	border-radius: .5rem;
	padding: 15px;
	font-weight: normal;
	font-size: 20px;
	cursor: pointer;

	transition: all 0.2s ease-in-out;
	color: ${({ scrollnav }) => (scrollnav ? 'var(--color-white)' : 'var(--color-dark-neutral)')};
	background: ${({ scrollnav }) => (scrollnav ? 'var(--color-dark-neutral)' : 'rgba(255, 255, 255, 0.7)')};

	&:hover {
		background: ${({ scrollnav }) => (scrollnav ? 'var(--color-light-neutral)' : 'var(--color-dark-neutral)')};
		color: ${({ scrollnav }) => (scrollnav ? 'var(--color-dar-neutral)' : 'var(--color-light-neutral)')};
	}

	@media screen and (max-width: 1024px) {
		margin-left: 60px;
	}

	@media screen and (max-width: 768px) {
		margin-right: 30px;
		font-size: 15px;
		padding: .5rem .5rem;
	}
`;