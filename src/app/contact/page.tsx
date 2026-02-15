"use client";

import { useState } from "react";
import Link from "next/link";
import { ArrowLeft, Mail, MapPin, Phone, Send, Loader2, CheckCircle } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { GlassContainer } from "@/components/ui/GlassContainer";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";

export default function Contact() {
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [isSuccess, setIsSuccess] = useState(false);
    const [emailError, setEmailError] = useState("");

    const validateEmail = (email: string) => {
        return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
    };

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const form = e.target as HTMLFormElement;
        const nameInput = form.elements.namedItem('name') as HTMLInputElement;
        const emailInput = form.elements.namedItem('email') as HTMLInputElement;
        const messageInput = form.elements.namedItem('message') as HTMLTextAreaElement;

        const name = nameInput.value;
        const email = emailInput.value;
        const message = messageInput.value;

        // Validation
        if (!validateEmail(email)) {
            setEmailError("Por favor, insira um email válido.");
            return;
        }
        setEmailError("");

        setIsSubmitting(true);
        setIsSuccess(false);

        // Simulate network delay for better UX
        await new Promise(resolve => setTimeout(resolve, 1500));

        const text = `Olá, meu nome é ${name}. Meu email é ${email}. ${message}`;
        const encodedText = encodeURIComponent(text);

        window.open(`https://wa.me/5521987783382?text=${encodedText}`, '_blank');

        setIsSubmitting(false);
        setIsSuccess(true);
        form.reset();

        // Hide success message after 5 seconds
        setTimeout(() => setIsSuccess(false), 5000);
    };

    return (
        <div className="min-h-screen flex flex-col bg-background relative">
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-primary/5 rounded-full blur-[120px] -z-10" />

            <Header />

            <main className="flex-grow pt-32 pb-20 px-6 container mx-auto">
                <div className="max-w-5xl mx-auto">
                    <Link href="/">
                        <Button variant="ghost" size="sm" className="mb-6 pl-0 hover:bg-transparent hover:text-primary gap-2">
                            <ArrowLeft className="w-4 h-4" /> Voltar para Home
                        </Button>
                    </Link>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                        <div>
                            <h1 className="text-4xl md:text-5xl font-bold mb-6">Vamos Trabalhar Juntos?</h1>
                            <p className="text-xl text-white/60 mb-10">
                                Tem um projeto em mente? Estou disponível para freelas e novas oportunidades.
                                Mande uma mensagem e vamos construir algo incrível.
                            </p>

                            <div className="space-y-6">
                                <GlassContainer className="p-6 flex items-center gap-4">
                                    <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center text-primary">
                                        <Mail />
                                    </div>
                                    <div>
                                        <h3 className="font-bold text-white">Email</h3>
                                        <p className="text-white/60">bryanpsouza123@gmail.com</p>
                                    </div>
                                </GlassContainer>

                                <GlassContainer className="p-6 flex items-center gap-4">
                                    <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center text-primary">
                                        <Phone />
                                    </div>
                                    <div>
                                        <h3 className="font-bold text-white">WhatsApp</h3>
                                        <p className="text-white/60">+55 (21) 98778-3382</p>
                                    </div>
                                </GlassContainer>

                                <GlassContainer className="p-6 flex items-center gap-4">
                                    <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center text-primary">
                                        <MapPin />
                                    </div>
                                    <div>
                                        <h3 className="font-bold text-white">Localização</h3>
                                        <p className="text-white/60">Rio de Janeiro, RJ</p>
                                    </div>
                                </GlassContainer>
                            </div>
                        </div>

                        <GlassContainer className="p-8 h-fit">
                            <h2 className="text-2xl font-bold mb-6">Envie uma mensagem</h2>
                            <form className="space-y-4" onSubmit={handleSubmit} noValidate>
                                <div className="space-y-2">
                                    <label htmlFor="name" className="text-sm font-medium text-white/70">Nome</label>
                                    <input
                                        type="text"
                                        id="name"
                                        name="name"
                                        className="w-full bg-black/30 border border-white/10 rounded-lg p-3 text-white focus:outline-none focus:border-primary/50 transition-colors"
                                        placeholder="Seu nome"
                                        required
                                    />
                                </div>

                                <div className="space-y-2">
                                    <label htmlFor="email" className="text-sm font-medium text-white/70">Email</label>
                                    <input
                                        type="email"
                                        id="email"
                                        name="email"
                                        className={`w-full bg-black/30 border rounded-lg p-3 text-white focus:outline-none transition-colors ${emailError ? "border-red-500 focus:border-red-500" : "border-white/10 focus:border-primary/50"
                                            }`}
                                        placeholder="seu@email.com"
                                        required
                                        onChange={() => setEmailError("")}
                                    />
                                    {emailError && <p className="text-red-500 text-xs mt-1">{emailError}</p>}
                                </div>

                                <div className="space-y-2">
                                    <label htmlFor="message" className="text-sm font-medium text-white/70">Mensagem</label>
                                    <textarea
                                        id="message"
                                        name="message"
                                        rows={5}
                                        className="w-full bg-black/30 border border-white/10 rounded-lg p-3 text-white focus:outline-none focus:border-primary/50 transition-colors resize-none"
                                        placeholder="Conte mais sobre seu projeto..."
                                        required
                                    />
                                </div>

                                <Button
                                    type="submit"
                                    className="w-full gap-2 mt-2 cursor-pointer"
                                    disabled={isSubmitting}
                                >
                                    {isSubmitting ? (
                                        <>Enviando... <Loader2 className="w-4 h-4 animate-spin" /></>
                                    ) : isSuccess ? (
                                        <>Mensagem Enviada! <CheckCircle className="w-4 h-4" /></>
                                    ) : (
                                        <>Enviar Mensagem <Send className="w-4 h-4" /></>
                                    )}
                                </Button>

                                {isSuccess && (
                                    <div className="bg-green-500/10 border border-green-500/20 rounded-lg p-3 mt-4 flex items-center gap-2 text-green-400 text-sm animate-in fade-in slide-in-from-bottom-2">
                                        <CheckCircle className="w-4 h-4 shrink-0" />
                                        <p>Sucesso! A conversa será aberta no WhatsApp.</p>
                                    </div>
                                )}
                            </form>
                        </GlassContainer>
                    </div>
                </div>
            </main>

            <Footer />
        </div>
    );
}
