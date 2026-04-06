import React from "react";
import { TransactionItem } from "../../types/dashboard";

interface Props {
  transactions: TransactionItem[];
}

function TransactionListComponent({
  transactions,
}: Props) {
  return (
    <div className="rounded-3xl border bg-card p-6 shadow-sm">
      <h2 className="text-lg font-semibold">
        Recent Transactions
      </h2>

      <div className="mt-4 space-y-4">
        {transactions.map((item) => (
          <div
            key={item.name + item.time}
            className="rounded-2xl border p-4 transition hover:bg-accent"
          >
            <div className="flex items-center justify-between">
              <span className="font-medium">
                {item.name}
              </span>
              <span className="font-semibold">
                {item.amount}
              </span>
            </div>

            <div className="mt-2 flex items-center justify-between text-sm text-muted-foreground">
              <span>{item.time}</span>
              <span>{item.status}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export const TransactionList = React.memo(
  TransactionListComponent
);