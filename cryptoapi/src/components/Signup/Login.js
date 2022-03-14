import React, { useState } from "react";
import './styles.css'

export default function Login() {
  
  const [isLogin, setIsLogin] = useState (false)
  const [values, setValues] = useState({
    username: '',
    password: ''
  })

  const handleChange = (e) =>{ //Función HChange que nos iguala name y value a partir del objeto que escribimos en el input
    const {name, value} = e.target
      setValues({
        ...values,
        [name] : value
      })
  }

  const handleSubmit = (e) => {
    e.preventDefault() //Evitamos procesamiento automático
    setIsLogin(true)

  }

  return (
    <div className="form-content-right">
      <form onSubmit={handleSubmit} className="form" noValidate>
        <h1>Haz login y empieza a disfrutar de tus privilegios</h1>
        <div className="form-inputs">
          <label className="form-label">Nombre de usuario</label>
          <input
            className="form-input"
            type="text"
            name="username"
            placeholder="Enter your username"
            value={values.username}
            onChange={handleChange}
          />
        </div>
        <div className="form-inputs">
          <label className="form-label">Password</label>
          <input
            className="form-input"
            type="password"
            name="password"
            placeholder="Enter your password"
            value={values.password}
            onChange={handleChange}
          />
        </div>
        <button className="form-input-btn" type="submit">
          Login
        </button>
      </form>
    </div>
  );
}
