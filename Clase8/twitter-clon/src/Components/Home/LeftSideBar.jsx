import { useState } from "react";
import "./newpost.css";

export default function LeftSideBar({ user, login, logout }) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState(""); // Para login ficticio

  const handleLogin = () => {
    if (!username.trim() || !password.trim()) return;
    login(username);
    setUsername("");
    setPassword("");
  };

  return (
    <div className="left-sidebar">
      {user ? (
        <div className="sidebar-user">
          <img
            src={`https://api.dicebear.com/7.x/avataaars/svg?seed=${user.username}`}
            alt="avatar"
            className="avatar"
          />
          <p>@{user.username}</p>
          <button onClick={logout}>Cerrar sesión</button>
        </div>
      ) : (
        <div className="login-block">
          <input
            type="text"
            placeholder="Usuario"
            value={username}
            onChange={e => setUsername(e.target.value)}
          />
          <input
            type="password"
            placeholder="Contraseña"
            value={password}
            onChange={e => setPassword(e.target.value)}
          />
          <button onClick={handleLogin}>Iniciar sesión</button>
        </div>
      )}

      <nav className="sidebar-menu">
        <ul>
          <li>Inicio</li>
          <li>Buscar</li>
          <li>Perfil</li>
        </ul>
      </nav>

      {/* Footer con términos y derechos reservados */}
      <div className="sidebar-footer">
        <a
          href="https://twitter.com/en/tos"
          target="_blank"
          rel="noopener noreferrer"
        >
          Términos y condiciones
        </a>
        <p>© 2025 Creado por Erika Marina</p>
      </div>
    </div>
  );
}
