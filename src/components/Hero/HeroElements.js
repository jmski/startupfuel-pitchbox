import styled from 'styled-components';
import { Link as LinkR } from 'react-router-dom';

export const HeroBanner = styled.div`
	width: 100%;
	top: calc(-1 * var(--header-height));
	height: 700px;
	position: relative;
	z-index: 0;
	background: linear-gradient(-60deg, #8895da, #ce87eb, #e9e1a5, #9af0b3, #f8b19b, #9bd5eb, #f19cbd);
	background-size: 500% 500%;
	animation: gradient 30s ease infinite;
	background-repeat: no-repeat;
	mask-image: -webkit-gradient(linear, right top, right bottom, 
			color-stop(0.00,  rgba(0,0,0,1)),
			color-stop(0.35,  rgba(0,0,0,1)),
			color-stop(0.60,  rgba(0,0,0,0)),
			color-stop(1.00,  rgba(0,0,0,0)));
		
	@keyframes gradient {
		0% { background-position: 0% 50%; }
		50% { background-position: 100% 50%; }
		100% { background-position: 0% 50%; }
	}
`;

export const HeroContainer = styled.div`
	display: grid;
	grid-template-columns: repeat(2, 1fr);
	text-align: center;
	/* max-width: 1024px; */
	margin-top: -600px;
	margin-bottom: 6rem;
`;

export const HeroContent = styled.div`
	margin-left: 5rem;
	margin-right: auto;
	/* padding: 2rem 1rem; */
	z-index: 10;
`;

export const HeroTitle = styled.h1`
	text-align: left;
	z-index: 10;
	margin-bottom: var(--mb-2);
	font-weight: normal;
`;

export const HeroDesc = styled.p`
	text-align:left;
	margin-bottom: var(--mb-2);

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
	padding: .8rem 1rem;
	font-weight: normal;

	&:hover {
		background: var(--color-darker-neutral);
	}
`;