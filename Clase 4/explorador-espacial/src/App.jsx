import React, { useState, useEffect, useMemo } from 'react';
import Planeta from './Planeta';
import './App.css';

function App() {
  const [combustible, setCombustible] = useState(100);
  const [estadoNave, setEstadoNave] = useState("en tierra");
  const [planetasVisitados, setPlanetasVisitados] = useState([]);
  const [imagenSeleccionada, setImagenSeleccionada] = useState(null);

  const [nuevoPlaneta, setNuevoPlaneta] = useState({
    nombre: '',
    descripcion: '',
    imagen: null,
  });

  // Recuperar datos al cargar la app
  useEffect(() => {
    const datosGuardados = localStorage.getItem("bitacoraPlanetas");
    if (datosGuardados) {
      setPlanetasVisitados(JSON.parse(datosGuardados));
    }
  }, []);

  // Guardar cambios automáticamente
  useEffect(() => {
    localStorage.setItem("bitacoraPlanetas", JSON.stringify(planetasVisitados));
  }, [planetasVisitados]);

  useEffect(() => {
    console.log("¡El panel está listo!");
    const intervalo = setInterval(() => {}, 1000);
    return () => {
      clearInterval(intervalo);
      console.log("El panel se ha apagado.");
    };
  }, []);

  useEffect(() => {
    console.log("¡Combustible actualizado!");
  }, [combustible]);

  const mensajeEstado = useMemo(() => {
    console.log("Recalculando mensaje...");
    switch (estadoNave) {
      case "en tierra": return "La nave está lista para despegar 🚀";
      case "en órbita": return "La nave está orbitando la Tierra 🌍";
      case "en misión": return "La nave está en una misión interplanetaria 🪐";
      default: return "Estado desconocido ❓";
    }
  }, [estadoNave]);

  // Manejar cambios en el formulario
  const handleChange = (e) => {
    const { name, value, files } = e.target;
    if (name === "imagen" && files[0]) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setNuevoPlaneta({ ...nuevoPlaneta, imagen: reader.result }); // base64
      };
      reader.readAsDataURL(files[0]);
    } else {
      setNuevoPlaneta({ ...nuevoPlaneta, [name]: value });
    }
  };

  // Manejar envío del formulario
  const handleSubmit = (e) => {
    e.preventDefault();
    if (!nuevoPlaneta.nombre) return;

    setPlanetasVisitados([...planetasVisitados, nuevoPlaneta]);
    setNuevoPlaneta({ nombre: '', descripcion: '', imagen: null });
  };

  return (
    <div style={{ padding: "20px", fontFamily: "Arial" }}>
      <h1>{mensajeEstado}</h1>
      <div style={{ marginBottom: "20px" }}>
        <button onClick={() => setEstadoNave("en tierra")}>En tierra</button>
        <button onClick={() => setEstadoNave("en órbita")}>En órbita</button>
        <button onClick={() => setEstadoNave("en misión")}>En misión</button>
      </div>

      <form onSubmit={handleSubmit} style={{ marginBottom: "20px" }}>
        <h2>Registrar planeta visitado</h2>
        <input
          type="text"
          name="nombre"
          placeholder="Nombre del planeta"
          value={nuevoPlaneta.nombre}
          onChange={handleChange}
          required
        />
        <br />
        <textarea
          name="descripcion"
          placeholder="Descripción"
          value={nuevoPlaneta.descripcion}
          onChange={handleChange}
        />
        <br />
        <input
          type="file"
          name="imagen"
          accept="image/*"
          onChange={handleChange}
        />
        <br />
        <button type="submit">Añadir planeta</button>
      </form>

      {/* Listado de planetas */}
      <div>
        <h2>Planetas visitados</h2>
        <h3>
          {planetasVisitados.length === 0 && <p>No has visitado ningún planeta aún.</p>}
        {planetasVisitados.map((planeta, index) => (
          <Planeta
            key={index}
            {...planeta}
            onNombreClick={() => setImagenSeleccionada(planeta.imagen)}
          />
        ))}
        </h3>
      </div>

      {/* Modal para mostrar imagen */}
      {imagenSeleccionada && (
        <div
          style={{
            position: "fixed",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            background: "rgba(0,0,0,0.8)",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            zIndex: 1000,
          }}
          onClick={() => setImagenSeleccionada(null)}
        >
          <img
            src={imagenSeleccionada}
            alt="Planeta"
            style={{ maxHeight: "80%", maxWidth: "80%" }}
          />
        </div>
      )}
    </div>
  );
}

export default App;
