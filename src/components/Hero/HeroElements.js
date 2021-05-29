import styled from 'styled-components';
import { Link as LinkR } from 'react-router-dom';

export const HeroContainer = styled.div`
	display: grid;
	grid-template-columns: repeat(2, 1fr);
	text-align: center;
	margin-bottom: 150px;
	margin-left: 125px;
	margin-right: 125px;
`;

export const HeroContent = styled.div`
	margin-right: auto;
	z-index: 10;
	width: 80%;
`;

export const HeroTitle = styled.h1`
	text-align: left;
	z-index: 10;
	margin-bottom: 16px;
	font-weight: normal;
	font-size: 42px;
`;

export const HeroDesc = styled.p`
	text-align:left;
	margin-bottom: 16px;
	font-size: 24px;
	line-height: 30px;

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
`;

export const ImgWrapper = styled.div`
	z-index: 10;
`;

export const Img = styled.img`
	width: 100%;
	width: 684px;
	height: auto;
`;