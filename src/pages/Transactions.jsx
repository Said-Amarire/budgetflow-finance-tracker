import TransactionForm from "../components/TransactionForm";
import TransactionList from "../components/TransactionList";

export default function Transactions() {
  return (
    <div className="space-y-6">
      <TransactionForm />
      <TransactionList />
    </div>
  );
}
