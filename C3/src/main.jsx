import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "./App";
import "./index.css";
import { AuthContextProvider } from "./Context/AuthContext";
import { StacticsContextProvider } from "./Context/Statics";
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <AuthContextProvider>
        <StacticsContextProvider>
          <App />
        </StacticsContextProvider>
      </AuthContextProvider>
    </BrowserRouter>
  </React.StrictMode>
);
