import styled from 'styled-components';
import { Link as LinkR } from 'react-router-dom';

export const AboutContainer = styled.div`
		display: flex;
		flex-direction: column;
		margin-right: 5vw;
		margin-left: 5vw;
		margin-bottom: 5vh;

	@media screen and (min-width: 35rem) {
		margin-left: 9vw;
		margin-right: 9vw;
		margin-bottom: 15vh;
	}
`;

export const AboutInfo = styled.div`
	font-weight: normal;

	@media screen and (min-width: 35rem) {
		text-align: center;
	}

`;

export const AboutTitle = styled.h2`
	text-align: center;
	margin-bottom: 4vh; //3.125rem
	font-size: 1.5rem;
	font-weight: normal;
	font-family: Merriweather;

	@media screen and (min-width: 35rem) {
		font-size: 2.6rem;
	}
`;

export const AboutSubtitle = styled.h3`
	text-align: center;
	color: var(--color-blue);
	font-size: 1rem;

	@media screen and (min-width: 35rem) {
		font-size: 1.5rem;
	}
`;

export const AboutDesc = styled.p`
	font-size: 0.9375rem;
	
	@media screen (min-width: 25rem) {
		font-size: 1.25rem;
	}
`;

export const AboutBtn = styled.div`
	margin-top: 7vh;  //3.125rem
	text-align: center;
`;

export const AboutBtnLink = styled(LinkR)`
	background: var(--color-blue);
	color: var(--color-white);
	border-radius: .5rem;
	font-size: 1rem;
	padding: .7rem .7rem;

	&:hover {
		background: #2777a7;
	}

	@media screen and (min-width: 35rem) {
		padding: 1rem 1rem;
		font-size: 1.125rem;
	}
`;

export const GridContainer = styled.div`
	margin-top: 3.125rem;
	display: grid;
	grid-template-columns: 100%;

	@media screen and (min-width: 35rem) {
		grid-template-columns: repeat(2, 1fr);
		column-gap: 5vw;
		row-gap: 3.125rem;
	}
`;

export const GridItem = styled.div`
	text-align: center;
	margin-bottom: 3.125rem;
`;

export const Img = styled.img`
	display: block;
	margin-bottom: 1.5625rem;
`;



export const GridSubtitle = styled.h4`
	font-size: 1.5rem;
`;

export const ItemDesc = styled.p`
	font-weight: normal;
	font-size: 1rem;
`;