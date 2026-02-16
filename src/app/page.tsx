"use client";

import Link from "next/link";
import Image from "next/image";
import { ArrowRight, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { GlassContainer } from "@/components/ui/GlassContainer";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col bg-background relative overflow-hidden">
      {/* Ambient Background Glows */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[800px] bg-primary/20 rounded-full blur-[120px] -z-10 opacity-50" />
      <div className="absolute bottom-0 right-0 w-[600px] h-[600px] bg-blue-500/10 rounded-full blur-[100px] -z-10 opacity-30" />

      <Header />

      <main className="flex-grow">
        {/* Hero Section */}
        <section className="container mx-auto px-6 pt-32 pb-20 flex flex-col items-center text-center relative">
          <div className="absolute inset-0 bg-[url('/grid-pattern.svg')] opacity-10 -z-10" />

          <span className="inline-block py-1 px-3 rounded-full bg-white/5 border border-white/10 text-primary text-sm font-medium mb-6 glass">
            Desenvolvedor Web & UI Designer
          </span>

          <h1 className="text-4xl md:text-7xl font-bold mb-6 tracking-tight">
            Criando Experiências <br />
            <span className="text-glow text-transparent bg-clip-text bg-gradient-to-r from-primary to-orange-300">
              Digitais Imersivas
            </span>
          </h1>

          <p className="text-xl text-white/60 max-w-2xl mb-10 leading-relaxed">
            Transformo ideias em aplicações web de alta performance com design premium e foco na experiência do usuário.
          </p>

          <div className="flex gap-4">
            <Button size="lg" className="shadow-[0_0_30px_-10px_var(--color-primary)]" href="/projects">
              Ver Projetos <ArrowRight className="ml-2 w-4 h-4" />
            </Button>
            <Button variant="secondary" size="lg" href="/contact">
              Entre em Contato
            </Button>
          </div>
        </section>

        {/* Skills Preview */}
        <section className="py-20 border-t border-white/5 bg-white/2">
          <div className="container mx-auto px-6">
            <p className="text-center text-sm font-semibold text-white/40 uppercase tracking-widest mb-12">
              Minha Stack Tecnológica
            </p>
            <div className="flex flex-wrap justify-center gap-8 md:gap-16 opacity-70 grayscale hover:grayscale-0 transition-all duration-500">
              {["Next.js", "React", "TypeScript", "Tailwind CSS", "Framer Motion", "Stitch"].map(tech => (
                <span key={tech} className="text-xl md:text-2xl font-bold text-white/80 hover:text-primary transition-colors cursor-default">
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </section>

        {/* Featured Projects Preview */}
        <section id="projects" className="py-24 container mx-auto px-6">
          <div className="flex justify-between items-end mb-12">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-2">Projetos em Destaque</h2>
              <p className="text-white/60">Uma seleção dos meus melhores trabalhos.</p>
            </div>
            <div className="hidden md:block">
              <Button variant="ghost" className="gap-2 text-primary hover:text-primary/80" href="/projects">
                Ver Todos <ChevronRight className="w-4 h-4" />
              </Button>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Project 1 */}
            <GlassContainer className="group cursor-pointer" hoverEffect>
              <Link href="/projects" className="block h-full">
                <div className="h-48 bg-zinc-900 flex items-center justify-center relative overflow-hidden rounded-t-xl">
                  <Image
                    src="/projects/restaurante/home1.png"
                    alt="Restaurante Sabor & Arte"
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-black/20 group-hover:bg-black/0 transition-colors duration-500" />
                </div>
                <div className="p-8">
                  <h3 className="text-2xl font-bold mb-2 group-hover:text-primary transition-colors">
                    Restaurante Sabor & Arte
                  </h3>
                  <p className="text-white/60 mb-4">
                    Landing page imersiva com sistema de reservas e cardápio digital.
                  </p>
                  <span className="text-sm text-primary font-medium flex items-center gap-1">
                    Ver detalhes <ArrowRight className="w-3 h-3 group-hover:translate-x-1 transition-transform" />
                  </span>
                </div>
              </Link>
            </GlassContainer>

            {/* Project 2 */}
            <GlassContainer className="group cursor-pointer" hoverEffect>
              <Link href="/projects" className="block h-full">
                <div className="h-48 bg-zinc-900 flex items-center justify-center relative overflow-hidden rounded-t-xl">
                  <Image
                    src="/projects/lampiao/home1.png"
                    alt="Lampião Burguer"
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-black/20 group-hover:bg-black/0 transition-colors duration-500" />
                </div>
                <div className="p-8">
                  <h3 className="text-2xl font-bold mb-2 group-hover:text-primary transition-colors">
                    Lampião Burguer
                  </h3>
                  <p className="text-white/60 mb-4">
                    App de delivery completo com painel administrativo e gestão de pedidos.
                  </p>
                  <span className="text-sm text-primary font-medium flex items-center gap-1">
                    Ver detalhes <ArrowRight className="w-3 h-3 group-hover:translate-x-1 transition-transform" />
                  </span>
                </div>
              </Link>
            </GlassContainer>
          </div>

          <div className="mt-8 text-center md:hidden">
            <Button variant="ghost" className="gap-2 text-primary" href="/projects">
              Ver Todos os Projetos <ChevronRight className="w-4 h-4" />
            </Button>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
