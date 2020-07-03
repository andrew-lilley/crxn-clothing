import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { selectCartItems, selectCartTotal } from '../../redux/cart/cart.selectors';
import CheckoutItem from '../../components/checkout-item/checkout-item.component';
import Price from '../../components/price/price.component';
import StripeCheckoutButton from '../../components/stripe-button/stripe-button.component';
import {
  CheckoutPageContainer,
  CheckoutHeaderContainer,
  HeaderBlockContainer,
  TotalContainer,
  WarningContainer
} from './checkout.styles';

export const CheckoutPage = ({ cartItems, cartTotal, history }) => {

  // Get next year.
  const validTestCardYear = (new Date().getFullYear() + 1).toString().substr(-2);

  return (
    <CheckoutPageContainer>
      <CheckoutHeaderContainer>
        <HeaderBlockContainer>
          <span>Product</span>
        </HeaderBlockContainer>
        <HeaderBlockContainer>
          <span>Description</span>
        </HeaderBlockContainer>
        <HeaderBlockContainer>
          <span>Quantity</span>
        </HeaderBlockContainer>
        <HeaderBlockContainer>
          <span>Price</span>
        </HeaderBlockContainer>
        <HeaderBlockContainer>
          <span>Remove</span>
        </HeaderBlockContainer>
      </CheckoutHeaderContainer>
      {
        cartItems.map(cartItem => 
          <CheckoutItem key={cartItem.id} cartItem={cartItem} />
        )
      }
      <TotalContainer>
        <Price price={cartTotal} label='TOTAL' />
      </TotalContainer>
      <WarningContainer>
        <p>This is a demo website. Please only use one the following test credit card details:</p>
        <ul>
          <li>{`Successful payments: 4242 4242 424 24242, Exp: 01/${validTestCardYear}, CVV: 123`}</li>
          <li>{`3D secure payments: 4000 0025 0000 3155, Exp: 01/${validTestCardYear}, CVV: 123`}</li>
          <li>{`Declined payments: 4000 0000 0000 9995, Exp: 01/${validTestCardYear}, CVV: 123`}</li>
        </ul>
      </WarningContainer>
      <StripeCheckoutButton price={cartTotal} history={history} />
    </CheckoutPageContainer>
    )
  }

const mapStateToProps = createStructuredSelector({
  cartItems: selectCartItems,
  cartTotal: selectCartTotal
});

export default connect(mapStateToProps)(CheckoutPage);