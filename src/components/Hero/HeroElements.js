import styled from 'styled-components';
import { Link as LinkR } from 'react-router-dom';

export const HeroContainer = styled.div`
	display: grid;
	grid-template-columns: repeat(2, 2fr);
	text-align: center;
	margin-top: 50px;
	margin-bottom: 150px;
	margin-left: 125px;
	margin-right: 125px;

	@media screen and (max-width: 640px) {
		grid-template-columns: 100%;
		margin-left: 30px;
		margin-right: 30px;
	}
`;

export const HeroContent = styled.div`
	margin-right: auto;
	z-index: 10;
	width: 80%;

	@media screen and (max-width: 640px) {
		width: 100%;
	}
`;

export const HeroTitle = styled.h1`
	text-align: left;
	z-index: 10;
	margin-bottom: 16px;
	font-weight: normal;
	font-size: 42px;

	@media screen and (max-width: 640px) {
		font-size: 30px;
	}
`;

export const HeroDesc = styled.p`
	text-align:left;
	margin-bottom: 16px;
	font-size: 24px;
	line-height: 30px;

	@media screen and (max-width: 640px) {
		font-size: 18px;
	}

`;

export const HeroBtn = styled.div`
	margin-top: 1rem;
	position: absolute;
`;

export const HeroBtnLink = styled(LinkR)`
	border-radius: .5rem;
	background: var(--color-dark-neutral);
	color: var(--color-white);
	white-space: nowrap;
	padding: 15px;
	font-weight: normal;
	font-size: 20px;

	&:hover {
		background: var(--color-darker-neutral);
	}

	@media screen and (max-width: 640px) {
		font-size: 16px;
		padding: .7rem .7rem;
	}
`;

export const ImgWrapper = styled.div`
	z-index: 10;
`;

export const Img = styled.img`
	width: 100%;
	width: 684px;
	height: auto;

	@media screen and (max-width: 640px) {
		display: none;
	}
`;

export const MobileImg = styled(Img)`
	display: none;

	@media screen and (max-width: 640px) {
		display: block;
		width: 450px;
	}
`;