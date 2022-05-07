import React from 'react';
import '../../style/Field.scss'

export const Field = ({ name, type, label, placeholder, value, errorMessage, onInputChange }) => {
  return (
    <label className='label'>
      {label}
      {errorMessage ? <span className='error'>{errorMessage}</span> : null}
      <input
        name={name}
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={onInputChange}
      />
    </label>
  );
}