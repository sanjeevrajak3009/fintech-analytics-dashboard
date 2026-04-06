import { LucideIcon } from "lucide-react";

export interface StatItem {
  title: string;
  value: string;
  icon: LucideIcon;
  change: string;
  positive: boolean;
}

export interface TransactionItem {
  name: string;
  amount: string;
  time: string;
  status: string;
}