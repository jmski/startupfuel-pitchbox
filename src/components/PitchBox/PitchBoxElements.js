import styled from 'styled-components';
import { Link as LinkR } from 'react-router-dom';

export const PbContainer = styled.div`
  margin-bottom: 60px;
`; 

export const Pb = styled.div`
  width: 40%;
  margin-left: 125px;

  @media screen and (max-width: 640px) {
    margin-left: 30px;
    width: 80%;
  }
`;

export const PbTitle = styled.h2`
  font-weight: normal;
  font-size: 38px;

  @media screen and (max-width: 640px) {
		font-size: 24px;
	}
`;

export const PbDesc = styled.p`
  font-weight: normal;
  margin-bottom: var(--mb-5);
  font-size: 16px;
`;

export const PbBtn = styled.div`
  margin-bottom: 150px;

  @media screen and (max-width: 640px) {
    margin-bottom: 60px;
  }
`;

export const PbBtnLink = styled(LinkR)`
  background: var(--color-purple);
  color: var(--color-white);
  border-radius: .5rem;
  padding: 1rem 1rem;
  font-weight: normal;
  font-size: 18px;


  &:hover {
    background: #59019f;
  }

  @media screen and (max-width: 640px) {
		font-size: 16px;
		padding: .7rem .7rem;
	}
`;

export const Fund = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  margin-bottom: var(--mb-4);
  margin-left: 125px;

  @media screen and (max-width: 640px) {
    margin-left: 30px;
    grid-template-columns: 100%;
  }
`;

export const FundTitle = styled.h4`
  text-align: center;
  font-weight: normal;
  font-size: 38px;
  margin-bottom: var(--mb-4);
  margin-left: 125px;
  margin-right: 125px;

  @media screen and (max-width: 640px) {
		font-size: 24px;
    margin-left: 30px;
    margin-right: 30px;
    margin-bottom: 0;
	}
`;

export const FundBtn = styled(PbBtn)`
  /* text-align: center; */
`;

export const FundDesc = styled.p`
  margin-top: 150px;
  padding-right: 50px;
  margin-bottom: 50px;
  font-weight: normal;
  font-size: 16px;

  @media screen and (max-width: 640px) {
    margin-top: 20px;
    text-align: left;
  }
`;

export const FundBtnLink = styled(LinkR)`
  background: var(--color-red);
  color: var(--color-white);
  border-radius: .5rem;
  padding: 1rem 1rem;
  font-weight: normal;
  font-size: 18px;

  &:hover {
    background: #96031b;
  }

  @media screen and (max-width: 640px) {
		font-size: 16px;
		padding: .7rem .7rem;
	}
`;

export const Wrap = styled.div`
  align-content: center;
  text-align: center;
  justify-content: center;

  @media screen and (max-width: 640px) {
    text-align: left;
  }
`;

export const Img = styled.img`

  @media screen and (max-width: 640px) {
    width: 90%;
  }
`;