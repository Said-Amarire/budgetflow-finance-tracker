import { useState } from "react";
import Sidebar from "./components/Sidebar";
import Navbar from "./components/Navbar";
import Dashboard from "./components/Dashboard";
import Transactions from "./components/Transactions";

export default function App() {
  const [page, setPage] = useState("dashboard");

  return (
    <div className="flex min-h-screen bg-gray-100">
      <Sidebar setPage={setPage} />
      <div className="flex-1 flex flex-col">
        <Navbar />
        <div className="p-6 flex-1 overflow-auto">
          {page === "dashboard" && <Dashboard />}
          {page === "transactions" && <Transactions />}
        </div>
      </div>
    </div>
  );
}
