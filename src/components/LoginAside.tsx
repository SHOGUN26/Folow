import Logo from "./Logo";
import Reveal from "./Reveal";

type LoginAsideProps = {
    isOpen: boolean;
};

const avatars: string[] = ["AM", "KS", "FD"];

export default function LoginAside({ isOpen }: LoginAsideProps) {
    return (
        <aside className="relative isolate flex w-full flex-col justify-between overflow-hidden bg-brand p-12 text-surface">
            <svg
                viewBox="0 0 364 364"
                aria-hidden="true"
                className="absolute -right-9 -bottom-[35px] -z-10 size-91"
            >
                <circle
                    cx="182"
                    cy="182"
                    r="154"
                    strokeWidth="56"
                    className="fill-none stroke-surface/10"
                />
                <circle cx="182" cy="182" r="62" className="fill-surface/10" />
            </svg>

            <Reveal isOpen={isOpen}>
                <div className="inline-flex rounded-full bg-surface px-4 py-2">
                    <Logo />
                </div>
            </Reveal>

            <Reveal isOpen={isOpen} step={1}>
                <p className="text-sm leading-5 font-bold">Votre argent. Vos règles.</p>

                <h2 className="mt-5 text-[64px] leading-[58px] font-bold tracking-[-0.06em]">
                    <span className="block">Des finances claires,</span>
                    <span className="block">des projets qui</span>
                    <span className="block">avancent.</span>
                </h2>

                <div className="mt-10 flex items-center gap-4">
                    <div className="flex -space-x-1">
                        {avatars.map((initials) => (
                            <span
                                key={initials}
                                className="grid size-9 place-items-center rounded-full border-2 border-brand bg-surface text-[10px] font-bold text-ink"
                            >
                                {initials}
                            </span>
                        ))}
                    </div>
                    <p className="text-xs leading-4">
                        <span className="block font-bold">+ 12 000 personnes</span>
                        <span className="block text-surface/70">
                            gèrent mieux leur argent.
                        </span>
                    </p>
                </div>
            </Reveal>
        </aside>
    );
}