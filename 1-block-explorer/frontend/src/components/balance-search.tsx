import { useState } from "react";
import axios from "axios";
import { BalanceResponse } from "../types/balance";

export function BalanceSearch() {
  const [accountId, setAccountId] = useState("");
  const [balanceData, setBalanceData] = useState<BalanceResponse | null>(null);
  const [error, setError] = useState("");

  const fetchBalance = async () => {
    try {
      const response = await axios.get<BalanceResponse>(
        `http://localhost:3333/balance/${accountId}`
      );
      setBalanceData(response.data);
      setError("");
    } catch (err) {
      setError("Conta não encontrada!");
      console.error(err);
      setBalanceData(null);
    }
  };

  return (
    <div>
      <h2>Buscar Saldo</h2>
      <input
        type="text"
        value={accountId}
        onChange={(e) => setAccountId(e.target.value)}
        placeholder="Endereço da Conta"
      />
      <button onClick={fetchBalance}>Buscar</button>

      {error && <p>{error}</p>}
      {balanceData && (
        <div>
          <h3>Account ID: {balanceData.account_id}</h3>
          <h4>Balances:</h4>
          <ul>
            {balanceData.balances.map((balance, index) => (
              <li key={index}>
                <p>Asset Type: {balance.asset_type}</p>
                {balance.asset_code && <p>Asset Code: {balance.asset_code}</p>}
                {balance.asset_issuer && (
                  <p>Asset Issuer: {balance.asset_issuer}</p>
                )}
                <p>Balance: {balance.balance}</p>
                <p>Buying Liabilities: {balance.buying_liabilities}</p>
                <p>Selling Liabilities: {balance.selling_liabilities}</p>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}
