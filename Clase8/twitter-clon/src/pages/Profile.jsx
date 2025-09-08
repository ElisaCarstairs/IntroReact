// src/pages/Profile.js
const Profile = ({ user }) => {
  return (
    <div>
      <h1>Perfil</h1>
      {user ? (
        <>
          <p>Nombre de usuario: @{user.username}</p>
          <p>Publicaciones, seguidores, etc. (a futuro)</p>
        </>
      ) : (
        <p>No has iniciado sesión</p>
      )}
    </div>
  );
};

export default Profile;
