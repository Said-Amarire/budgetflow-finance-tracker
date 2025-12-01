import Chart from "../components/Chart";

export default function Dashboard() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      <div className="bg-white p-6 rounded shadow">
        <h3 className="text-gray-700 font-semibold mb-2">Total Income</h3>
        <p className="text-green-600 font-bold text-3xl">$5,000</p>
      </div>
      <div className="bg-white p-6 rounded shadow">
        <h3 className="text-gray-700 font-semibold mb-2">Total Expenses</h3>
        <p className="text-red-600 font-bold text-3xl">$2,500</p>
      </div>
      <div className="bg-white p-6 rounded shadow col-span-full">
        <Chart />
      </div>
    </div>
  );
}
