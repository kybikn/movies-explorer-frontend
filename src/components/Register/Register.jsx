import React from 'react'
import { useEffect } from 'react';

import AuthForm from '../AuthForm/AuthForm';
import useFormAndValidation from '../../hooks/useFormAndValidation';

function Register({ onRegister }) {
  const { values, errors, isValid, setValues, handleChange, resetForm } = useFormAndValidation();

  useEffect(() => {
    resetForm();
  }, [resetForm]);


  const handleSubmit = (e) => {
    e.preventDefault();
    onRegister({
      name: values['name'],
      email: values['email'],
      password: values['password']
    });
    resetForm();
  }

  return (
    <AuthForm
      formName='signup'
      title='Добро пожаловать!'
      btnText='Зарегистрироваться'
      text='Уже зарегистрированы?'
      link='Войти'
      values={values}
      errors={errors}
      isValid={isValid}
      setValues={setValues}
      onChange={handleChange}
      onSubmit={handleSubmit}
    >
    </AuthForm>
  )
}

export default Register


