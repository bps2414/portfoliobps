import { cn } from "@/lib/utils";
import { ReactNode } from "react";

interface GlassContainerProps {
    children: ReactNode;
    className?: string;
    hoverEffect?: boolean;
}

export function GlassContainer({
    children,
    className,
    hoverEffect = false
}: GlassContainerProps) {
    return (
        <div
            className={cn(
                "backdrop-blur-md bg-white/5 border border-white/10 rounded-2xl shadow-lg",
                hoverEffect && "hover:bg-white/10 transition-colors duration-300",
                className
            )}
        >
            {children}
        </div>
    );
}
