import React from 'react';
import { connect } from 'react-redux';
import { emptyCart } from '../../redux/cart/cart.actions';

import './checkout-complete.styles.scss';

const CheckoutCompletePage = ({ emptyCart }) => (
  <div className='checkout-complete' onLoad={() => emptyCart()}>
    <h1 className='title'>Order Complete</h1>
    <p>Your payment has been successful.</p>
    <p>Thank you for placing your order with CRXN Clothing.</p>
  </div>
)

const mapDispatchToProps = dispatch => ({
  emptyCart: dispatch(emptyCart())
});

export default connect(null, mapDispatchToProps)(CheckoutCompletePage);