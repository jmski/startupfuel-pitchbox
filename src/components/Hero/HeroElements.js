import styled from 'styled-components';

export const HeroContainer = styled.div`
  top: calc(-1 * var(--header-height));
  height: 400px;
  position: relative;
  overflow: hidden;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  font-color: var(--color-black);
  text-align: center;
  background: linear-gradient(-45deg, #9bd5eb, #f8b19b, #f19cbd);
  background-size: 200% 200%;
  animation: gradient 10s ease infinite;
  background-repeat: no-repeat;
    
  @keyframes gradient {
    0% { background-position: 0% 50%; }
    50% { background-position: 100% 50%; }
    100% { background-position: 0% 50%; }
  }
`;

export const HeroContent = styled.div`
margin: auto;
padding: 2rem 1rem;
`;

export const HeroTitle = styled.h1`

`;

export const HeroDesc = styled.span`


`;