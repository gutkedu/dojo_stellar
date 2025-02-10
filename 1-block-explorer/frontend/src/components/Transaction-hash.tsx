import { useState } from "react";
import axios from "axios";
import { TransactionResponse } from "../types/transaction";

//http:localhost:3333/transaction/406fb73fdf904ba9e4f408b60cf324026017c8daaa8c9e02333a6fa720e0feb2

export function TransactionHash() {
  const [accountId, setAccountId] = useState("");
  const [transactionData, setTransactionData] =
    useState<TransactionResponse | null>(null);
  const [error, setError] = useState("");

  const fetchBalance = async () => {
    try {
      const response = await axios.get(
        `http://localhost:3333/transaction/${accountId}`
      );

      setTransactionData(response.data.transaction);
      setError("");
    } catch (err) {
      setError("Conta não encontrada!");
      console.error(err);
      setTransactionData(null);
    }
  };

  return (
    <div
      className="flex flex-col justify-start
   bg-gray-800 text-red-500 w-full h-screen items-center gap-6 p-10 pr-6 "
    >
      <h2 className="text-2xl">Buscar Transação</h2>
      <input
        className="solid border-2 border-gray-500 rounded-md"
        type="text"
        value={accountId}
        onChange={(e) => setAccountId(e.target.value)}
        placeholder="Hash da Transação"
      />
      <button
        className="bg-slate-700 px-3 py-2 rounded-xl cursor-pointer"
        onClick={fetchBalance}
      >
        Buscar
      </button>
      <div className="w-screen px-6">
        {error && <p>{error}</p>}
        {transactionData && (
          <div className="items-center justify-center">
            <h6 className="text-sm">Account ID: {transactionData.id}</h6>
            <h4>Hash: {transactionData.hash}</h4>
            <h4>Created at: {transactionData.created_at}</h4>
          </div>
        )}
      </div>
    </div>
  );
}
