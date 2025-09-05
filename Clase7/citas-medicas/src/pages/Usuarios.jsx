import { Link } from "react-router-dom";

function Usuarios() {
  const usuarios = [
    { id: 1, nombre: "Ana Gómez" },
    { id: 2, nombre: "Luis Torres" },
    { id: 3, nombre: "Sofía Méndez" },
  ];

  return (
    <div>
      <h1>Lista de Usuarios</h1>
      <ul>
        {usuarios.map((user) => (
          <li key={user.id}>
            <Link to={`/usuario/${user.id}`}>
              Usuario {user.id} - {user.nombre}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
export default Usuarios;
