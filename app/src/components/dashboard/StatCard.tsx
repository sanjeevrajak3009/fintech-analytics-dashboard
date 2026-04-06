import React from "react";
import { StatItem } from "../../types/dashboard";

interface Props {
  item: StatItem;
}

function StatCardComponent({ item }: Props) {
  const Icon = item.icon;

  return (
    <div className="rounded-3xl border bg-card p-6 shadow-sm">
      <div className="flex items-center justify-between">
        <p className="text-sm text-muted-foreground">
          {item.title}
        </p>
        <Icon className="h-5 w-5" />
      </div>

      <h2 className="mt-4 text-3xl font-bold">
        {item.value}
      </h2>

      <p className="mt-2 text-sm">
        {item.change} this month
      </p>
    </div>
  );
}

export const StatCard = React.memo(StatCardComponent);