import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import "./index.css";
import { BrowserRouter } from "react-router-dom";
import { HoroscopeContextProvider } from "./store/horoscope-ctx";

ReactDOM.render(
  <React.StrictMode>
    <HoroscopeContextProvider>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </HoroscopeContextProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
