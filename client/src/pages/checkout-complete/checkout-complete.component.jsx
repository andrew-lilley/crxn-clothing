import React from 'react';
import { CheckoutCompleteContainer, CheckoutCompleteTitle } from './checkout-complete.styles';

const CheckoutCompletePage = () => (
  <CheckoutCompleteContainer>
    <CheckoutCompleteTitle>Order Complete</CheckoutCompleteTitle>
    <p>Your payment has been successful.</p>
    <p>Thank you for placing your order with CRXN Clothing.</p>
  </CheckoutCompleteContainer>
)

export default CheckoutCompletePage;