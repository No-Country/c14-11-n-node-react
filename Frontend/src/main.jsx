import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import { BrowserRouter } from "react-router-dom";
import "./index.css";

import { StoreProvider } from "./Store.jsx";


ReactDOM.createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <React.StrictMode>
      <StoreProvider>
     
        <App />
        
      </StoreProvider>
    </React.StrictMode>
  </BrowserRouter>
);
