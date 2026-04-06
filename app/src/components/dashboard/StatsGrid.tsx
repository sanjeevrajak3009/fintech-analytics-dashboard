import React from "react";
import { StatItem } from "../../types/dashboard";
import { StatCard } from "./StatCard";

interface Props {
  stats: StatItem[];
}

function StatsGridComponent({ stats }: Props) {
  return (
    <section className="grid grid-cols-1 gap-6 md:grid-cols-2 xl:grid-cols-4">
      {stats.map((item) => (
        <StatCard
          key={item.title}
          item={item}
        />
      ))}
    </section>
  );
}

export const StatsGrid = React.memo(
  StatsGridComponent
);