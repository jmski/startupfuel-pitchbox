import styled from 'styled-components';
import { Link as LinkR } from 'react-router-dom';
import { Link as LinkS } from 'react-scroll';

export const NavContainer = styled.div`
	top: 0;
	display: fixed;
	position: sticky;
	z-index: 999;
	overflow: hidden;
	height: var(--header-height);
	margin-top: calc(-1 * var(--header-height));
	background: ${({ scrollnav }) => (scrollnav ? 'var(--color-white)' : 'transparent')};
	box-shadow: ${({ scrollnav }) => (scrollnav ? `0 2px 20px 1px rgba(0, 0, 0, 0.1)` : 'transparent')};
	transition: all 0.3s ease-in-out;
`;

export const NavLogo = styled(LinkS)`

`;

export const Img = styled.img`
	position: absolute;
	width: 100%;
	max-width: 400px;
	margin-left: 125px;
`;

export const NavBtn = styled.nav`
	padding-top: 20px;
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
`;