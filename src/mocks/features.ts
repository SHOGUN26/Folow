import { ArrowDown, ArrowRightLeft, ChartNoAxesColumn, Target } from "lucide-react";
import type { Feature } from "../types/features";

export const features: Feature[] = [
  {
    id: "expenses",
    number: "01",
    title: "Suivi des dépenses",
    description: "Visualisez chaque sortie et gardez le cap au quotidien.",
    icon: ArrowDown,
  },
  {
    id: "budgets",
    number: "02",
    title: "Gestion des budgets",
    description: "Fixez vos limites et atteignez vos objectifs sans stress.",
    icon: Target,
  },
  {
    id: "analysis",
    number: "03",
    title: "Analyse financière",
    description: "Transformez vos données en décisions plus intelligentes.",
    icon: ChartNoAxesColumn,
  },
  {
    id: "transactions",
    number: "04",
    title: "Transactions",
    description: "Retrouvez et organisez tous vos mouvements facilement.",
    icon: ArrowRightLeft,
  },
];