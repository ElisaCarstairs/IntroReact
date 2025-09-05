import { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { CitasContext } from "../CitasContext";

function Citas() {
  const { citas, setCitas } = useContext(CitasContext);
  const [nombre, setNombre] = useState("");
  const [dia, setDia] = useState("");
  const [hora, setHora] = useState("");

  const agregarCita = (e) => {
    e.preventDefault();
    if (!nombre || !dia || !hora) return;

    setCitas([...citas, { id: citas.length + 1, paciente: nombre, dia, hora }]);
    setNombre("");
    setDia("");
    setHora("");
  };

  return (
    <div>
      <p>
        
      <h1>Lista de Citas</h1>
      <form onSubmit={agregarCita}>
        <input placeholder="Nombre" value={nombre} onChange={e => setNombre(e.target.value)} />
        
        <input type="date" value={dia} onChange={e => setDia(e.target.value)} />
        
        <input type="time" value={hora} onChange={e => setHora(e.target.value)} />
        <button type="submit">Crear cita</button>
      </form>
      
      </p> 

        <p>
        <h2>Citas programadas</h2>
        <ul>
        {citas.map(cita => (
          <li key={cita.id}>
            <Link to={`/cita/${cita.id}`}>{cita.dia} {cita.hora} - {cita.paciente}</Link>
          </li>
        ))}
      </ul>
        </p>
      
    </div>
  );
}

export default Citas;
