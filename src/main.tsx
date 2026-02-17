import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
import { ThemeProvider } from "./context/ThemeContext";
import { SoundProvider } from "./context/SoundContext";
import { ReservationProvider } from "./context/ReservationContext";
import { BrowserRouter } from "react-router-dom";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <BrowserRouter>
      <ThemeProvider>
        <SoundProvider>
          <ReservationProvider>
            <App />
          </ReservationProvider>
        </SoundProvider>
      </ThemeProvider>
    </BrowserRouter>
  </React.StrictMode>
);