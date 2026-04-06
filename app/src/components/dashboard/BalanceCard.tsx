import { CreditCard } from "lucide-react";
import React from "react";

function BalanceCardComponent() {
  return (
    <section className="grid grid-cols-1 gap-6 lg:grid-cols-3">
      <div className="rounded-3xl border bg-card p-6 shadow-sm lg:col-span-2">
        <p className="text-sm text-muted-foreground">
          Total Balance
        </p>
        <h2 className="mt-3 text-4xl font-bold">
          $82,450.00
        </h2>
        <p className="mt-2 text-sm text-muted-foreground">
          Updated just now
        </p>
      </div>

      <div className="rounded-3xl border bg-card p-6 shadow-sm">
        <div className="flex items-center justify-between">
          <p className="text-sm text-muted-foreground">
            Quick Actions
          </p>
          <CreditCard className="h-5 w-5" />
        </div>

        <div className="mt-4 space-y-3">
          <button className="w-full rounded-2xl border p-3 text-left hover:bg-accent transition">
            Transfer Money
          </button>
          <button className="w-full rounded-2xl border p-3 text-left hover:bg-accent transition">
            Download Report
          </button>
        </div>
      </div>
    </section>
  );
}

export const BalanceCard = React.memo(
  BalanceCardComponent
);