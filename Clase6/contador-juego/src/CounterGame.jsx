import { useReducer, useRef, useEffect, useCallback } from "react";

const initialState = { count: 0, history: [] };

function reducer(state, action) {
  switch (action.type) {
    case "increment":
      return {
        count: state.count + 1,
        history: [...state.history, state.count] // guardamos el valor actual antes de cambiar
      };
    case "decrement":
      return {
        count: state.count - 1,
        history: [...state.history, state.count]
      };
    case "reset":
      return {
        count: 0,
        history: []
      };
    case "undo":
      if (state.history.length === 0) return state; // nada que deshacer
      const previous = state.history[state.history.length - 1]; // último valor
      return {
        count: previous,
        history: state.history.slice(0, state.history.length - 1) // quitamos el último del historial
      };
    default:
      return state;
  }
}

function CounterGame() {
  const [state, dispatch] = useReducer(reducer, initialState);
  const incrementBtnRef = useRef(null);

  // Fijar el foco en el botón de incremento al renderizar
  useEffect(() => {
    incrementBtnRef.current?.focus();
  }, []);

  // Callbacks optimizados
  const handleIncrement = useCallback(() => {
    dispatch({ type: "increment" });
  }, []);

  const handleDecrement = useCallback(() => {
    dispatch({ type: "decrement" });
  }, []);

  const handleReset = useCallback(() => {
    dispatch({ type: "reset" });
  }, []);

  const handleUndo = useCallback(() => {
    dispatch({ type: "undo" });
  }, []);

  return (
    <header>
      <h2>Contador: {state.count}</h2>
      <button ref={incrementBtnRef} onClick={handleIncrement}>+</button>
      <button onClick={handleDecrement}>-</button>
      <button onClick={handleReset}>Reset</button>

      <button onClick={handleUndo}>Undo</button>
      <p>Historial:</p>
      <ul>
        {state.history.map((h, i) => (
          <li key={i}>{h}</li>
        ))}
      </ul>
    </header>
  );
}

export default CounterGame;
