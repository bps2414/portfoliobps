"use client";

import Link from "next/link";
import { ArrowLeft, Code, Cpu, Globe, Zap, Heart, Coffee } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { GlassContainer } from "@/components/ui/GlassContainer";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";

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
                        Mais que código, crio experiências. Bem-vindo ao meu mundo "Vibecode".
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
                                <p>
                                    Não sou apenas um desenvolvedor; sou um criador apaixonado. Minha jornada não começou em salas de aula tradicionais, mas na curiosidade insaciável de entender como as coisas funcionam na web.
                                </p>
                                <p>
                                    Adoto o estilo <strong>"Vibecode"</strong>: programar não é apenas lógica, é fluxo, é arte e é resolver problemas reais com criatividade. Sou autodidata, movido a desafios e constantemente explorando novas tecnologias para tirar ideias do papel.
                                </p>
                                <p>
                                    Meu foco é entregar aplicações que não apenas funcionam, mas que encantam. Seja um sistema de delivery complexo ou uma landing page imersiva, coloco minha energia em cada detalhe, do pixel perfect ao código limpo.
                                </p>
                            </div>
                        </GlassContainer>

                        <GlassContainer className="p-8">
                            <h2 className="text-2xl font-bold mb-6 flex items-center gap-2">
                                <Cpu className="text-primary" /> O que me move
                            </h2>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <div className="flex gap-4">
                                    <div className="p-3 bg-white/5 rounded-lg h-fit">
                                        <Heart className="w-6 h-6 text-red-400" />
                                    </div>
                                    <div>
                                        <h3 className="font-bold mb-1">Paixão por Criar</h3>
                                        <p className="text-sm text-white/60">
                                            A satisfação de ver um projeto ganhar vida é o que me motiva todos os dias.
                                        </p>
                                    </div>
                                </div>
                                <div className="flex gap-4">
                                    <div className="p-3 bg-white/5 rounded-lg h-fit">
                                        <Globe className="w-6 h-6 text-blue-400" />
                                    </div>
                                    <div>
                                        <h3 className="font-bold mb-1">Autodidatismo</h3>
                                        <p className="text-sm text-white/60">
                                            Aprendo rápido e me adapto a qualquer tecnologia necessária para o projeto.
                                        </p>
                                    </div>
                                </div>
                                <div className="flex gap-4">
                                    <div className="p-3 bg-white/5 rounded-lg h-fit">
                                        <Code className="w-6 h-6 text-green-400" />
                                    </div>
                                    <div>
                                        <h3 className="font-bold mb-1">Full Stack Real</h3>
                                        <p className="text-sm text-white/60">
                                            Do banco de dados ao frontend, entendo todo o ciclo de vida da aplicação.
                                        </p>
                                    </div>
                                </div>
                                <div className="flex gap-4">
                                    <div className="p-3 bg-white/5 rounded-lg h-fit">
                                        <Coffee className="w-6 h-6 text-yellow-400" />
                                    </div>
                                    <div>
                                        <h3 className="font-bold mb-1">Foco no Resultado</h3>
                                        <p className="text-sm text-white/60">
                                            Menos burocracia, mais código funcional e clientes satisfeitos.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </GlassContainer>
                    </div>

                    {/* Tech Stack Sidebar */}
                    <div className="space-y-6">
                        <GlassContainer className="p-6">
                            <h3 className="text-xl font-bold mb-4">Minha Stack</h3>
                            <div className="flex flex-wrap gap-2">
                                {["Next.js", "React", "TypeScript", "Tailwind CSS", "Node.js", "PostgreSQL", "Stitch", "Framer Motion", "Git", "Vercel"].map(tech => (
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
