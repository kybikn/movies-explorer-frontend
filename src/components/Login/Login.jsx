import React from 'react'
import { useEffect } from 'react';

import AuthForm from '../AuthForm/AuthForm';
import useFormAndValidation from '../../hooks/useFormAndValidation';

function Login({ onLogin }) {
  const { values, errors, isValid, setValues, handleChange, resetForm } = useFormAndValidation();

  useEffect(() => {
    document.title = "Movies - войти";
  }, []);

  useEffect(() => {
    resetForm();
  }, [resetForm]);

  const handleSubmit = (e) => {
    e.preventDefault();
    onLogin({
      email: values['email'],
      password: values['password']
    });
    resetForm();
  }
  return (
    <AuthForm
      formName='signin'
      title='Рады видеть!'
      btnText='Войти'
      text='Ещё не зарегистрированы?'
      link='Регистрация'
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

export default Login