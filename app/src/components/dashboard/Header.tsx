import { Search, Bell } from "lucide-react";
import React from "react";

function HeaderComponent() {
  return (
    <header className="flex flex-col gap-4 rounded-3xl border bg-card p-6 shadow-sm md:flex-row md:items-center md:justify-between">
      <div>
        <h1 className="text-3xl font-bold">
          FinSight Dashboard
        </h1>
        <p className="mt-1 text-sm text-muted-foreground">
          Advanced business intelligence dashboard
        </p>
      </div>

      <div className="flex items-center gap-3">
        <div className="flex items-center rounded-2xl border px-4 py-2 shadow-sm">
          <Search className="mr-2 h-4 w-4" />
          <input
            className="bg-transparent outline-none"
            placeholder="Search analytics..."
          />
        </div>

        <button className="rounded-2xl border p-3 transition hover:bg-accent">
          <Bell className="h-5 w-5" />
        </button>
      </div>
    </header>
  );
}

export const Header = React.memo(HeaderComponent);