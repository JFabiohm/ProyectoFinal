import React, { useState } from 'react';
import {getLogin} from "../../services/getLogin";
import "../styles/Login.css";

function FormLogin() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (!email || !password) {
      setError('Todos los campos son obligatorios');
      return;
    }

    try {
      const response = await getLogin(email, password);
      setSuccess('Inicio de sesión exitoso');
      setError('');
      console.log('Usuario autenticado:', response);
    } catch (error) {
      setSuccess('');
      setError('Credenciales inválidas');
    }
  };

  return (
    <div id="body">
      <div id="login-box">
        <p>Login</p>
        <form onSubmit={handleSubmit}>
          <div id="user-box">
            <input
              required
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <label>Email</label>
          </div>
          <div id="user-box">
            <input
              required
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <label>Password</label>
          </div>
          <button type="submit">Entrar</button>
        </form>
        {success && <p className="success-message">{success}</p>}
        {error && <p className="error-message">{error}</p>}
        <p>
          Don't have an account?
          <a href="/register">Sign up!</a>
        </p>
      </div>
    </div>
  );
}

export default FormLogin;
