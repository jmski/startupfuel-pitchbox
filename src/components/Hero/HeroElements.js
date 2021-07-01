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
		margin-top: 9.375rem;
		margin-bottom: 3.1235rem;
	}
`;

export const Section = styled.div`
	display: grid;
	grid-template-columns: repeat(auto-fit, minmax(35rem,1fr));
	direction: ltr;

	@media screen and (max-width: 35rem) {

	}

`;

export const HeroContent = styled.div`
	display: block;
	z-index: 5;
	width: 100%;
`;

export const HeroTitle = styled.h1`
	text-align: center;
	z-index: 10;
	margin-bottom: 3rem;
	font-weight: normal;
	font-size: 2rem;
	line-height: 2.5rem;
	font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
	color: var(--color-white);
	font-weight: 700;
	text-shadow: .1rem .1rem .5rem #3e356e;

	@media screen and (min-width: 35rem) {
		text-align: left;
		font-size: 5rem;
		line-height: 3rem;
	}
`;

export const HeroDesc = styled.ul`
	color: var(--color-white);
	text-align: center;
	font-size: 3.438rem;
	line-height: 1.5rem;
	font-weight: 400;

	& > li {
		margin-top: 1.25rem;
		padding-left: 1rem;
		text-shadow: .1rem .1rem .5rem #3e356e;
	}

	@media screen and (min-width: 35rem) {
		font-size: 1.3rem;
		text-align:left;
	}

`;

export const ImgWrapper = styled.div`
	display: flex;
	z-index: 10;
	flex-wrap: wrap;

	@media screen and (min-width: 35rem) {

	}
`;

export const Img = styled.img`
	width: 100%;
	z-index: 10;

	@media screen and (min-width: 35rem) {
	}

	@media screen and (min-width: 50rem) {
		margin-top: -10%;
		max-width: 1200px;
	}
`;

export const EmailWrap = styled.div`
	display: flex;
	justify-content: space-between;
	background: var(--color-light-neutral);
	padding: .3rem;
	border-radius: .5rem;
	width: 40rem;

`;

export const EmailInput = styled.input`
	color: var(--color-black);
	padding: .5rem;
	font-size: 1.2rem;
	width: 25rem;
	border-radius: .5rem;
`;

export const HeroBtnLink = styled(LinkR)`
	white-space: nowrap;
	font-weight: normal;
	font-size: 1rem;
	border-radius: .5rem;
	padding: .7rem;
	background: var(--color-dark-neutral);
	color: var(--color-white);

	&:hover {
		background: var(--color-darker-neutral);
	}

	@media screen and (min-width: 35rem) {
		padding: 1rem;
		font-size: 1.125rem;
	}
`;