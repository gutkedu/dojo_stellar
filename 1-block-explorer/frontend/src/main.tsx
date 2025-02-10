import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { BalanceSearch } from "./components/balance-search.tsx";
//import { TransactionHash } from "./components/Transaction-hash.tsx";
import { Block } from "./components/search-block.tsx";
import Home from "./App.tsx";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <Home />
  </StrictMode>
);
