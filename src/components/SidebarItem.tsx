import type { LucideIcon } from "lucide-react";

type SidebarItemProps = {
    label: string;
    icon: LucideIcon;
    active?: boolean;
};

export default function SidebarItem({
    label,
    icon: Icon,
    active = false,
}: SidebarItemProps) {
    return (
        <a
            href="#"
            aria-current={active ? "page" : undefined}
            // 40 px de haut sur une ligne ; l'entrée active passe à 56 px car son texte tient sur deux lignes
            className={`flex items-center gap-3 rounded-[13px] px-3 py-3 text-xs leading-4 ${active ? "bg-brand font-semibold text-surface" : "text-ink-faint"
                }`}
        >
            {/* Mesuré sur la capture : icône de 14 px sur l'entrée active, 16 px sur les autres */}
            <Icon
                aria-hidden="true"
                className={`shrink-0 ${active ? "size-3.5" : "size-4"}`}
            />
            <span>{label}</span>
        </a>
    );
}