import TransactionForm from "./TransactionForm";
import TransactionList from "./TransactionList";

export default function Transactions() {
  return (
    <div className="space-y-6">
      <TransactionForm />
      <TransactionList />
    </div>
  );
}
