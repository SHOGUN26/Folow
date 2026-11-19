import type { ReactNode } from "react";

type FormFieldProps = {
    id: string;
    label: string;
    type: string;
    placeholder: string;
    trailing?: ReactNode;
};

export default function FormField({
    id,
    label,
    type,
    placeholder,
    trailing,
}: FormFieldProps) {
    return (
        <div>
            <label
                htmlFor={id}
                className="block text-xs leading-4 font-semibold text-ink-muted"
            >
                {label}
            </label>
            <div className="relative mt-2">
                <input
                    id={id}
                    type={type}
                    placeholder={placeholder}
                    className={`h-14 w-full rounded-[20px] border border-line bg-surface-raised px-4 text-sm text-ink transition-colors duration-300 outline-none placeholder:text-ink-subtle focus:border-brand ${trailing ? "pr-12" : ""}`}
                />
                {trailing && (
                    <span className="absolute top-1/2 right-4 -translate-y-1/2">
                        {trailing}
                    </span>
                )}
            </div>
        </div>
    );
}