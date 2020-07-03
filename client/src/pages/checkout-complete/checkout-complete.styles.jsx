import styled from 'styled-components';

export const CheckoutCompleteContainer = styled.div`
  width: 55%;
  min-height: 90vh;
  display: flex;
  flex-direction: column;
  align-items: left;
  margin: 50px auto 0;

  @media screen and (max-width: 800px) {
    width: 85vw;
  }
`;

export const CheckoutCompleteTitle = styled.h2`
  margin: 10px 0;
`;