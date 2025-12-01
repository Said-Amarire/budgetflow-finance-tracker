export default function Sidebar({ setPage }) {
  return (
    <div className="w-64 bg-blue-800 text-white flex flex-col p-6 h-screen">
      <h1 className="text-3xl font-bold mb-10">BudgetFlow</h1>
      <button
        className="mb-4 py-2 px-4 rounded hover:bg-blue-700 text-left"
        onClick={() => setPage("dashboard")}
      >
        Dashboard
      </button>
      <button
        className="mb-4 py-2 px-4 rounded hover:bg-blue-700 text-left"
        onClick={() => setPage("transactions")}
      >
        Transactions
      </button>
    </div>
  );
}
