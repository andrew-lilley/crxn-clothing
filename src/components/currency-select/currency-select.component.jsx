import React from 'react';
import Select from 'react-select';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { selectActiveCurrencyLangCode, selectActiveCurrency } from '../../redux/currency/currency.selectors';
import { setCurrency, setCurrencyLangCode } from '../../redux/currency/currency.actions';
import './currency-select.styles.scss';

const CurrencySelector = ({ currency, dispatch }) => {

  const options = [
    { value: 'default', label: '$' },
    { value: 'en-gb', label: '£' },
    { value: 'de', label: '€' },
  ];

  return (
    <div className='currency-selector'>
      <Select 
        options={options} 
        value={{ label: currency }}
        placeholder=''
        onChange={(e) => {
          dispatch(setCurrency(e.label));
          dispatch(setCurrencyLangCode(e.value));
        }}
      />
    </div>
  )
}

const mapStateToProps = createStructuredSelector({
  langCode: selectActiveCurrencyLangCode,
  currency: selectActiveCurrency
});

export default connect(mapStateToProps)(CurrencySelector);