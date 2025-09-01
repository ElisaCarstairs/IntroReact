// RestartButton.jsx
import React from "react";

function RestartButton({ onRestart }) {
  return (
    <button onClick={onRestart}>
      Reiniciar
    </button>
  );
}

export default RestartButton;
