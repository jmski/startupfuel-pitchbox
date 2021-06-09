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
	margin-bottom: 1rem;
	font-size: 1.5rem;
	font-weight: normal;

	@media screen and (min-width: 35rem) {
		font-size: 2.3rem;
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
	margin-bottom: 3rem;
	font-size: 1rem;
`;

export const AboutBtn = styled.div`
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
	}
`;

export const GridContainer = styled.div`
	margin-top: 5vh;
	display: flex;
	flex-wrap: wrap;
	flex-direction: row;
	font-weight: normal;
	text-align: center;

	@media screen and (min-width: 50rem) {
		width: 100%;
		column-gap: 3rem;
	}
`;


export const GridItem = styled.div`
	display: flex;
	flex-basis: calc(50% - 2rem);
	justify-content: center;
	flex-direction: column;
	margin: auto;
	margin-bottom: 5vh;
`;


export const Img = styled.img`
	display: flex;
	justify-content: center;
	flex-direction: row;
`;

export const GridSubtitle = styled.h3`
	width: 100%;
`;

export const ItemDesc = styled.p`
	width: 100%;
`;