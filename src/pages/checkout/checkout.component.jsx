import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { selectCartItems, selectCartTotal } from '../../redux/cart/cart.selectors';
import CheckoutItem from '../../components/checkout-item/checkout-item.component';
import StripeCheckoutButton from '../../components/stripe-button/stripe-button.component';

import './checkout.styles.scss';

export const CheckoutPage = ({ cartItems, cartTotal, history }) => {

  // Get next year.
  const validTestCardYear = (new Date().getFullYear() + 1).toString().substr(-2);

  return (
    <div className='checkout-page'>
      <div className='checkout-header'>
        <div className='header-block'>
          <span>Product</span>
        </div>
        <div className='header-block'>
          <span>Description</span>
        </div>
        <div className='header-block'>
          <span>Quantity</span>
        </div>
        <div className='header-block'>
          <span>Price</span>
        </div>
        <div className='header-block'>
          <span>Remove</span>
        </div>
      </div>
      {
        cartItems.map(cartItem => 
          <CheckoutItem key={cartItem.id} cartItem={cartItem} />
        )
      }
      <div className='total'>
        <span>TOTAL: {cartTotal}</span>
      </div>
      <div className='test-warning'>
        <p>This is a demo website. Please only use one the following test credit card details:</p>
        <ul>
          <li>{`Successful payments: 4242 4242 424 24242, Exp: 01/${validTestCardYear}, CVV: 123`}</li>
          <li>{`3D secure payments: 4000 0025 0000 3155, Exp: 01/${validTestCardYear}, CVV: 123`}</li>
          <li>{`Declined payments: 4000 0000 0000 9995, Exp: 01/${validTestCardYear}, CVV: 123`}</li>
        </ul>
      </div>
      <StripeCheckoutButton price={cartTotal} history={history} />
    </div>
    )
  }

const mapStateToProps = createStructuredSelector({
  cartItems: selectCartItems,
  cartTotal: selectCartTotal
});

export default connect(mapStateToProps)(CheckoutPage);