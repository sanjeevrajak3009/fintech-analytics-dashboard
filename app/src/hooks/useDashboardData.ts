import {
  TrendingUp,
  Wallet,
  Users,
  Activity,
} from "lucide-react";
import { useMemo } from "react";

export function useDashboardData() {
  const stats = useMemo(
    () => [
      {
        title: "Revenue",
        value: "$124,500",
        icon: TrendingUp,
        change: "+12.4%",
        positive: true,
      },
      {
        title: "Active Users",
        value: "8,421",
        icon: Users,
        change: "+8.1%",
        positive: true,
      },
      {
        title: "Transactions",
        value: "12,892",
        icon: Wallet,
        change: "+5.6%",
        positive: true,
      },
      {
        title: "Growth",
        value: "89%",
        icon: Activity,
        change: "-1.2%",
        positive: false,
      },
    ],
    []
  );

  const transactions = useMemo(
    () => [
      {
        name: "Salary Credit",
        amount: "+$4,500",
        time: "2 mins ago",
        status: "Completed",
      },
      {
        name: "Netflix",
        amount: "-$15",
        time: "10 mins ago",
        status: "Completed",
      },
    ],
    []
  );

  return { stats, transactions };
}