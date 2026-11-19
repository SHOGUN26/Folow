import { ChevronRight } from "lucide-react";
import Badge from "./Badge";
import Button from "./Button";
import { scrollToSection } from "../utils/scrollToSection";




type HeroProps = {
    onStartClick: () => void;
};

export default function Hero({ onStartClick }: HeroProps) {
    return (
        <section className="relative isolate flex flex-col items-center pt-28 text-center">
            <div
                aria-hidden="true"
                className="pointer-events-none absolute top-[53px] left-[74px] -z-10 size-[420px] rounded-full bg-radial from-brand/[3.5%] from-30% to-transparent"
            />

            <Badge>Vos finances, enfin simples</Badge>

            <h1 className="mt-7 text-[96px] leading-[0.9] font-semibold tracking-[-0.08em] text-ink">
                <span className="block">Prenez le contrôle</span>
                <span className="block">
                    de votre <span className="text-brand">argent.</span>
                </span>
            </h1>

            <p className="mt-7 max-w-xl text-base leading-[1.8] text-ink-muted">
                Suivez vos dépenses, maîtrisez vos budgets et construisez sereinement
                votre avenir financier, depuis un seul espace.
            </p>

            <div className="mt-9 flex items-center gap-3">
                <Button onClick={onStartClick}>
                    Commencer gratuitement
                    <ChevronRight aria-hidden="true" className="size-4" />
                </Button>
                <Button variant="secondary" onClick={() => scrollToSection("apercu")}>
                    Découvrir l’application
                </Button>
            </div>
        </section>
    );
}