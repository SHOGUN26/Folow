import { ChevronRight } from "lucide-react";
import Button from "./Button";

export default function CallToAction() {
    return (
        <section aria-label="Créer un compte" className="bg-surface pt-32 pb-24">
            <div className="mx-auto flex h-68 max-w-[1240px] items-end justify-between rounded-[48px] bg-brand p-14">
                <div>
                    <p className="text-sm leading-5 font-bold text-surface">
                        Prêt à reprendre le contrôle ?
                    </p>
                    <h2 className="mt-6 text-[60px] leading-[58px] font-semibold tracking-[-0.06em] text-surface">
                        <span className="block">Votre argent mérite</span>
                        <span className="block">plus de clarté.</span>
                    </h2>
                </div>

                <Button variant="dark">
                    Créer mon compte
                    <ChevronRight
                        aria-hidden="true"
                        className="size-4 transition-transform duration-300 group-hover:translate-x-1"
                    />
                </Button>
            </div>
        </section>
    );
}