import React, { useState } from "react";
import { postRegister } from "../../services/postRegister";
import { getRegister } from "../../services/getRegister";

function FormRegister() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [success, setSuccess] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (!name || !email || !password) {
      setError('Todos los campos son obligatorios');
      return;
    }

    if (password.length < 6) {
      setError('La contraseña debe tener al menos 6 caracteres');
      return;
    }

    try {
      const users = await getRegister();
      const emailExists = users.some(user => user.email === email);

      if (emailExists) {
        setError('El email ya está registrado');
        return;
      }

      await postRegister(name, email, password);
      setSuccess('Usuario registrado con éxito');
      setError('');
      setName('');
      setEmail('');
      setPassword('');
    } catch (error) {
      setSuccess('');
      setError('Error al registrar usuario');
      console.error('Error al registrar usuario:', error);
    }
  };

  return (
    <div id="div_background">
      <div>
        <div id="login-box">
          <p>Register</p>
          <form onSubmit={handleSubmit}>
            <div id="user-box">
              <input
                required
                type="text"
                name="name"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
              <label>Nombre</label>
            </div>
            <div id="user-box">
              <input
                required
                type="email"
                name="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              <label>Email</label>
            </div>
            <div id="user-box">
              <input
                required
                type="password"
                name="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
              <label>Password</label>
            </div>
            <button type="submit">Registrar</button>
          </form>
          {success && <p className="success-message">{success}</p>}
          {error && <p className="error-message">{error}</p>}
        </div>
      </div>
    </div>
  );
}

export default FormRegister;