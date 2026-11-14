import type { Feature } from "../types/features";

type FeatureCardProps = {
    feature: Feature;
    highlighted?: boolean;
};

export default function FeatureCard({
    feature,
    highlighted = false,
}: FeatureCardProps) {
    const Icon = feature.icon;

    return (
        <article
            className={`flex h-81 flex-col rounded-[36px] p-7 transition-transform duration-300 hover:-translate-y-1.5 ${highlighted ? "bg-brand" : "bg-ink"
                }`}
        >
            <span className="grid size-12 place-items-center rounded-full bg-surface text-brand">
                <Icon aria-hidden="true" className="size-4" />
            </span>

            <div className="mt-auto">
                <p className="text-xs leading-4 font-bold text-ink-subtle">
                    {feature.number}
                </p>
                <h3 className="mt-4 text-xl leading-7 font-bold tracking-[-0.02em] text-surface">
                    {feature.title}
                </h3>
                <p className="mt-3 text-sm leading-6 text-copy">{feature.description}</p>
            </div>
        </article>
    );
}