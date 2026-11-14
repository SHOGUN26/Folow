type OverviewBalanceCardProps = {
    value: string;
    period: string;
};

// Repère de 689 × 190 px (1 unité = 1 px), lignes de grille à 20, 75, 131 et 187
const CURVE =
    "M0 162 C40 156 80 123 124 123 C176 123 176 142 229 142 C294 142 294 55 359 55 C429 55 429 120 499 120 C560 120 620 40 689 10";

const GRID_LINES = [20.5, 75.5, 131.5, 187.5];

export default function OverviewBalanceCard({
    value,
    period,
}: OverviewBalanceCardProps) {
    return (
        <article className="flex h-full flex-col rounded-[48px] bg-surface-raised px-13 pt-13 pb-14">
            <div className="flex items-start justify-between">
                <p className="text-xs leading-4 text-ink-muted">Évolution du solde</p>
                <span className="flex h-6 items-center rounded-full bg-line px-3 text-[10px] font-medium text-ink">
                    {period}
                </span>
            </div>

            <p className="mt-3 text-4xl leading-10 font-bold text-ink">{value}</p>

            <svg
                viewBox="0 0 689 190"
                role="img"
                aria-label="Courbe de l’évolution du solde"
                className="mt-auto h-47.5 w-full overflow-visible"
            >
                {GRID_LINES.map((y) => (
                    <line
                        key={y}
                        x1="0"
                        x2="689"
                        y1={y}
                        y2={y}
                        strokeWidth="1"
                        className="stroke-line"
                    />
                ))}
                <path
                    d={CURVE}
                    strokeWidth="6"
                    strokeLinecap="round"
                    className="fill-none stroke-brand"
                />
                <circle cx="689" cy="10" r="7" className="fill-brand" />
            </svg>
        </article>
    );
}