import { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`
	:root {
		--header-height: 100px;
		--nav-width: 324px;

		/*===== Font weight =====*/
		--font-medium: 500;
		--font-semi-bold: 600;
		--font-bold: 700;

		/*===== Colors =====*/

		--color-dark-neutral: #202131;
		--color-darker-neutral: #010304;
		--color-light-neutral: #eaedef;
		--color-white: #fff;
		--color-yellow: #f2c029;
		--color-blue: #3299d9;
		--color-purple: #8c00ff;
		--color-green: #32a955;
		--color-red: #d90429;

		--first-color: #aa6d80;
		--first-color-dark: #af4337;
		--first-color-darken: #2c2c31;
		--text-color: #54423D;
		--first-color-light: #ebe5e7;
		--first-color-lighten: #fffafa;
	
		--second-color: #765ca7;
		--second-color-dark: #663e79;
		--second-color-darken: #4c1653;
		--second-text-color: #54423D;
		--second-color-light: #EAE7E6;
		--second-color-lighten: #FFFAFA;

		/*===== Font and typography =====*/
		--body-font: 'Roboto', sans-serif;
		--h1-font-size: 1.5rem;
		--h2-font-size: 1.25rem;
		--h3-font-size: 1rem;
		--normal-font-size: 18px;
		--small-font-size: .813rem;
		--smaller-font-size: .75rem;
		--smallest-font-size: .5rem;

		/*===== Margenes =====*/
		--mb-1: .5rem;
		--mb-2: 1rem;
		--mb-3: 1.5rem;
		--mb-4: 2rem;
		--mb-5: 2.5rem;

		/*===== z index =====*/
		--z-fixed: 100;
	}

	@media  screen and (min-width: 768px) {
		:root {
			--h1-font-size: 2.25rem;
			--h2-font-size: 1.5rem;
			--h3-font-size: 1.25rem;
			--normal-font-size: 1rem;
			--small-font-size: .875rem;
			--smaller-font-size: .813rem;
		}
	}
		
	/*===== BASE =====*/
	*, ::before, ::after{
		box-sizing: border-box;
	}

	html {
		scroll-behavior:smooth;
	}

	body {
		margin: var(--header-height) 0 0 0;
		font-family: var(--body-font);
		font-size: var(--normal-font-size);
		font-weight: var(--font-medium);
		background-color: var(--color-white);
		color: var(--color-black);
		line-height: 1.6;
		
		margin: 0;

		@media screen and (min-width: 1024px) {
			margin-top: var(--header-height);
			
		}
	}

	canvas {
		width: 100%;
		height: 100%;
	}

	h1, h2, h3, p {
		margin: 0;
	}

	h3 {
		font-weight: var(--font-semi-bold);
	}

	ul {
		margin: 0;
		padding: 0;
		list-style: none;
	}

	a {
		text-decoration: none;
		color: var(--text-color);
	}

	img {
		max-width: 100%;
		height: auto;
		display: block;
	}

`;

export default GlobalStyles;