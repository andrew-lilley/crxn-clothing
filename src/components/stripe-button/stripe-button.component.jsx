import React from 'react';
import StripeCheckout from 'react-stripe-checkout';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { selectActiveCurrencyLangCode, selectActiveCurrency } from '../../redux/currency/currency.selectors';
import numeral from "numeral";
import 'numeral/locales/en-gb';
import 'numeral/locales/de';

export const StripeCheckoutButton = ({ price, history, langCode, currency }) => {
  
  if (langCode !== 'default') {
    numeral.locale(langCode);
  }
  else {
    numeral.reset();
  }

  const currencyString = {
    '£': 'GBP',
    '$': 'USD',
    '€': 'EUR'
  }

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
      description={`Your total is ${numeral(price).format('$0,0.00')}`}
      amount={priceForStripe}
      currency={currencyString[currency]}
      panelLabel='Pay Now'
      token={onToken}
      stripeKey={publishableKey}
    />
  )
}

const mapStateToProps = createStructuredSelector({
  langCode: selectActiveCurrencyLangCode,
  currency: selectActiveCurrency
});

export default connect(mapStateToProps)(StripeCheckoutButton);