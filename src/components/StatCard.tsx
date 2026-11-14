import type { Stat, StatTone } from "../types/dashboard";

type StatCardProps = {
    stat: Stat;
};

// Classes propres à chaque teinte. La carte jaune a un chiffre plus grand (26 px) que les deux autres (20 px).
const toneClasses: Record<
    StatTone,
    { card: string; label: string; value: string; delta: string }
> = {
    brand: {
        card: "bg-brand",
        label: "text-surface",
        value: "text-[26px] leading-7 tracking-[-0.045em] text-surface",
        delta: "text-surface",
    },
    light: {
        card: "bg-ink",
        label: "text-ink-subtle",
        value: "text-xl leading-6 text-surface",
        delta: "text-positive",
    },
    dark: {
        card: "bg-line",
        label: "text-ink-muted",
        value: "text-xl leading-6 text-ink",
        delta: "text-brand",
    },
};

export default function StatCard({ stat }: StatCardProps) {
    const tone = toneClasses[stat.tone];

    return (
        <article className={`rounded-3xl p-5 ${tone.card}`}>
            <p className={`text-xs ${tone.label}`}>{stat.label}</p>
            {/* Écarts mesurés sur la capture : 14 px sous le libellé, 22 px sous le montant */}
            <p className={`mt-3.5 font-bold ${tone.value}`}>{stat.value}</p>
            <p className={`mt-[22px] text-xs ${tone.delta}`}>{stat.delta}</p>
        </article>
    );
}