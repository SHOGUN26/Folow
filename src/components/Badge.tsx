import type { ReactNode } from "react";

type BadgeProps = {
    children: ReactNode;
};

export default function Badge({ children }: BadgeProps) {
    return (
        <span className="inline-flex items-center gap-2 rounded-full border border-line bg-surface-raised px-4 py-2 text-xs font-semibold text-brand">
            <span aria-hidden="true" className="size-1.5 rounded-full bg-brand" />
            {children}
        </span>
    );
}