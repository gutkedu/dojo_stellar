import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { BalanceSearch } from "./components/balance-search.tsx";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <BalanceSearch />
  </StrictMode>
);
