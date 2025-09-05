import { Routes, Route, Link } from "react-router-dom";
import Home from "./pages/Home";
import Citas from "./pages/Citas";
import CitaDetalle from "./pages/CitaDetalle";
import NotFound from "./pages/NotFound";


import "./App.css";
function App() {
  return (
    <p>
      {/* Menú de navegación */}
      <nav>
        <Link to="/">Inicio</Link> |{" "}
        <Link to="/citas">Generar Cita</Link> |{" "}
      </nav>

      {/* Definición de rutas */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/citas" element={<Citas />} />
        <Route path="/cita/:id" element={<CitaDetalle />} />
        
        <Route path="*" element={<NotFound />} />
      </Routes>
    </p>
  );
}

export default App;
