import React from 'react';

import './form-input.styles.scss';

const FormInput = ({ handleChange, label, error, ...otherProps }) => (
  <div className={`group ${error ? ' error' : ''}`}>
    <input className='form-input' onChange={handleChange} {...otherProps} />
    {label && <label className={`form-input-label ${otherProps.value.length ? 'shrink' : ''}`}>{label}</label>}
  </div>
)

export default FormInput;