import Link from "next/link";
import { Github, Linkedin, Twitter } from "lucide-react";

export function Footer() {
    return (
        <footer className="border-t border-white/10 bg-black py-12">
            <div className="container mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-6">
                <div className="text-center md:text-left">
                    <Link href="/" className="text-2xl font-bold tracking-tighter text-white">
                        Nexo<span className="text-primary">.</span>
                    </Link>
                    <p className="text-sm text-white/50 mt-2">
                        © {new Date().getFullYear()} Nexo Digital. All rights reserved.
                    </p>
                </div>

                <div className="flex items-center gap-6">
                    <Link href="https://github.com/Bryans334" target="_blank" className="text-white/50 hover:text-primary transition-colors">
                        <Github className="w-5 h-5" />
                    </Link>
                    <Link href="https://www.linkedin.com/in/bryan-souza-a61110237" target="_blank" className="text-white/50 hover:text-primary transition-colors">
                        <Linkedin className="w-5 h-5" />
                    </Link>
                    {/* Twitter removed as requested/not provided, kept generic if needed or remove entirely */}
                </div>
            </div>
        </footer>
    );
}
