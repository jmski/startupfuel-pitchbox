import styled from 'styled-components';

export const BusinessContainer = styled.div`
  margin-bottom: 150px;
  margin-left: 125px;
  margin-right: 125px;

  @media screen and (max-width: 640px) {
    margin-left: 30px;
    margin-right: 30px;
    margin-bottom: 60px;
  }
`;

export const BusinessTitle = styled.h3`
  text-align: center;
  margin-bottom: 50px;
  font-weight: normal; 
  font-size: 32px;
`;

export const Img = styled.img`
  width: 150px;
  height: auto;
  margin: auto;

  @media screen and (max-width: 640px) {
    width: 200px;
  }

`;

export const StatsContainer = styled.div`
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    margin-bottom: 100px;
    margin-right: 30px;
    margin-left: 30px;


  @media screen and (min-width: 768px) {
    grid-template-columns: repeat(4, 1fr);
    margin-left: 125px;
    margin-right: 125px;
  }
`;

export const StatsItem = styled.div`
  text-align: center;
`;

export const StatsTitle = styled.h1`
  font-weight: var(--font-bold);
  font-size: 56px;

  @media screen and (max-width: 640px) {
    font-size: 42px;
  }
`;

export const StatsSubtitle = styled.span`
  display: block;
  font-size: 24px;
  margin-top: -.5rem;
  @media screen and (max-width: 640px) {
    font-size: 20px;
  }
`;