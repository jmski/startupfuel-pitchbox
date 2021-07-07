import styled from 'styled-components';
import { Link as LinkR } from 'react-router-dom';

export const Hero = styled.div`
	margin-left: 5vw;
	margin-right: 5vw;
	margin-top: 10vh;
	margin-bottom: 4.6875rem;
	
	@media screen and (min-width: 35rem) {
		margin-bottom: 7.1123rem;
		margin-right: 0;
	}

	@media screen and (min-width: 50rem) {
		margin-left: 9vw;
		margin-right: 0;
		/* margin-top: 9.375rem; */
		margin-bottom: 3.1235rem;
	}
`;

export const Section = styled.div`
	display: grid;
	grid-template-columns: repeat(auto-fit, minmax(35rem,1fr));
	direction: ltr;

	@media screen and (max-width: 35rem) {
		grid-template-columns: 100%;
	}

`;

export const HeroContent = styled.div`
	display: block;
	z-index: 5;
	width: 100%;
`;

export const HeroTitle = styled.h1`
	font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
	color: var(--color-white);
	z-index: 10;
	text-align: left;
	font-size: 5rem;
	line-height: 6rem;
	font-weight: 700;
	text-shadow: .1rem .1rem .5rem #3e356e;
	margin-bottom: 3rem;


	@media screen and (max-width: 35rem) {
		text-align: center;
		font-size: 2rem;
		line-height: 3rem;
	}
`;

export const HeroDesc = styled.ul`
	color: var(--color-white);
	text-align: left;
	font-size: 1.438rem;
	font-weight: 400;
	margin-bottom: 4rem;
	text-shadow: .1rem .1rem .5rem #3e356e;
	margin-top: 1.25rem;
	padding-left: 1rem;

	& > li {
		margin-top: 1.25rem;
		padding-left: 0;
	}

	@media screen and (max-width: 35rem) {
		font-size: .79rem;
		padding-left: 0;
		color: var(--color-black);
		text-shadow: none;
	}

`;

export const TopWrap = styled.div`
	display: none;
	z-index: 10;

	@media screen and (max-width: 35rem) {
		display: block;
	}
`;

export const BottomWrap = styled.div`
	display: block;
	z-index: 10;

	@media screen and (max-width: 35rem) {
		display: none;
	}
`;

export const Img = styled.img`
	width: 100%;
	max-width: 1200px;
`;

export const EmailWrap = styled.div`
	display: flex;
	justify-content: space-between;
	background: var(--color-white);
	padding: .3rem;
	border-radius: .5rem;
	width: 80%;

`;

export const EmailInput = styled.input`
	color: var(--color-black);
	padding: .5rem;
	font-size: 1.2rem;
	width: 100%;
	border-radius: .5rem;
	border: 2px solid var(--color-light-neutral);

	@media screen and (max-width: 35rem) {
		width: 100vw;
		font-size: 1rem;

	}
`;

export const HeroBtnLink = styled(LinkR)`
	white-space: nowrap;
	font-weight: normal;
	font-size: 1.15rem;
	border-radius: .5rem;
	padding: 1rem;
	background: var(--color-dark-neutral);
	color: var(--color-white);

	&:hover {
		background: var(--color-darker-neutral);
	}
	@media screen and (max-width: 35rem) {
		font-size: 1rem;
		padding: .7rem;
	}
`;