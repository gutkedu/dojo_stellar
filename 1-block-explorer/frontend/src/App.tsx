import { Buttonbase } from "./components/Buttonbase";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Navbar } from "./components/Navbar/Navbar";
import { BalanceSearch } from "./components/balance-search";
import { TransactionHash } from "./components/Transaction-hash";
import { Block } from "./components/search-block";

export default function Home() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/balance" element={<BalanceSearch />} />
        <Route path="/transacao" element={<TransactionHash />} />
        <Route path="/block" element={<Block />} />
      </Routes>
    </Router>
  );
  {
    /*<div className="flex flex-col h-screen  bg-gray-900 text-red-500 p-6">
      <h1 className="text-3xl font-bold flex pt-7">Stellar Explorer</h1>
      <div className="flex justify-around h-auto w-full mt-8">
        <button className="bg-sky-300 cursor-pointer rounded-xl">Saldo</button>
        <button className="bg-sky-300 cursor-pointer rounded-xl">
          Transação
        </button>

        <Buttonbase>Block2</Buttonbase>
      </div>
    </div>*/
  }
}
