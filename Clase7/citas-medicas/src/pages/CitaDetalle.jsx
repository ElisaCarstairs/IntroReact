import { useParams } from "react-router-dom";
import { useContext } from "react";
import { CitasContext } from "../CitasContext";

function CitaDetalle() {
  const { id } = useParams();
  const { citas } = useContext(CitasContext);

  const cita = citas.find(c => c.id === parseInt(id));
  if (!cita) return <h1>Cita no encontrada</h1>;

  return (
    <p>
      <h1>Detalles de la Cita</h1>
      <p>Nombre: {cita.paciente}</p>
      <p>Fecha: {cita.dia}</p>
      <p>Hora: {cita.hora}</p>
    </p>
  );
}

export default CitaDetalle;
