import type { CurrentUser } from "../types/dashboard";

type DashboardHeaderProps = {
    user: CurrentUser;
};

export default function DashboardHeader({ user }: DashboardHeaderProps) {
    return (
        // 48 px de haut : 16 (salutation) + 4 (écart) + 28 (titre) ; l'avatar est centré verticalement
        <header className="flex items-center justify-between">
            <div>
                <p className="text-xs leading-4 text-ink-subtle">
                    Bonjour, {user.firstName}
                </p>
                <h2 className="mt-1 text-xl leading-7 font-bold text-surface">
                    Vue d’ensemble
                </h2>
            </div>

            <span
                role="img"
                aria-label={`Profil de ${user.firstName}`}
                className="grid size-9 place-items-center rounded-full bg-surface text-xs font-bold text-ink"
            >
                {user.initials}
            </span>
        </header>
    );
}