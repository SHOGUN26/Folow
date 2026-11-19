import { X } from "lucide-react";
import { useEffect } from "react";
import type { AuthView } from "../types/auth";
import LoginAside from "./LoginAside";
import LoginForm from "./LoginForm";
import SignupForm from "./SignupForm";

type LoginModalProps = {
    isOpen: boolean;
    view: AuthView;
    onClose: () => void;
    onViewChange: (view: AuthView) => void;
};

const PANEL = "transition-transform duration-700 ease-[cubic-bezier(0.76,0,0.24,1)]";

export default function LoginModal({
    isOpen,
    view,
    onClose,
    onViewChange,
}: LoginModalProps) {
    useEffect(() => {
        document.body.classList.toggle("overflow-hidden", isOpen);
        return () => document.body.classList.remove("overflow-hidden");
    }, [isOpen]);

    return (
        <div
            role="dialog"
            aria-modal="true"
            aria-label={view === "login" ? "Connexion" : "Inscription"}
            aria-hidden={!isOpen}
            className={`fixed inset-0 z-50 overflow-x-hidden overflow-y-auto transition-[visibility] duration-700 ${isOpen ? "visible" : "invisible"
                }`}
        >
            <div className="flex min-h-full">
                <div
                    className={`flex w-1/2 ${PANEL} ${isOpen ? "translate-x-0" : "-translate-x-full"}`}
                >
                    <LoginAside isOpen={isOpen} />
                </div>

                <div
                    className={`relative flex w-1/2 items-center justify-center bg-surface py-18 ${PANEL} ${isOpen ? "translate-x-0" : "translate-x-full"
                        }`}
                >
                    <button
                        type="button"
                        onClick={onClose}
                        aria-label="Fermer"
                        className="absolute top-6 right-6 grid size-10 cursor-pointer place-items-center rounded-full bg-line/60 text-ink transition-colors duration-300 hover:bg-line"
                    >
                        <X aria-hidden="true" className="size-4" />
                    </button>

                    {view === "login" ? (
                        <LoginForm
                            isOpen={isOpen}
                            onSwitchView={() => onViewChange("signup")}
                        />
                    ) : (
                        <SignupForm
                            isOpen={isOpen}
                            onSwitchView={() => onViewChange("login")}
                        />
                    )}
                </div>
            </div>
        </div>
    );
}