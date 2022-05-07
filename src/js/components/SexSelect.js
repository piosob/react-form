import React from 'react';
import '../../style/SexSelect.scss'
import '../../style/Field.scss'

export const SexSelect = ({ name, label, value, errorMessage, onInputChange }) => {
  return (
    <label className='label' >
      Choose a gender:
      {errorMessage ? <span className='error'>{errorMessage}</span> : null}
      <select
        className=''
        name={name}
        value={value}
        onChange={onInputChange}
      >

        <option value="female">Female</option>
        <option value="male">Male</option>
      </select>
    </label>
  );
}
