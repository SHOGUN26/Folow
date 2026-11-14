type BalanceChartProps = {
    value: string;
    period: string;
};

// Tracé de la courbe dans un repère de 511 × 120 px (1 unité = 1 px à l'écran).
// Points relevés sur la capture tous les 30 px, puis lissés en courbes de Bézier.
const CURVE =
    "M0 102 C5 100.8 20 97.7 30 95 C40 92.3 50 88.2 60 86 C70 83.8 80 82 90 82 C100 82 110 84.4 120 86 C130 87.6 140 91.2 150 91.5 C160 91.8 170 91.6 180 88 C190 84.4 200 76.2 210 70 C220 63.8 230 54.6 240 50.5 C250 46.4 260 45 270 45.5 C280 46 290 50 300 53.5 C310 57 320 62.4 330 66.5 C340 70.6 350 76.8 360 78 C370 79.2 380 77.4 390 73.5 C400 69.6 410 60.7 420 54.5 C430 48.3 440 40.9 450 36.5 C460 32.1 471 30.1 480 28 C489 25.9 501 24.7 505 24";

// Les .5 centrent chaque trait d'1 px sur un pixel entier (sinon il serait flou)
const GRID_LINES = [26.5, 56.5, 86.5, 116.5];

export default function BalanceChart({ value, period }: BalanceChartProps) {
    return (
        <article className="rounded-3xl bg-ink p-5">
            <div className="flex items-start justify-between">
                <p className="text-xs leading-4 text-ink-subtle">Évolution du solde</p>
                <span className="rounded-full bg-paper px-3 py-1 text-[10px] leading-3.5 font-medium text-surface">
                    {period}
                </span>
            </div>

            <p className="mt-1 text-lg leading-6 font-bold text-surface">{value}</p>

            {/* overflow-visible : le point final dépasse de 4 px à droite, comme sur la capture */}
            <svg
                viewBox="0 0 511 120"
                role="img"
                aria-label="Courbe de l’évolution du solde"
                className="mt-3.5 h-30 w-full overflow-visible"
            >
                {GRID_LINES.map((y) => (
                    <line
                        key={y}
                        x1="0"
                        x2="511"
                        y1={y}
                        y2={y}
                        strokeWidth="1"
                        className="stroke-grid"
                    />
                ))}
                <path
                    d={CURVE}
                    strokeWidth="3"
                    strokeLinecap="round"
                    className="fill-none stroke-brand"
                />
                {/* Le point final est légèrement ovale sur la capture (10 × 7 px) */}
                <ellipse cx="510.5" cy="21" rx="5" ry="3.5" className="fill-brand" />
            </svg>
        </article>
    );
}