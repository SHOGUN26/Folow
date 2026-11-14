import type { Budget } from "../types/dashboard";

type BudgetCardProps = {
    budget: Budget;
};

export default function BudgetCard({ budget }: BudgetCardProps) {
    return (
        <article className="rounded-[48px] bg-brand p-8">
            <h3 className="text-sm leading-5 font-bold text-surface">Budget mensuel</h3>

            <p className="mt-16 text-5xl leading-12 font-bold text-surface">
                {budget.percent}%
            </p>
            <p className="mt-2 text-sm leading-5 text-surface/70">
                de votre budget utilisé
            </p>

            <svg
                role="img"
                aria-label={`${budget.percent}% du budget utilisé`}
                className="mt-8 h-2 w-full"
            >
                <rect width="100%" height="100%" rx="4" className="fill-surface/15" />
                <rect
                    width={`${budget.percent}%`}
                    height="100%"
                    rx="4"
                    className="fill-surface"
                />
            </svg>

            <div className="mt-8.5 flex items-center justify-between border-t border-surface/15 pt-5 text-sm leading-5 text-surface">
                <span>Restant</span>
                <span className="font-bold">{budget.remaining}</span>
            </div>
        </article>
    );
}