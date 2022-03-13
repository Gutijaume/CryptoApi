import React from "react";
import useForm from "./useForm";
import validateInfo from "./validateInfo";
import './styles.css'

export default function SignForm({submitForm}) {
  const {handleChange, values, handleSubmit, errors} = useForm(submitForm, validateInfo) //Usamos el customHook paraa exportarnos la función de cada input del botón de submit, los errores de validación así como los nuevos valores. Recibirá como props las validaciones.


  return (
    <div className='form-content-right'>
    <form onSubmit={handleSubmit} className='form' noValidate>
      <h1>
        Regístrate y accede al contenido VIP
      </h1>
      <div className='form-inputs'>
        <label className='form-label'>Nombre de usuario</label>
        <input
          className='form-input'
          type='text'
          name='username'
          placeholder='Enter your username'
          value={values.username}
          onChange={handleChange}
        />
        {errors.username && <p>{errors.username}</p>}
      </div>
      <div className='form-inputs'>
        <label className='form-label'>Email</label>
        <input
          className='form-input'
          type='email'
          name='email'
          placeholder='Enter your email'
          value={values.email}
          onChange={handleChange}
        />
        {errors.email && <p>{errors.email}</p>}
      </div>
      <div className='form-inputs'>
        <label className='form-label'>Password</label>
        <input
          className='form-input'
          type='password'
          name='password'
          placeholder='Enter your password'
          value={values.password}
          onChange={handleChange}
        />
        {errors.password && <p>{errors.password}</p>}
      </div>
      <div className='form-inputs'>
        <label className='form-label'>Confirma tu password</label>
        <input
          className='form-input'
          type='password'
          name='passwordConf'
          placeholder='Confirm your password'
          value={values.passwordConf}
          onChange={handleChange}
        />
        {errors.passwordConf && <p>{errors.passwordConf}</p>}
      </div>
      <button className='form-input-btn' type='submit'>
        Sign up
      </button>
      <span className='form-input-login'>
        ¿Ya dispones de una cuenta? <a href='#'>Login here</a>
      </span>
    </form>
  </div>
);
}
