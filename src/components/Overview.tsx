import { balanceEvolution, budget } from "../mocks/dashboard";
import BudgetCard from "./BudgetCard";
import OverviewBalanceCard from "./OverviewBalanceCard";

export default function Overview() {
    return (
        <section id="a-propos" aria-label="Vue d’ensemble" className="bg-surface pt-32">
            <div className="mx-auto max-w-[1240px]">
                <div className="text-center">
                    <p className="text-[11px] leading-4 font-bold tracking-[0.14em] text-accent-dark uppercase">
                        Une longueur d’avance
                    </p>
                    <h2 className="mt-5 text-[72px] leading-[66px] font-semibold tracking-[-0.06em] text-ink">
                        <span className="block">Votre vie financière.</span>
                        <span className="block">En un coup d’œil.</span>
                    </h2>
                </div>

                <div className="mt-15 grid h-106 grid-cols-[1fr_427px] gap-5">
                    <OverviewBalanceCard
                        value={balanceEvolution.value}
                        period={balanceEvolution.period}
                    />
                    <BudgetCard budget={budget} />
                </div>
            </div>
        </section>
    );
}
