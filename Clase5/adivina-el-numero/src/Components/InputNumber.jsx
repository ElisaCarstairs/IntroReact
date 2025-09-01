// InputNumber.jsx
import React from "react";

function InputNumber({ value, onChange, onGuess }) {
  return (
    <div>
      <input
        type="number"
        value={value}
        onChange={onChange}
        min="1"
        max="100"
        placeholder="Escribe un número..."
      />
      <button onClick={onGuess}>
        Adivinar
      </button>
    </div>
  );
}

export default InputNumber;
