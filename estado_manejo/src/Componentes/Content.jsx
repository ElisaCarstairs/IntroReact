import { useState } from "react";



function ListaCompras() {
  // Definir el estado para la lista de compras
  const [productos, setProductos] = useState([]);
  const [nuevoProducto, setNuevoProducto] = useState("");
  const [mensaje, setMensaje] = useState("");

  // Función para agregar un nuevo producto a la lista
  const agregarProducto = () => {
  const nombre = nuevoProducto.trim();

  if (nombre === "") {
    setMensaje("El producto no puede estar vacío");
    return;
  }

  if (productos.some(p => p.toLowerCase() === nombre.toLowerCase())) {
    setMensaje("Este producto ya está en la lista");
    return;
  }

  setProductos([...productos, nombre]);
  setNuevoProducto("");
  setMensaje(""); // Limpiar el mensaje si todo salió bien
};


  // Función para eliminar un producto de la lista
  const eliminarProducto = (index) => {
    const productosActualizados = productos.filter((_, i) => i !== index);
    setProductos(productosActualizados);
  };

  return (
    <div>
      <div>
        <input
        type="text"
        value={nuevoProducto}
        onChange={(e) => setNuevoProducto(e.target.value)}
      />
      <br/>
      <br/>
      <button onClick={agregarProducto}>Agregar producto a la lista</button>
      </div>
      <h3>{mensaje && <p style={{ color: "red" }}>{mensaje}</p>}</h3>
      

      <ul>
        {productos.map((producto, index) => (
          <li key={index}>
            {producto}
            <button onClick={() => eliminarProducto(index)}>Eliminar</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ListaCompras;