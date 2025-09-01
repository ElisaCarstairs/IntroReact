import React, { useState } from "react";
import InputNumber from "./InputNumber";
import Message from "./Message";
import RestartButton from "./RestartButton";

function Game() {
  const generarNumeroAleatorio = () => Math.floor(Math.random() * 100) + 1;

  const [numeroSecreto, setNumeroSecreto] = useState(generarNumeroAleatorio());
  const [intento, setIntento] = useState("");
  const [mensaje, setMensaje] = useState("");

  const handleChange = (e) => setIntento(e.target.value);

  const handleAdivinar = () => {
    const num = parseInt(intento);
    if (isNaN(num)) {
      setMensaje("Por favor ingresa un número válido.");
      return;
    }
    if (num === numeroSecreto) setMensaje("Correcto");
    else if (num < numeroSecreto) setMensaje("El número secreto es mayor.");
    else setMensaje("El número secreto es menor.");
  };

  const handleReiniciar = () => {
    setNumeroSecreto(generarNumeroAleatorio());
    setIntento("");
    setMensaje("");
  };

  return (
    <div>
      <h1>Adivina el número</h1>
      <InputNumber value={intento} onChange={handleChange} onGuess={handleAdivinar} />
      <RestartButton onRestart={handleReiniciar} />
      <Message mensaje={mensaje} />
    </div>
  );
}

export default Game;