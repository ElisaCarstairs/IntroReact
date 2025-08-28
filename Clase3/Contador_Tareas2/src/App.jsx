import React, { useState, useEffect, useMemo } from 'react';
import './App.css';


function App() {
  const [tareas, setTareas] = useState([]);
  const [nuevaTarea, setNuevaTarea] = useState('');
  const [duracion, setDuracion] = useState('');
  const [filtro, setFiltro] = useState(""); // estado para el filtro
  const [orden, setOrden] = useState(""); // "" = sin orden, "alfabetico" = orden A-Z
  const [tardado, setTardado] = useState(""); // "" = sin orden, "alfabetico" = orden A-Z


  useEffect(() => {
  const tareasGuardadas = localStorage.getItem("misTareas");
  if (tareasGuardadas) {
    setTareas(JSON.parse(tareasGuardadas));
  }
}, []);




  // Cálculo de tiempo total optimizado con useMemo
  const calcularTiempoTotal = useMemo(() => {
    console.log("Calculando tiempo total...");
    return tareas.reduce((total, tarea) => total + tarea.duracion, 0);
  }, [tareas]); // Solo se recalcula cuando cambian las tareas

  // Efecto secundario: Actualizar el título del documento cada vez que cambia el total
  useEffect(() => {
    document.title = `Total: ${calcularTiempoTotal} minutos`;
  }, [calcularTiempoTotal]);  // Dependencia correcta

const tareasFiltradasYOrdenadas = useMemo(() => {
  // 1️⃣ Aplicar el filtro primero
  let lista = tareas;
  if (filtro === "corta") {
    lista = tareas.filter(t => t.duracion <= 30);
  } else if (filtro === "larga") {
    lista = tareas.filter(t => t.duracion > 30);
  } else if (filtro === "reciente") {
    lista = [...tareas].reverse();
  }

  // 2️⃣ Aplicar el orden
  if (orden === "alfabetico") {
    return [...lista].sort((a, b) => a.nombre.localeCompare(b.nombre));
  }

  if (tardado === "Tardado") {
  return [...lista].sort((a, b) => a.duracion - b.duracion);
}


  return lista; // sin orden
}, [tareas, filtro, orden]);




const tareasFiltradas = useMemo(() => {
  if (filtro === "corta") {
    return tareas.filter(t => t.duracion <= 30);
  } else if (filtro === "larga") {
    return tareas.filter(t => t.duracion > 30);
  } else if (filtro === "reciente") {
    return [...tareas].reverse(); // muestra últimas agregadas primero
  }
  return tareas; // sin filtro
}, [tareas, filtro]);




  const agregarTarea = () => {
    if (nuevaTarea && duracion) {
      const nuevaTareaObj = {
        nombre: nuevaTarea,
        duracion: parseInt(duracion)
      };
      setTareas([...tareas, nuevaTareaObj]);
      setNuevaTarea('');
      setDuracion('');
    }
  };

  return (
    <div>
      <h1>Contador de Tareas</h1>
      <div>
        <input 
          type="text" 
          value={nuevaTarea} 
          onChange={(e) => setNuevaTarea(e.target.value)} 
          placeholder="Nombre de la tarea" 
        />
        <input 
          type="number" 
          value={duracion} 
          onChange={(e) => setDuracion(e.target.value)} 
          placeholder="Duración en minutos" 
        />
        <button onClick={agregarTarea}>Agregar tarea</button>
      </div>

      <h2>Tareas</h2>

      <div>
        <button onClick={() => setFiltro("")}>Todas</button>
        <button onClick={() => setFiltro("corta")}>≤ 30 min</button>
        <button onClick={() => setFiltro("larga")}>{"> 30 min"}</button>
        <button onClick={() => setFiltro("reciente")}>Recientes</button>
        <div>
          <button onClick={() => setOrden("alfabetico")}>Ordenar A-Z</button>
          <button onClick={() => setOrden("Tardado")}>Ordenar por duración</button>
          <button onClick={() => setOrden("")}>Quitar orden</button>
        </div>

      </div>

      <ul>
          {tareasFiltradasYOrdenadas.map((tarea, index) => (
            <li key={index}>{tarea.nombre}: {tarea.duracion} min</li>
            ))}

      </ul>


      <h3>Total de tiempo: {calcularTiempoTotal} minutos</h3>
    </div>
  );
}

export default App;
