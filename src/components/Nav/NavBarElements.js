import styled from 'styled-components';
import { Link as LinkR } from 'react-router-dom';
import { Link as LinkS } from 'react-scroll';

export const NavContainer = styled.div`
	top: 0;
	display: flex;
	flex-direction: row;
	justify-content: space-between;
	position: sticky;
	z-index: var(--z-fixed);
	height: var(--header-height);
	margin-top: calc(-1 * var(--header-height));
	transition: all 0.3s ease-in-out;
	padding-top: 1.5rem;
	background: ${({ scrollnav }) => (scrollnav ? 'var(--color-white)' : 'transparent')};
	box-shadow: ${({ scrollnav }) => (scrollnav ? `0 2px 20px 1px rgba(0, 0, 0, 0.1)` : 'transparent')};

	@media screen and (min-width: 35rem) {
		height: calc(var(--header-height));
		padding-top: 1rem;
	}
`;

export const NavLogo = styled(LinkS)`

`;

export const Img = styled.img`
	width: 100%;
	max-width: 11.5rem;
	margin-left: 5vw;

	@media screen and (min-width: 35rem) {
		max-width: 18rem;
		margin-left: 9vw;
	}

`;

export const NavBtn = styled.nav`
	padding-top: .7rem;

	@media screen and (min-width: 35rem) {
		padding-top: 1.3rem;
	}
`;

export const NavBtnLink = styled(LinkR)`
	padding: .5rem .5rem;
	border-radius: .5rem;
	font-weight: normal;
	font-size: 1rem;
	cursor: pointer;
	white-space: nowrap;
	margin-right: 5vw;

	transition: all 0.2s ease-in-out;
	color: ${({ scrollnav }) => (scrollnav ? 'var(--color-white)' : 'var(--color-dark-neutral)')};
	background: ${({ scrollnav }) => (scrollnav ? 'var(--color-dark-neutral)' : 'rgba(255, 255, 255, 0.7)')};

	&:hover {
		background: ${({ scrollnav }) => (scrollnav ? 'var(--color-light-neutral)' : 'var(--color-dark-neutral)')};
		color: ${({ scrollnav }) => (scrollnav ? 'var(--color-dar-neutral)' : 'var(--color-light-neutral)')};
	}

	@media screen and (min-width: 35rem) {
		font-size: 1.2rem;
		padding: 1rem 1rem;
		margin-right: 9vw;
	}

`;