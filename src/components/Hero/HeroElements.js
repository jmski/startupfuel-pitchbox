import styled from 'styled-components';
import { Link as LinkR } from 'react-router-dom';

export const HeroContainer = styled.div`
	display: flex;
	flex-direction: column;
	margin-top: 100px;
	margin-left: 30px;
	margin-right: 30px;
	margin-bottom: 150px;
	text-align: center;
	

	@media screen and (min-width: 768px) {
		margin-left: 75px;
		margin-right: 75px;
	}

	@media screen and (min-width: 1024px) {
		margin-left: 125px;
		margin-right: 125px;
	}
`;

export const HeroContent = styled.div`
	width: 100%;
	z-index: 5;

	@media screen and (min-width: 768px) {
		display: flex;
		flex-direction: row;
	}
`;

export const HeroTitle = styled.h1`
	text-align: left;
	z-index: 10;
	margin-bottom: 16px;
	font-weight: normal;
	font-size: 42px;

	@media screen and (max-width: 768px) {
		font-size: 30px;
	}
`;

export const HeroDesc = styled.p`
	text-align:left;
	font-size: 24px;
	line-height: 30px;
	font-weight: 400;

	@media screen and (max-width: 768px) {
		font-size: 18px;
	}

`;

export const HeroBtn = styled.div`
	margin-top: 2rem;
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

	@media screen and (max-width: 768px) {
		font-size: 16px;
		padding: .7rem .7rem;
	}
`;

export const ImgWrapper = styled.div`
	z-index: 10;
`;

export const Img = styled.img`
	width: 500px;

@media screen and (max-width: 1024px) {
	width: 450px;
}

	@media screen and (max-width: 768px) {
		display: none;
	}
`;

export const MobileImg = styled(Img)`
	display: none;

	@media screen and (max-width: 768px) {
		display: block;
		width: 450px;
	}
`;