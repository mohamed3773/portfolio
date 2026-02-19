import { cn } from "@/lib/utils";
import { ReactNode } from "react";

interface SectionWrapperProps {
    children: ReactNode;
    id?: string;
    className?: string;
}

export function SectionWrapper({ children, id, className }: SectionWrapperProps) {
    return (
        <section
            id={id}
            className={cn("py-20 md:py-32 relative overflow-hidden", className)}
        >
            <div className="container mx-auto px-4 md:px-6 relative z-10">
                {children}
            </div>
        </section>
    );
}
