import { createContext, useState } from "react";

export const CitasContext = createContext();

export function CitasProvider({ children }) {
  const [citas, setCitas] = useState([]); // Inicial vacío
  return (
    <CitasContext.Provider value={{ citas, setCitas }}>
      {children}
    </CitasContext.Provider>
  );
}
