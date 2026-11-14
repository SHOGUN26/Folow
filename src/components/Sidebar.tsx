import type { LucideIcon } from "lucide-react";
import { ArrowLeftRight, ChartColumn, LayoutGrid, Wallet } from "lucide-react";
import Logo from "./Logo";
import SidebarItem from "./SidebarItem";


type NavEntry = {
    label: string;
    icon: LucideIcon;
    active?: boolean;
};

const navEntries: NavEntry[] = [
    { label: "Vue d’ensemble", icon: LayoutGrid, active: true },
    { label: "Transactions", icon: ArrowLeftRight },
    { label: "Budgets", icon: Wallet },
    { label: "Statistiques", icon: ChartColumn },
];

export default function Sidebar() {
    return (
        <aside className="w-[170px] shrink-0 bg-surface-sidebar pt-[17px]">
            {/* Le symbole du logo doit tomber à 20 px du bord ; le SVG a lui-même une petite marge interne */}
            <div className="pl-[19px]">
                <Logo />
            </div>

            {/* mt-13 = 52 px : le premier élément commence 112 px sous le haut de la barre */}
            <nav
                aria-label="Navigation du tableau de bord"
                className="mt-13 flex flex-col gap-2 px-5"
            >
                {navEntries.map((entry) => (
                    <SidebarItem key={entry.label} {...entry} />
                ))}
            </nav>
        </aside>
    );
}