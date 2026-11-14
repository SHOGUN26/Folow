import type { Budget, CurrentUser, DonutSegment, Stat } from "../types/dashboard";

export const currentUser: CurrentUser = {
  firstName: "Aminata",
  initials: "AD",
};

export const stats: Stat[] = [
  {
    id: "balance",
    label: "Solde total",
    value: "1 248 500 F",
    delta: "+8,4% ce mois",
    tone: "brand",
  },
  {
    id: "income",
    label: "Revenus",
    value: "925 000 F",
    delta: "+12,5%",
    tone: "light",
  },
  {
    id: "expenses",
    label: "Dépenses",
    value: "361 400 F",
    delta: "-4,2%",
    tone: "dark",
  },
];

export const balanceEvolution = {
  period: "6 mois",
  value: "+ 184 200 F",
};

// Segments du donut, dans le sens horaire à partir de 12 h
export const expenseSegments: DonutSegment[] = [
  { id: "segment-1", share: 46, tone: "brand" },
  { id: "segment-2", share: 26, tone: "dark" },
  { id: "segment-3", share: 28, tone: "muted" },
];

export const budget: Budget = {
  percent: 68,
  remaining: "244 000 F",
};