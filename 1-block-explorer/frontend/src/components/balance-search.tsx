import { useState } from "react";
import axios from "axios";
import { BalanceResponse } from "../types/balance";

//http:localhost:3333/balance/GCXR3UI33MVQGUMYAQLZXGY2YYDOS33UXPIBGDSUOAMQNZ5EAS4D5OFY

export function BalanceSearch() {
  const [accountId, setAccountId] = useState("");
  const [balanceData, setBalanceData] = useState<BalanceResponse | null>(null);
  const [error, setError] = useState("");

  const fetchBalance = async () => {
    try {
      const response = await axios.get(
        `http://localhost:3333/balance/${accountId}`
      );
      console.log(response);
      setBalanceData(response.data.balance);
      setError("");
    } catch (err) {
      setError("Conta não encontrada!");
      console.error(err);
      setBalanceData(null);
    }
  };

  return (
    <div
      className="flex flex-col justify-start
   bg-gray-800 text-red-500 w-full h-screen items-center gap-6 p-10 pr-6 "
    >
      <h2 className="text-2xl">Buscar Saldo</h2>
      <input
        className="solid border-2 border-gray-500 rounded-md"
        type="text"
        value={accountId}
        onChange={(e) => setAccountId(e.target.value)}
        placeholder="Conta"
      />
      <button
        className="bg-slate-700 px-3 py-2 rounded-xl cursor-pointer"
        onClick={fetchBalance}
      >
        Buscar
      </button>
      <div className="w-screen px-6">
        {error && <p>{error}</p>}
        {balanceData && (
          <div className="items-center justify-center">
            <h3>Account ID: {balanceData.account_id}</h3>
            <h4>Balances:</h4>
            <ul>
              {balanceData.balances.map((balance, index) => (
                <li key={index}>
                  <p>Asset Type: {balance.asset_type}</p>
                  {balance.asset_code && (
                    <p>Asset Code: {balance.asset_code}</p>
                  )}

                  <p>Balance: {balance.balance}</p>
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </div>
  );
}
