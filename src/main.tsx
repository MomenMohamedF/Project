import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.tsx";
import MainProvider from "./components/provider/index.tsx";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <MainProvider>
      <App />
    </MainProvider>
  </StrictMode>
);
