import { useEffect, useState } from "react";

export default function TransactionList() {
  const [transactions, setTransactions] = useState(
    JSON.parse(localStorage.getItem("transactions") || "[]")
  );

  useEffect(() => {
    const updateHandler = () => {
      setTransactions(JSON.parse(localStorage.getItem("transactions") || "[]"));
    };
    window.addEventListener("transactionsUpdated", updateHandler);
    return () => window.removeEventListener("transactionsUpdated", updateHandler);
  }, []);

  return (
    <div className="bg-white p-6 rounded shadow">
      <h3 className="text-gray-700 font-semibold mb-4">Transactions</h3>
      <ul>
        {transactions.map((t) => (
          <li key={t.id} className="flex justify-between border-b py-2">
            <span>{t.desc}</span>
            <span className={t.amount > 0 ? "text-green-600" : "text-red-600"}>
              ${t.amount}
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
}
