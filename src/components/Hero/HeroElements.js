import styled from 'styled-components';
import { Link as LinkR } from 'react-router-dom';

export const HeroContainer = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: space-between;
	margin-left: 5vw;
	margin-right: 5vw;
	margin-top: 10vh;
	margin-bottom: 20vh;
	
	@media screen and (min-width: 35rem) {
		flex-direction: row-reverse;
		margin-bottom: 15vh;
		margin-top: 20vh;
	}

	@media screen and (min-width: 50rem) {
		margin-left: 9vw;
		margin-right: 9vw;
		margin-top: 10vh;
		margin-bottom: 10vh;
	}
`;

export const HeroContent = styled.div`
	display: flex;
	flex-direction: column;
	width: 100%;
	z-index: 5;
`;

export const HeroTitle = styled.h1`
	text-align: center;
	z-index: 10;
	margin-bottom: .5rem;
	font-weight: normal;
	font-size: 2rem;
	line-height: 2.5rem;

	@media screen and (min-width: 35rem) {
		text-align: left;
		font-size: 2.5rem;
		line-height: 3rem;
	}
`;

export const HeroDesc = styled.p`
	text-align: center;
	font-size: 1rem;
	line-height: 2rem;
	font-weight: 400;

	@media screen and (min-width: 35rem) {
		font-size: 1.5rem;
		text-align:left;
		width: 70%;
	}

`;

export const HeroBtn = styled.div`
	margin-top: 2rem;
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
	}
`;

export const ImgWrapper = styled.div`
	z-index: 10;
`;

export const Img = styled.img`
	position: relative;
	width: 100%;

`;