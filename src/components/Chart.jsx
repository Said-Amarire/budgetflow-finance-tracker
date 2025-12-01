import { Line } from "react-chartjs-2";
import {
  Chart as ChartJS,
  LineElement,
  CategoryScale,
  LinearScale,
  PointElement,
} from "chart.js";

ChartJS.register(LineElement, CategoryScale, LinearScale, PointElement);

export default function Chart() {
  const transactions = JSON.parse(localStorage.getItem("transactions") || "[]");
  const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
  const incomeData = new Array(12).fill(0);
  const expenseData = new Array(12).fill(0);

  transactions.forEach((t) => {
    const month = new Date().getMonth();
    if (t.amount > 0) incomeData[month] += t.amount;
    else expenseData[month] += Math.abs(t.amount);
  });

  const data = {
    labels: months,
    datasets: [
      {
        label: "Income",
        data: incomeData,
        borderColor: "rgb(34, 197, 94)",
        backgroundColor: "rgba(34, 197, 94, 0.2)",
      },
      {
        label: "Expenses",
        data: expenseData,
        borderColor: "rgb(239, 68, 68)",
        backgroundColor: "rgba(239, 68, 68, 0.2)",
      },
    ],
  };

  return <Line data={data} />;
}
