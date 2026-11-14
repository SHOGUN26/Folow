// Teinte d'une carte de statistique (les trois cartes du haut de la maquette)
export type StatTone = "brand" | "light" | "dark";

export type Stat = {
  id: string;
  label: string;
  // Montant déjà formaté tel qu'affiché sur la maquette (ex. "1 248 500 F")
  value: string;
  delta: string;
  tone: StatTone;
};

// Couleur d'un segment du donut
export type DonutTone = "brand" | "dark" | "muted";

export type DonutSegment = {
  id: string;
  // Part du total en pourcentage (la somme de tous les segments fait 100)
  share: number;
  tone: DonutTone;
};

export type CurrentUser = {
  firstName: string;
  initials: string;
};

export type Budget = {
  // Part du budget utilisée, en pourcentage
  percent: number;
  remaining: string;
};