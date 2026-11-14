import type { ButtonHTMLAttributes } from "react";

type ButtonVariant = "primary" | "secondary" | "dark";

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
    variant?: ButtonVariant;
};

const variantClasses: Record<ButtonVariant, string> = {
    primary:
        "bg-brand font-semibold text-surface transition-colors duration-300 hover:bg-brand/85",
    secondary:
        "bg-line font-bold text-ink transition-colors duration-300 hover:bg-frame",
    dark: "group bg-surface font-semibold text-ink transition-transform duration-300 hover:-translate-y-0.5",
};

export default function Button({
    variant = "primary",
    children,
    ...props
}: ButtonProps) {
    return (
        <button
            type="button"
            className={`inline-flex h-12 cursor-pointer items-center justify-center gap-3 rounded-full px-6 text-sm ${variantClasses[variant]}`}            {...props}
        >
            {children}
        </button>
    );
}