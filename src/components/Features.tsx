import { features } from "../mocks/features";
import FeatureCard from "./FeatureCard";

export default function Features() {
    return (
        <section id="fonctionnalites" aria-label="Fonctionnalités" className="bg-paper py-32">
            <div className="mx-auto max-w-[1240px]">
                <div className="flex items-end justify-between">
                    <div>
                        <p className="text-[11px] leading-4 font-bold tracking-[0.14em] text-accent-dark uppercase">
                            Tout devient plus clair
                        </p>
                        <h2 className="mt-4 text-[64px] leading-[66px] font-semibold tracking-[-0.06em] text-surface">
                            <span className="block">L’essentiel pour</span>
                            <span className="block">mieux gérer.</span>
                        </h2>
                    </div>

                    <p className="max-w-lg pb-1 text-[15px] leading-[25px] text-copy">
                        Des outils puissants, pensés pour rester simples. Comprenez votre
                        argent sans tableaux complexes ni jargon financier.
                    </p>
                </div>

                <div className="mt-14 grid grid-cols-4 gap-4">
                    {features.map((feature, index) => (
                        <FeatureCard
                            key={feature.id}
                            feature={feature}
                            highlighted={index === 0}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
}