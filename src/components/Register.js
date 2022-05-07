import React, { useEffect, useState } from 'react';
import { Field } from './Field';
import { SexSelect } from './SexSelect';
import '../style/Register.scss'

export const Register = () => {
  const [values, setValues] = useState({
    nameSurname: '',
    email: '',
    password: '',
    password2: '',
    sex: '',
    adress: '',
    postCode: '',
  })

  const [errorMessage, setErrorMessage] = useState({
    nameSurname: '',
    email: '',
    password: '',
    password2: '',
    sex: '',
    adress: '',
    postCode: '',
  })

  function handleInputChange(event) {
    const { name, value } = event.target
    setValues(prevValues => ({
      ...prevValues,
      [name]: value,
    }))
  }

  function handleSubmit(event) {
    event.preventDefault();
  }



  return (
    <form
      className='form'
      onSubmit={handleSubmit}
      noValidate
    >
      <h2>Personal Data:</h2>
      <Field
        name='nameSurname'
        type='text'
        label='Name and surname:'
        placeholder='Enter name and surname'
        value={values.nameSurname}
        errorMessage={errorMessage?.nameSurname}
        onInputChange={handleInputChange}
      />
      <Field
        name='email'
        type='email'
        label='E-mail:'
        placeholder='Enter e-mail'
        value={values.email}
        errorMessage={errorMessage?.email}
        onInputChange={handleInputChange}
      />
      <Field
        name='password'
        type='password'
        label='Password:'
        placeholder='Enter password'
        value={values.password}
        errorMessage={errorMessage?.password}
        onInputChange={handleInputChange}
      />
      <Field
        name='password2'
        type='password'
        label='Repeat password:'
        placeholder='Repeat password'
        value={values.password2}
        errorMessage={errorMessage?.password2}
        onInputChange={handleInputChange}
      />
      <SexSelect
        label='Select your sex:'
        value={values.sex}
        onInputChange={handleInputChange}

      />
      <h2>Shipping information</h2>
      <Field
        name='adress'
        type='text'
        label='Adress:'
        placeholder='Enter adress'
        value={values.adress}
        errorMessage={errorMessage?.adress}
        onInputChange={handleInputChange}
      />
      <Field
        name='postCode'
        type='text'
        label='Post code:'
        placeholder='Enter post-code'
        value={values.postCode}
        errorMessage={errorMessage?.postCode}
        onInputChange={handleInputChange}
      />
      <Field
        name='city'
        type='text'
        label='City:'
        placeholder='Enter city name'
        value={values.city}
        errorMessage={errorMessage?.city}
        onInputChange={handleInputChange}
      />
      <input
        type="submit"
        value="Send!"
      />

    </form>
  );
}
