import styled from 'styled-components';

export const SignUpContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 380px;

  @media screen and (max-width: 800px) {
    width: 90vw;
    justify-content: center;
  }
`;

export const SignUpTitle = styled.h2`
  margin: 10px 0;
`;

export const ButtonsBarContainer = styled.div`
  display: flex;
  justify-content: space-between;

  @media screen and (max-width: 800px) {
    flex-direction: column;
    justify-content: center;
  }

  button {
    @media screen and (max-width: 800px) {
      margin: 0 0 10px 0;
    }
  }
`;