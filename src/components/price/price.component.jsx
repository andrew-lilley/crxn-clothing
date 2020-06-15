import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import numeral from "numeral";
import 'numeral/locales/en-gb';
import 'numeral/locales/de';
import { selectActiveCurrencyLangCode } from '../../redux/currency/currency.selectors'

export const Price = ({ price, label, langCode }) => {

  if (langCode !== 'default') {
    numeral.locale(langCode);
  }
  else {
    numeral.reset();
  }

  return (
    <span className='price'>
      { label && `${label}: `}
      {numeral(price).format('$0,0.00')}
    </span>
  )
}

const mapStateToProps = createStructuredSelector({
  langCode: selectActiveCurrencyLangCode
});

export default connect(mapStateToProps)(Price);