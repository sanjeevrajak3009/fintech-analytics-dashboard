# FinSight Dashboard

A production-grade **financial analytics dashboard** built with **Next.js, TypeScript, Tailwind CSS, and shadcn/ui**, designed to showcase **senior frontend engineering practices**, scalable architecture, and modern SaaS dashboard UI patterns.

---

## Overview

FinSight Dashboard is a recruiter-focused frontend project that demonstrates:

- scalable component architecture
- reusable UI patterns
- custom hooks
- render optimization
- responsive design
- professional dark SaaS interface
- type-safe development with TypeScript

This project is intentionally structured to reflect how a **senior frontend developer** would build a modern product dashboard.

---

## Live UI Preview

Professional dark-mode fintech dashboard with:

- KPI analytics cards
- balance overview
- recent transactions
- search + notifications
- reusable dashboard widgets
- scalable theme system

---

## Tech Stack

### Framework
- **Next.js 16**
- **React 19**
- **TypeScript**

### Styling
- **Tailwind CSS v4**
- **shadcn/ui**
- **Lucide Icons**
- **tw-animate-css**

### Architecture
- component-driven design
- reusable UI modules
- hooks-based data separation
- typed interfaces
- optimized renders using `React.memo`
- `useMemo` based derived data

---

## Folder Structure

```text
src/
│
├── app/
│   └── dashboard/
│       └── page.tsx
│
├── components/
│   └── dashboard/
│       ├── Header.tsx
│       ├── StatsGrid.tsx
│       ├── StatCard.tsx
│       ├── TransactionList.tsx
│       └── BalanceCard.tsx
│
├── hooks/
│   └── useDashboardData.ts
│
├── types/
│   └── dashboard.ts
│
└── app/globals.css