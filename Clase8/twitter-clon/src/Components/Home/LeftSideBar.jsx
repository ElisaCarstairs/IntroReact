export default function LeftSideBar({ user, logout }) {
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
        <p>No has iniciado sesión</p>
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
