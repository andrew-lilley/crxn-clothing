import React from 'react';
import { connect } from 'react-redux';
import { emptyCart } from '../../redux/cart/cart.actions';
import { CheckoutCompleteContainer, CheckoutCompleteTitle } from './checkout-complete.styles';

const CheckoutCompletePage = ({ emptyCart }) => (
  <CheckoutCompleteContainer onLoad={() => emptyCart()}>
    <CheckoutCompleteTitle>Order Complete</CheckoutCompleteTitle>
    <p>Your payment has been successful.</p>
    <p>Thank you for placing your order with CRXN Clothing.</p>
  </CheckoutCompleteContainer>
)

const mapDispatchToProps = dispatch => ({
  emptyCart: dispatch(emptyCart())
});

export default connect(null, mapDispatchToProps)(CheckoutCompletePage);