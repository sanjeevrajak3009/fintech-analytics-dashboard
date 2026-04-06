import { BalanceCard } from "../../components/dashboard/BalanceCard";
import { Header } from "../../components/dashboard/Header";
import { StatsGrid } from "../../components/dashboard/StatsGrid";
import { TransactionList } from "../../components/dashboard/TransactionList";
import { useDashboardData } from "../../hooks/useDashboardData";

export default function DashboardPage() {
  const { stats, transactions } =
    useDashboardData();

  return (
    <div className="min-h-screen p-6 space-y-8">
      <Header />
      <BalanceCard />
      <StatsGrid stats={stats} />
      <TransactionList transactions={transactions} />
    </div>
  );
}