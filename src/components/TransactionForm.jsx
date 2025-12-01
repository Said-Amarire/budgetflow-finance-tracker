import { useState } from "react";

export default function TransactionForm() {
  const [desc, setDesc] = useState("");
  const [amount, setAmount] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    const newTransaction = { id: Date.now(), desc, amount: Number(amount) };
    const transactions = JSON.parse(localStorage.getItem("transactions") || "[]");
    transactions.push(newTransaction);
    localStorage.setItem("transactions", JSON.stringify(transactions));
    setDesc("");
    setAmount("");
    window.dispatchEvent(new Event("transactionsUpdated"));
  };

  return (
    <form
      className="bg-white p-6 rounded shadow flex flex-col md:flex-row gap-4"
      onSubmit={handleSubmit}
    >
      <input
        type="text"
        placeholder="Description"
        className="border p-2 rounded flex-1"
        value={desc}
        onChange={(e) => setDesc(e.target.value)}
        required
      />
      <input
        type="number"
        placeholder="Amount"
        className="border p-2 rounded flex-1"
        value={amount}
        onChange={(e) => setAmount(e.target.value)}
        required
      />
      <button className="bg-blue-800 text-white px-6 py-2 rounded hover:bg-blue-700">
        Add
      </button>
    </form>
  );
}
