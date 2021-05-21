import styled from 'styled-components';

export const HeroContainer = styled.div`
  top: calc(-1 * var(--header-height));
  height: 600px;
  position: relative;
  overflow: hidden;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  font-color: var(--color-black);
  text-align: center;
  background: linear-gradient(-45deg, #f8b19b, #9bd5eb, #f19cbd);
  background-size: 300% 300%;
  animation: gradient 5s ease infinite;
  background-repeat: no-repeat;
  mask-image: -webkit-gradient(linear, right top, right bottom, 
      color-stop(0.00,  rgba(0,0,0,1)),
      color-stop(0.35,  rgba(0,0,0,1)),
      /* color-stop(0.50,  rgba(0,0,0,0)),
      color-stop(0.65,  rgba(0,0,0,0)), */
      color-stop(1.00,  rgba(0,0,0,0)));
}
    
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

export const HeroBtn = styled.div`

`;