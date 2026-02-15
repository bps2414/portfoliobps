import Link from "next/link";
import { Button } from "@/components/ui/Button";
import { ArrowLeft } from "lucide-react";

export default function NotFound() {
    return (
        <div className="min-h-screen flex flex-col items-center justify-center bg-[#0a0a0a] text-white p-6 relative overflow-hidden">
            {/* Background Glows */}
            <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/20 rounded-full blur-[128px] pointer-events-none" />
            <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-[128px] pointer-events-none" />

            <div className="relative z-10 text-center space-y-8 max-w-md mx-auto">
                <h1 className="text-9xl font-bold tracking-tighter text-transparent bg-clip-text bg-gradient-to-b from-white to-white/10 opacity-50">
                    404
                </h1>

                <div className="space-y-4">
                    <h2 className="text-2xl font-semibold">Página Não Encontrada</h2>
                    <p className="text-white/60">
                        Parece que você se perdeu no digital. A página que você está procurando não existe ou foi movida.
                    </p>
                </div>

                <Button href="/" size="lg" className="shadow-[0_0_30px_-10px_var(--color-primary)]">
                    <ArrowLeft className="mr-2 w-4 h-4" />
                    Voltar para Home
                </Button>
            </div>
        </div>
    );
}
