import type { DonutSegment, DonutTone } from "../types/dashboard";

type ExpensesDonutProps = {
    segments: DonutSegment[];
};

const strokeClasses: Record<DonutTone, string> = {
    brand: "stroke-brand",
    dark: "stroke-line",
    muted: "stroke-ink-muted",
};

export default function ExpensesDonut({ segments }: ExpensesDonutProps) {
    return (
        <article className="rounded-3xl bg-ink p-5">
            <h3 className="text-xs leading-4 font-bold text-surface">Dépenses</h3>

            {/* Donut de 96 px : rayon 40 + trait de 16 = 48 px de rayon extérieur.
          -rotate-90 fait démarrer le premier segment à 12 h. */}
            <svg
                viewBox="0 0 96 96"
                role="img"
                aria-label="Répartition des dépenses"
                className="mx-auto mt-7 size-24 -rotate-90"
            >
                {segments.map((segment, index) => {
                    // Un segment commence là où le précédent s'arrête
                    const start = segments
                        .slice(0, index)
                        .reduce((sum, { share }) => sum + share, 0);

                    return (
                        <circle
                            key={segment.id}
                            cx="48"
                            cy="48"
                            r="40"
                            // pathLength="100" : les valeurs ci-dessous sont directement des pourcentages
                            pathLength="100"
                            strokeWidth="16"
                            strokeDasharray={`${segment.share} ${100 - segment.share}`}
                            strokeDashoffset={-start}
                            className={`fill-none ${strokeClasses[segment.tone]}`}
                        />
                    );
                })}
            </svg>
        </article>
    );
}