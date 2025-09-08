import { useState } from "react";
import './newpost.css';

export default function LeftSideBar({ user, login, logout }) {
  const [inputUser, setInputUser] = useState("");
  const [inputPass, setInputPass] = useState("");
  const [isRegister, setIsRegister] = useState(false);

  const handleLogin = () => {
    if (!inputUser.trim() || !inputPass.trim()) return alert("Ingresa usuario y contraseña");

    const users = JSON.parse(localStorage.getItem("users")) || [];
    const match = users.find(u => u.username === inputUser && u.password === inputPass);
    if (!match) return alert("Usuario o contraseña incorrectos");

    login(inputUser);
    setInputUser("");
    setInputPass("");
  };

  const handleRegister = () => {
    if (!inputUser.trim() || !inputPass.trim()) return alert("Ingresa usuario y contraseña");

    const users = JSON.parse(localStorage.getItem("users")) || [];
    if (users.some(u => u.username === inputUser)) return alert("El usuario ya existe");

    users.push({ username: inputUser, password: inputPass });
    localStorage.setItem("users", JSON.stringify(users));

    alert("Registro exitoso");
    login(inputUser); // auto-login
    setInputUser("");
    setInputPass("");
    setIsRegister(false);
  };

  return (
    <div className="left-sidebar">
      {user ? (
        <div className="sidebar-user">
          <img
            src={`https://api.dicebear.com/7.x/micah/svg?seed=${user.username}`}
            alt="avatar"
            className="avatar"
          />
          <p>@{user.username}</p>
          <button onClick={logout}>Cerrar sesión</button>
        </div>
      ) : (
        <div className="login-block">
          <h3>{isRegister ? "Registro" : "Login"}</h3>
          <input
            type="text"
            placeholder="Usuario"
            value={inputUser}
            onChange={(e) => setInputUser(e.target.value)}
          />
          <input
            type="password"
            placeholder="Contraseña"
            value={inputPass}
            onChange={(e) => setInputPass(e.target.value)}
          />
          <button onClick={isRegister ? handleRegister : handleLogin}>
            {isRegister ? "Registrarse" : "Iniciar sesión"}
          </button>
          <small
            style={{ cursor: "pointer", color: "#1da1f2", marginTop: "8px" }}
            onClick={() => setIsRegister(!isRegister)}
          >
            {isRegister ? "¿Ya tienes cuenta? Inicia sesión" : "¿No tienes cuenta? Regístrate"}
          </small>
        </div>
      )}

      <nav className="sidebar-menu">
        <ul>
          <li>Inicio</li>
          <li>Buscar</li>
          <li>Perfil</li>
        </ul>
      </nav>
    </div>
  );
}