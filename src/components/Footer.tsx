import Logo from "./Logo";

const links: string[] = [
    "Fonctionnalités",
    "À propos",
    "Confidentialité",
    "Mentions légales",
];

export default function Footer() {
    return (
        <footer className="border-t border-line bg-surface">
            <div className="mx-auto flex max-w-[1240px] items-center justify-between py-10">
                <a href="#">
                    <Logo />
                </a>

                <nav aria-label="Pied de page" className="flex items-center gap-6">
                    {links.map((label) => (
                        <a key={label} href="#" className="text-sm text-ink-muted">
                            {label}
                        </a>
                    ))}
                </nav>

                <p className="text-sm text-ink-muted">© 2026 Folow.</p>
            </div>
        </footer>
    );
}