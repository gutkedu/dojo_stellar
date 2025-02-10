import { useState } from "react";
import axios from "axios";
import { BlockResponse } from "../types/block";

//http:localhost:3333/block/12345

export function Block() {
  const [accountId, setAccountId] = useState("");
  const [blockData, setBlockData] = useState<BlockResponse | null>(null);
  const [error, setError] = useState("");

  const fetchBalance = async () => {
    try {
      const response = await axios.get(
        `http://localhost:3333/block/${accountId}`
      );

      setBlockData(response.data.block);
      setError("");
    } catch (err) {
      setError("Conta não encontrada!");
      console.error(err);
      setBlockData(null);
    }
  };

  return (
    <div
      className="flex flex-col justify-start
     bg-gray-800 text-red-500 w-full h-screen items-center gap-6 p-10 pr-6 "
    >
      <h2 className="text-2xl">Buscar Bloco</h2>
      <input
        className="solid border-2 border-gray-500 rounded-md"
        type="text"
        value={accountId}
        onChange={(e) => setAccountId(e.target.value)}
        placeholder="Número do Bloco"
      />
      <button
        className="bg-slate-700 px-3 py-2 rounded-xl cursor-pointer"
        onClick={fetchBalance}
      >
        Buscar
      </button>
      <div className="w-screen px-6">
        {error && <p>{error}</p>}
        {blockData && (
          <div className="items-center justify-center">
            <h6 className="text-sm">Account ID: {blockData.id}</h6>
            <h4>Hash: {blockData.hash}</h4>
            <h4>Created at: {blockData.sequence}</h4>
          </div>
        )}
      </div>
    </div>
  );
}
