import Button from "./Button";
import Logo from "./Logo";
import { scrollToSection } from "../utils/scrollToSection";

type NavItem = {
    label: string;
    href: string;
    active?: boolean;
};

type NavbarProps = {
    onLoginClick: () => void;
    onSignupClick: () => void
};

const navItems: NavItem[] = [
    { label: "Accueil", href: "#", active: true },
    { label: "Fonctionnalités", href: "#fonctionnalites" },
    { label: "À propos", href: "#a-propos" },
];

export default function Navbar({ onLoginClick, onSignupClick }: NavbarProps) {
    return (
        <header className="h-24">
            <div className="relative mx-auto flex h-full max-w-[1176px] items-center justify-between">
                <a href="#">
                    <Logo />
                </a>

                <nav
                    aria-label="Navigation principale"
                    className="absolute left-[380px] flex items-center gap-9"
                >
                    {navItems.map((item) => (
                        <a
                            key={item.label}
                            href={item.href}
                            onClick={(event) => {
                                event.preventDefault();
                                scrollToSection(
                                    item.href === "#" ? null : item.href.slice(1),
                                );
                                window.history.pushState(null, "", item.href);
                            }}
                            className={`text-sm font-medium tracking-[-0.015em] ${item.active ? "text-ink" : "text-ink-muted"
                                }`}
                        >
                            {item.label}
                        </a>
                    ))}
                </nav>

                <div className="flex items-center gap-6">
                    <button
                        type="button"
                        onClick={onLoginClick}
                        className="cursor-pointer text-sm font-semibold text-ink"
                    >
                        Connexion
                    </button>

                    <Button onClick={onSignupClick}>Commencer</Button>
                </div>
            </div>
        </header>
    );
}