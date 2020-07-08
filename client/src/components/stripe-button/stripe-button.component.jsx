import React from 'react';
import StripeCheckout from 'react-stripe-checkout';
import axios from 'axios';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { selectActiveCurrencyLangCode, selectActiveCurrency } from '../../redux/currency/currency.selectors';
import { clearCart } from '../../redux/cart/cart.actions';
import numeral from "numeral";
import 'numeral/locales/en-gb';
import 'numeral/locales/de';

export const StripeCheckoutButton = ({ price, history, langCode, currency, clearCart }) => {

  if (langCode !== 'default') {
    numeral.locale(langCode);
  }
  else {
    numeral.reset();
  }

  const currencyStrings = {
    '£': 'GBP',
    '$': 'USD',
    '€': 'EUR'
  }

  // Price needs to be in cents, pence.
  const priceForStripe = price * 100;
  const currencyString = currencyStrings[currency];
  const publishableKey = process.env.REACT_APP_STRIPE_PUBLISHABLE_KEY;
  const payment_url = (process.env.REACT_APP_STRIPE_PAYMENT_URL) ? process.env.REACT_APP_STRIPE_PAYMENT_URL : 'payment';

  const onToken = token => {
    axios({
      url: payment_url,
      method: 'post',
      data: {
        amount: priceForStripe,
        token: token,
        currency: currencyString
      }
    })
    .then(response => {
      clearCart();
      history.push('/checkout-complete');
    })
    .catch(error => {
      console.log('Payment Error: ', error);
      alert(
        'There was an issue with your payment! Please check the details on your card and try again.'
      );
    });
  };

  return (
    <StripeCheckout 
      label='Pay Now'
      name='CRWN Clothing'
      billingAddress
      shippingAddress
      zipCode
      image={`${process.env.PUBLIC_URL}/images/stripe/crown.svg`}
      description={`Your total is ${numeral(price).format('$0,0.00')}`}
      amount={priceForStripe}
      currency={currencyString}
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

const mapDispatchToProps = dispatch => ({
  clearCart: () => dispatch(clearCart())
});

export default connect(mapStateToProps, mapDispatchToProps)(StripeCheckoutButton);