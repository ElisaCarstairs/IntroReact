import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "./App";
import { CitasProvider } from "./CitasContext";

ReactDOM.createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <CitasProvider>
      <App />
    </CitasProvider>
  </BrowserRouter>
);
