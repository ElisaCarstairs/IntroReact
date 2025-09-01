function Planeta({ nombre, descripcion, onNombreClick }) {
  return (
    <div style={{ border: "1px solid #ccc", margin: "10px 0", padding: "10px" }}>
      <h3
        style={{ cursor: "pointer", textDecoration: "underline", color: "blue" }}
        onClick={onNombreClick}
      >
        {nombre}
      </h3>
      {descripcion && <p>{descripcion}</p>}
    </div>
  );
}

export default Planeta;