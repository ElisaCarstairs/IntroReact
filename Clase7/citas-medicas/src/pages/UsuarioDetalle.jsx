import { useParams } from "react-router-dom";

function UsuarioDetalle() {
  const { id } = useParams();

  return (
    <div>
      <h1>Detalle del Usuario</h1>
      <p>ID del usuario: {id}</p>
      <p>Aquí podrías mostrar la información completa del usuario {id}.</p>
    </div>
  );
}
export default UsuarioDetalle;
