"use client";

import Link from "next/link";
import { ArrowLeft, Code, Cpu, Globe, Zap, Heart, Coffee } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { GlassContainer } from "@/components/ui/GlassContainer";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";

import { profile } from "@/data/profile";
import { type Profile } from "@/types";

export default function About() {
    return (
        <div className="min-h-screen flex flex-col bg-background relative">
            <div className="absolute top-20 left-0 w-[500px] h-[500px] bg-purple-500/10 rounded-full blur-[150px] -z-10" />
            <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-primary/10 rounded-full blur-[150px] -z-10" />

            <Header />

            <main className="flex-grow pt-32 pb-20 px-6 container mx-auto">
                <div className="mb-12">
                    <Link href="/">
                        <Button variant="ghost" size="sm" className="mb-6 pl-0 hover:bg-transparent hover:text-primary gap-2">
                            <ArrowLeft className="w-4 h-4" /> Voltar para Home
                        </Button>
                    </Link>
                    <h1 className="text-4xl md:text-5xl font-bold mb-4">Sobre Mim</h1>
                    <p className="text-xl text-white/60 max-w-2xl">
                        Mais que código, crio experiências. Bem-vindo ao meu mundo &quot;Vibecode&quot;.
                    </p>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                    {/* Bio Section */}
                    <div className="lg:col-span-2 space-y-8">
                        <GlassContainer className="p-8">
                            <h2 className="text-2xl font-bold mb-4 flex items-center gap-2">
                                <Zap className="text-primary" /> Minha Jornada
                            </h2>
                            <div className="space-y-4 text-white/80 leading-relaxed">
                                {profile.about.map((paragraph, index) => (
                                    <p key={index}>{paragraph}</p>
                                ))}
                            </div>
                        </GlassContainer>

                        <GlassContainer className="p-8">
                            <h2 className="text-2xl font-bold mb-6 flex items-center gap-2">
                                <Cpu className="text-primary" /> O que me move
                            </h2>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                {profile.values.map((value, index) => {
                                    const IconComponent = {
                                        Heart: Heart,
                                        Globe: Globe,
                                        Code: Code,
                                        Coffee: Coffee
                                    }[value.icon];

                                    return (
                                        <div key={index} className="flex gap-4">
                                            <div className="p-3 bg-white/5 rounded-lg h-fit">
                                                <IconComponent className={`w-6 h-6 ${value.color}`} />
                                            </div>
                                            <div>
                                                <h3 className="font-bold mb-1">{value.title}</h3>
                                                <p className="text-sm text-white/60">{value.desc}</p>
                                            </div>
                                        </div>
                                    );
                                })}
                            </div>
                        </GlassContainer>
                    </div>

                    {/* Tech Stack Sidebar */}
                    <div className="space-y-6">
                        <GlassContainer className="p-6">
                            <h3 className="text-xl font-bold mb-4">Minha Stack</h3>
                            <div className="flex flex-wrap gap-2">
                                {profile.techStack.map(tech => (
                                    <span key={tech} className="px-3 py-1 bg-white/5 border border-white/10 rounded-full text-sm text-white/70 hover:bg-primary/20 hover:text-primary hover:border-primary/30 transition-all cursor-default">
                                        {tech}
                                    </span>
                                ))}
                            </div>
                        </GlassContainer>

                        <GlassContainer className="p-6 bg-gradient-to-br from-primary/10 to-transparent border-primary/20">
                            <h3 className="text-xl font-bold mb-2">Vamos conversar?</h3>
                            <p className="text-white/60 text-sm mb-4">
                                Tem uma ideia insana ou precisa de um dev que resolva? Estou pronto.
                            </p>
                            <Link href="/contact" className="w-full">
                                <Button className="w-full">Entre em Contato</Button>
                            </Link>
                        </GlassContainer>
                    </div>
                </div>
            </main>

            <Footer />
        </div>
    );
}
