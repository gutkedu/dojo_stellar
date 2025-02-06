import { useState } from "react";
import axios from "axios";

function BalanceSearch() {
  const [accountId, setAccountId] = useState("");
  const [balanceData, setBalanceData] = useState(null);
  const [error, setError] = useState("");

  const fetchBalance = async () => {
    try {
      const response = await axios.get(
        `http://localhost:3333/balance/${accountId}`
      );
      setBalanceData(response.data);
      setError("");
    } catch (err) {
      setError("Conta não encontrada!");
      setBalanceData(null);
    }
  };

  if (balanceData) {
    console.log(balanceData.balances.balance);
  }

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

      {error && <p style={{ color: "red" }}>{error}</p>}
      {balanceData && <pre>{JSON.stringify(balanceData, null, 2)}</pre>}
    </div>
  );
}

export default BalanceSearch;
