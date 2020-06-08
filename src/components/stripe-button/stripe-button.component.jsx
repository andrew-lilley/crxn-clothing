import React from 'react';
import StripeCheckout from 'react-stripe-checkout';

const StripeCheckoutButton = ({ price, history }) => {
  // Price needs to be in cents, pence.
  const priceForStripe = price * 100;
  const publishableKey = process.env.REACT_APP_STRIPE_PUBLISHABLE_KEY;

  const onToken = token => {
    //console.log(token);
    history.push('/checkout-complete');
  }

  return (
    <StripeCheckout 
      label='Pay Now'
      name='CRWN Clothing'
      billingAddress
      shippingAddress
      zipCode
      //image='https://sendeyo.com/up/d/f3eb2117da'
      image='/images/stripe/crown.svg'
      description={`Your total is ${price}`}
      amount={priceForStripe}
      currency="USD"
      panelLabel='Pay Now'
      token={onToken}
      stripeKey={publishableKey}
    />
  )
}

export default StripeCheckoutButton;