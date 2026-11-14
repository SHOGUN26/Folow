import { balanceEvolution, currentUser, expenseSegments, stats } from "../mocks/dashboard";
import BalanceChart from "./BalanceChart";
import DashboardHeader from "./DashboardHeader";
import ExpensesDonut from "./ExpensesDonut";
import Sidebar from "./Sidebar";
import StatCard from "./StatCard";

export default function DashboardPreview() {
    return (
        // Espaces au-dessus et en dessous du cadre : estimés, la capture ne montre pas la jonction avec le hero
        <section aria-label="Aperçu de l’application" className="py-16">
            {/* Cadre : 1024 px (max-w-5xl), bordure d'1 px + 12 px de marge intérieure */}
            <div className="mx-auto max-w-5xl rounded-[38px] border border-frame bg-surface-raised p-3 shadow-frame">
                {/* Intérieur : 998 × 500 px, coins arrondis découpant la barre latérale et la zone principale */}
                <div className="flex h-125 overflow-hidden rounded-[32px]">
                    <Sidebar />

                    <div className="flex-1 bg-paper p-7">
                        <DashboardHeader user={currentUser} />

                        {/* Rangée 1 : 3 cartes égales, 136 px de haut, 24 px sous l'en-tête */}
                        <div className="mt-6 grid h-34 grid-cols-3 gap-4">
                            {stats.map((stat) => (
                                <StatCard key={stat.id} stat={stat} />
                            ))}
                        </div>

                        {/* Rangée 2 : 224 px de haut, 12 px sous la rangée 1 ; le donut fait 209 px de large */}
                        <div className="mt-3 grid h-56 grid-cols-[1fr_209px] gap-3">
                            <BalanceChart
                                value={balanceEvolution.value}
                                period={balanceEvolution.period}
                            />
                            <ExpensesDonut segments={expenseSegments} />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}