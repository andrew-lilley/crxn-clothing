import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import numeral from "numeral";
import 'numeral/locales/en-gb';
import 'numeral/locales/de';
import { selectActiveCurrencyLangCode } from '../../redux/currency/currency.selectors'

export const Price = ({ price, label, langCode }) => {

  const convertPrice = (price) => {

    // Hard code in an fx rate to demo the currency swap.
    let fx_rate = 0;
    if (langCode === 'en-gb') {
      fx_rate = 0.79;
    }
    else if (langCode === 'de') {
      fx_rate = 0.89;
    }

    if (fx_rate > 0) {
      price = Math.ceil(price * fx_rate);
    }

    return price;
  }

  if (langCode !== 'default') {
    numeral.locale(langCode);
  }
  else {
    numeral.reset();
  }

  return (
    <span className='price'>
      { label && `${label}: `}
      {numeral(convertPrice(price)).format('$0,0.00')}
    </span>
  )
}

const mapStateToProps = createStructuredSelector({
  langCode: selectActiveCurrencyLangCode
});

export default connect(mapStateToProps)(Price);