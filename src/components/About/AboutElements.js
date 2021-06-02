import styled from 'styled-components';
import { Link as LinkR } from 'react-router-dom';

export const AboutContainer = styled.div`
		display: flex;
		margin-right: 30px;
		margin-left: 30px;
		margin-bottom: 50px;

	@media screen and (min-width: 768px) {
		margin-left: 60px;
		margin-right: 60px;
	}

	@media screen and (min-width: 1024px) {
		display: grid;
		grid-template-columns: repeat(2, 1fr);
		margin-left: 125px;
		margin-right: 125px;
	}
`;

export const Bg = styled.img`
	width: 100%;
	position: absolute;
	display: none;
	opacity: 60%;
	z-index: -1;

	@media screen and (min-width: 768px) {
	 top: 600px;
 }

 @media screen and (min-width: 1024px) {
	 display: block;
	 top: 400px;
 }
`;

export const AboutInfo = styled.div`
	font-weight: normal;
	padding-right: 0;
	text-align: left;


	@media screen and (min-width: 768px) {
	
	}

	@media screen and (min-width: 1024px) {
		text-align: left;
		position: relative;
		margin-bottom: var(--mb-4);
	}
`;

export const AboutTitle = styled.h2`
	margin-bottom: var(--mb-2);
	font-size: 38px;
	font-weight: normal;

	@media screen and (max-width: 768px) {
		font-size: 24px;
	}
`;

export const AboutSubtitle = styled.h3`
	color: var(--color-blue);
	font-weight: bold;
	font-size: 27px;
	margin-bottom: 5px;

	@media screen and (max-width: 768px) {
		font-size: 18px;
	}
`;

export const AboutDesc = styled.p`
	margin-bottom: 40px;
	font-size: 16px;
`;

export const AboutBtn = styled.div`

`;

export const AboutBtnLink = styled(LinkR)`
	background: var(--color-blue);
	color: var(--color-white);
	padding: 1rem 1rem;
	border-radius: .5rem;
	font-weight: normal;
	font-size: 18px;

	&:hover {
		background: #2777a7;
	}

	@media screen and (max-width: 768px) {
		font-size: 16px;
		padding: .7rem .7rem;
	}
`;

export const CardsContainer = styled.div`
	display: none;

	@media screen and (min-width: 1024px) {
		display: none;
		grid-template-columns: repeat(3, 1fr);
		max-width: 600px;
		column-gap: 20px;
		row-gap: 20px;
	}
`;

export const Img = styled.img`
	position: relative;
	justify-content: center;
	width: 100px;
	height: 150px; // This affects image centering??
`;

export const ImgOne = styled(Img)`
	
`;

export const ImgTwo = styled(Img)`

`;

export const ImgThree = styled(Img)`

`;

export const ImgFour = styled(Img)`

`;

export const ImgFive = styled(Img)`

`;

export const Card = styled.div`
	width: 100px;
	height: 150px;
	overflow: hidden;
	position: relative;
	border-radius: 2rem;

`;

export const CardOne = styled(Card)`
	border: 3px solid var(--color-purple);
`;

export const CardTwo = styled(Card)`
	border: 3px solid var(--color-blue);

`;

export const CardThree = styled(Card)`
	border: 3px solid var(--color-yellow);

`;

export const CardFour = styled(Card)`
	border: 3px solid var(--color-red);
	position: relative;
	left: 110px;
	top: -100px;
`;

export const CardFive = styled(Card)`
	border: 3px solid var(--color-green);
	left: 110px;
	top: -100px;

`;

export const CardOverlay = styled.div`
	position: absolute;
	display: flex;
	flex-direction: column;
	width: 100%;
	height: 100%;
	text-align: center;
	justify-content: center;
	z-index: 10;
	bottom: 300;
	padding: 5px;

`;

export const CardOneOverlay = styled(CardOverlay)`
		${CardOne}:hover & {
			bottom: 0;
			background: var(--color-purple);
		}
`;

export const CardTwoOverlay = styled(CardOverlay)`
		${CardTwo}:hover & {
			bottom: 0;
			background: var(--color-blue);
		}
`;

export const CardThreeOverlay = styled(CardOverlay)`
	${CardThree}:hover & {
		bottom: 0;
		background: var(--color-yellow);
	}
`;

export const CardFourOverlay = styled(CardOverlay)`
	${CardFour}:hover & {
		bottom: 0;
		background: var(--color-red);
	}
`;

export const CardFiveOverlay = styled(CardOverlay)`
	${CardFive}:hover & {
		bottom: 0;
		background: var(--color-green);
	}
`;

export const CardTitle = styled.h3`
	color: var(--color-white);
`;

export const CardDesc = styled.p`
	color: var(--color-white);

`;