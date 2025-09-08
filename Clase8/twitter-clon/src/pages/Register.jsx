import { useState } from "react";
import './register.css';

export default function Register({ onRegister }) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleRegister = (e) => {
    e.preventDefault();
    if (!username.trim() || !password.trim()) {
      return alert("Ingresa usuario y contraseña");
    }

    // Guardar usuario y contraseña en localStorage
    const users = JSON.parse(localStorage.getItem("users")) || [];
    if (users.some(u => u.username === username)) {
      return alert("El usuario ya existe");
    }

    users.push({ username, password });
    localStorage.setItem("users", JSON.stringify(users));

    alert("Usuario registrado exitosamente");
    setUsername("");
    setPassword("");

    if (onRegister) onRegister(username); // opcional: auto-login
  };

  return (
    <div className="register-container">
      <h2>Registro</h2>
      <form onSubmit={handleRegister} className="register-form">
        <input
          type="text"
          placeholder="Usuario"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <input
          type="password"
          placeholder="Contraseña"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button type="submit">Registrarse</button>
      </form>
    </div>
  );
}
