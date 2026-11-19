import { ChevronRight, Eye, EyeOff } from "lucide-react";
import { useState } from "react";
import Button from "./Button";
import FormField from "./FormField";
import Reveal from "./Reveal";

type LoginFormProps = {
    isOpen: boolean;
    onSwitchView: () => void;
};


export default function LoginForm({ isOpen, onSwitchView }: LoginFormProps) {
    const [showPassword, setShowPassword] = useState(false);

    return (
        <div className="w-112">
            <Reveal isOpen={isOpen}>
                <p className="text-[11px] leading-4 font-bold tracking-[0.14em] text-accent-dark uppercase">
                    Heureux de vous revoir
                </p>
                <h2 className="mt-4 text-[40px] leading-11 font-semibold tracking-[-0.06em] text-ink">
                    Bon retour parmi nous
                </h2>
                <p className="mt-3 text-sm leading-5 text-ink-faint">
                    Connectez-vous pour retrouver votre espace financier.
                </p>
            </Reveal>

            <form
                onSubmit={(event) => event.preventDefault()}
                className="mt-9 flex flex-col gap-4"
            >
                <Reveal isOpen={isOpen} step={1}>
                    <FormField
                        id="email"
                        label="Adresse e-mail"
                        type="email"
                        placeholder="vous@exemple.com"
                    />
                </Reveal>

                <Reveal isOpen={isOpen} step={2}>
                    <FormField
                        id="password"
                        label="Mot de passe"
                        type={showPassword ? "text" : "password"}
                        placeholder="6 caractères minimum"
                        trailing={
                            <button
                                type="button"
                                aria-label={
                                    showPassword
                                        ? "Masquer le mot de passe"
                                        : "Afficher le mot de passe"
                                }
                                onClick={() => setShowPassword((visible) => !visible)}
                                className="cursor-pointer text-ink-faint"
                            >
                                {showPassword ? (
                                    <EyeOff aria-hidden="true" className="size-4" />
                                ) : (
                                    <Eye aria-hidden="true" className="size-4" />
                                )}
                            </button>
                        }
                    />
                </Reveal>

                <Reveal isOpen={isOpen} step={3} className="mt-2">
                    <div className="flex items-center justify-between text-xs leading-4">
                        <label className="flex cursor-pointer items-center gap-2 text-ink-muted">
                            <input
                                type="checkbox"
                                className="size-3.5 cursor-pointer accent-brand"
                            />
                            Se souvenir de moi
                        </label>
                        <a href="#" className="font-bold text-ink">
                            Mot de passe oublié ?
                        </a>
                    </div>

                    <div className="mt-6">
                        <Button type="submit" fullWidth>
                            Se connecter
                            <ChevronRight aria-hidden="true" className="size-4" />
                        </Button>
                    </div>
                </Reveal>
            </form>

            <Reveal isOpen={isOpen} step={4} className="mt-7">
                <p className="text-center text-sm leading-5 text-ink-faint">
                    Pas encore de compte ?{" "}
                    {/* Remplace le <a href="#"> « Créer un compte » */}
                    <button
                        type="button"
                        onClick={onSwitchView}
                        className="cursor-pointer font-bold text-brand"
                    >
                        Créer un compte
                    </button>
                </p>
            </Reveal>
        </div>
    );
}