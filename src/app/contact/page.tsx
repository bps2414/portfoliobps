"use client";

import Link from "next/link";
import { ArrowLeft, Mail, MapPin, Phone, Send } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { GlassContainer } from "@/components/ui/GlassContainer";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";

export default function Contact() {
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
                            <form
                                className="space-y-4"
                                onSubmit={(e) => {
                                    e.preventDefault();
                                    const form = e.target as HTMLFormElement;
                                    const name = (form.elements.namedItem('name') as HTMLInputElement).value;
                                    const message = (form.elements.namedItem('message') as HTMLTextAreaElement).value;

                                    const text = `Olá, meu nome é ${name}. ${message}`;
                                    const encodedText = encodeURIComponent(text);
                                    window.open(`https://wa.me/5521987783382?text=${encodedText}`, '_blank');
                                }}
                            >
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
                                        className="w-full bg-black/30 border border-white/10 rounded-lg p-3 text-white focus:outline-none focus:border-primary/50 transition-colors"
                                        placeholder="seu@email.com"
                                    />
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

                                <Button type="submit" className="w-full gap-2 mt-2 cursor-pointer">
                                    Enviar Mensagem <Send className="w-4 h-4" />
                                </Button>
                            </form>
                        </GlassContainer>
                    </div>
                </div>
            </main>

            <Footer />
        </div>
    );
}
