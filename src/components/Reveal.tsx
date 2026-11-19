import type { ReactNode } from "react";

type RevealProps = {
    isOpen: boolean;
    // Rang dans la cascade d'apparition (0 = premier)
    step?: number;
    className?: string;
    children: ReactNode;
};

// Délais appliqués uniquement à l'ouverture ; à la fermeture, tout disparaît en même temps
const STEP_DELAYS: string[] = [
    "delay-[450ms]",
    "delay-[520ms]",
    "delay-[590ms]",
    "delay-[660ms]",
    "delay-[730ms]",
    "delay-[800ms]",
    "delay-[870ms]",
];

export default function Reveal({
    isOpen,
    step = 0,
    className = "",
    children,
}: RevealProps) {
    const delay = STEP_DELAYS[step] ?? "";

    return (
        <div
            className={`transition-all duration-700 ease-out ${className} ${isOpen ? `translate-y-0 opacity-100 ${delay}` : "translate-y-4 opacity-0"
                }`}
        >
            {children}
        </div>
    );
}