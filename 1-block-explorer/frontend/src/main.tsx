import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
//import App from "./App.tsx";
import StellarExplorer from "./components/Test.tsx";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <StellarExplorer />
  </StrictMode>
);
