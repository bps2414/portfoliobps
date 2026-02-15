import Link from "next/link";
import { ButtonHTMLAttributes, forwardRef } from "react";
import { cn } from "@/lib/utils";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    variant?: "primary" | "secondary" | "ghost";
    size?: "sm" | "md" | "lg";
    href?: string;
    target?: string;
}

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
    ({ className, variant = "primary", size = "md", href, target, ...props }, ref) => {
        const styles = cn(
            "inline-flex items-center justify-center rounded-xl font-medium transition-all duration-300 focus:outline-none disabled:opacity-50 disabled:pointer-events-none cursor-pointer",
            // Variants
            variant === "primary" &&
            "bg-primary text-black hover:bg-primary/90 shadow-[0_0_20px_rgba(245,159,10,0.3)] hover:shadow-[0_0_30px_rgba(245,159,10,0.5)]",
            variant === "secondary" &&
            "bg-white/5 border border-white/10 text-white hover:bg-white/10 backdrop-blur-md",
            variant === "ghost" &&
            "bg-transparent text-white/70 hover:text-white hover:bg-white/5",
            // Sizes
            size === "sm" && "h-9 px-4 text-sm",
            size === "md" && "h-11 px-6 text-base",
            size === "lg" && "h-14 px-8 text-lg",
            className
        );

        if (href) {
            return (
                <Link
                    href={href}
                    target={target}
                    className={styles}
                    // eslint-disable-next-line @typescript-eslint/no-explicit-any
                    {...(props as any)}
                >
                    {props.children}
                </Link>
            );
        }

        return (
            <button
                ref={ref}
                className={styles}
                {...props}
            />
        );
    }
);

Button.displayName = "Button";

export { Button };
