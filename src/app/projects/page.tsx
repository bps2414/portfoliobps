"use client";

import { useState } from "react";
import Link from "next/link";
import { ArrowLeft, ExternalLink, X, ChevronLeft, ChevronRight, ImageIcon } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { GlassContainer } from "@/components/ui/GlassContainer";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import Image from "next/image";
import { cn } from "@/lib/utils";
import { motion, AnimatePresence } from "framer-motion";

interface Project {
    title: string;
    desc: string;
    tags: string[];
    imageColor: string;
    link: string;
    coverImage: string;
    screenshots: { title: string; src: string }[];
    techDetails: {
        frontend: string;
        backend: string;
        database: string;
        infra: string;
    };
}

const projects: Project[] = [
    {
        title: "Restaurante Sabor & Arte",
        desc: "Landing page para restaurante com sistema de reservas integrado, cardápio digital e design imersivo.",
        tags: ["HTML5", "CSS3", "JavaScript", "Node.js", "Express"],
        imageColor: "from-green-500/20 to-green-900/20",
        link: "https://restaurante-5qze.onrender.com/",
        coverImage: "/projects/restaurante/home1.png",
        screenshots: [
            { title: "Home Page", src: "/projects/restaurante/home.png" },
            { title: "Menu Digital", src: "/projects/restaurante/menu.png" },
            { title: "Sistema de Reservas", src: "/projects/restaurante/about.png" },
            { title: "Contato", src: "/projects/restaurante/contact.png" },
            { title: "Admin Panel", src: "/projects/restaurante/admin.png" },
        ],
        techDetails: {
            frontend: "HTML5 Semântico, CSS3 (Vanilla), JavaScript (ES6+), Design Mobile-first",
            backend: "Node.js + TypeScript, Express.js, JWT, Zod Validation",
            database: "Prisma ORM (SQL), Cloudinary (Uploads)",
            infra: "Docker, Security Headers (Helmet, CORS)"
        }
    },
    {
        title: "Lampião Burguer",
        desc: "Aplicação completa de delivery com painel administrativo, gestão de pedidos em tempo real e integração com WhatsApp.",
        tags: ["Node.js", "TypeScript", "Prisma", "Docker"],
        imageColor: "from-red-500/20 to-red-900/20",
        link: "https://lampiaoburguer.onrender.com",
        coverImage: "/projects/lampiao/home1.png",
        screenshots: [
            { title: "Home Page", src: "/projects/lampiao/home.png" },
            { title: "Menu Interativo", src: "/projects/lampiao/menu.png" },
            { title: "Admin Dashboard", src: "/projects/lampiao/admin.png" },
            { title: "Sobre", src: "/projects/lampiao/about.png" },
            { title: "Contato", src: "/projects/lampiao/contact.png" },
        ],
        techDetails: {
            frontend: "HTML5 Semântico, CSS3 (Vanilla), JavaScript (ES6+), Design Mobile-first",
            backend: "Node.js + TypeScript, Express.js, JWT, Zod Validation",
            database: "Prisma ORM (SQL), Cloudinary (Uploads)",
            infra: "Docker, Security Headers (Helmet, CORS)"
        }
    }
];

export default function Projects() {
    const [selectedProject, setSelectedProject] = useState<Project | null>(null);
    const [currentImageIndex, setCurrentImageIndex] = useState(0);

    const openGallery = (project: Project) => {
        setSelectedProject(project);
        setCurrentImageIndex(0);
    };

    const nextImage = (e: React.MouseEvent) => {
        e.stopPropagation();
        if (!selectedProject) return;
        setCurrentImageIndex((prev) => (prev + 1) % selectedProject.screenshots.length);
    };

    const prevImage = (e: React.MouseEvent) => {
        e.stopPropagation();
        if (!selectedProject) return;
        setCurrentImageIndex((prev) => (prev - 1 + selectedProject.screenshots.length) % selectedProject.screenshots.length);
    };

    return (
        <div className="min-h-screen flex flex-col bg-background relative">
            <div className="absolute top-20 right-0 w-[600px] h-[600px] bg-primary/10 rounded-full blur-[150px] -z-10" />

            <Header />

            <main className="flex-grow pt-32 pb-20 px-6 container mx-auto">
                <div className="mb-12">
                    <Link href="/">
                        <Button variant="ghost" size="sm" className="mb-6 pl-0 hover:bg-transparent hover:text-primary gap-2">
                            <ArrowLeft className="w-4 h-4" /> Voltar para Home
                        </Button>
                    </Link>
                    <h1 className="text-4xl md:text-5xl font-bold mb-4">Meus Projetos</h1>
                    <p className="text-xl text-white/60 max-w-2xl">
                        Aplicações reais desenvolvidas com foco em performance e experiência do usuário.
                    </p>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                    {projects.map((project, i) => (
                        <GlassContainer key={i} className="group overflow-hidden flex flex-col h-full" hoverEffect>
                            {/* Project Header / Preview Area */}
                            <div
                                onClick={() => openGallery(project)}
                                className="h-64 relative bg-zinc-900 flex items-center justify-center overflow-hidden cursor-pointer group-hover:brightness-110 transition-all"
                            >
                                {/* Project Cover Image */}
                                <img
                                    src={project.coverImage}
                                    alt={project.title}
                                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                                />

                                {/* Subtle Overlay for depth */}
                                <div className="absolute inset-0 bg-black/20 group-hover:bg-black/0 transition-colors duration-500" />
                            </div>

                            <div className="p-8 flex flex-col flex-grow">
                                <div className="flex flex-wrap gap-2 mb-4">
                                    {project.tags.map(tag => (
                                        <span key={tag} className="text-xs font-medium px-2 py-1 bg-white/5 border border-white/10 rounded-full text-white/70">
                                            {tag}
                                        </span>
                                    ))}
                                </div>

                                <h3 className="text-2xl font-bold mb-3">{project.title}</h3>
                                <p className="text-white/60 mb-6 flex-grow">{project.desc}</p>

                                <div className="flex gap-4 mt-auto">
                                    <Button size="sm" className="gap-2 w-full" href={project.link} target="_blank">
                                        Ver Demo Online <ExternalLink className="w-3 h-3" />
                                    </Button>
                                    <Button
                                        onClick={() => openGallery(project)}
                                        variant="secondary"
                                        size="sm"
                                        className="gap-2 w-full"
                                    >
                                        Ver Detalhes <ImageIcon className="w-3 h-3" />
                                    </Button>
                                </div>
                            </div>
                        </GlassContainer>
                    ))}
                </div>
            </main>

            <Footer />

            {/* Gallery/Details Modal */}
            <AnimatePresence>
                {selectedProject && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="fixed inset-0 z-50 flex items-center justify-center bg-black/95 backdrop-blur-md p-4"
                        onClick={() => setSelectedProject(null)}
                    >
                        <div
                            className="max-w-7xl w-full h-[90vh] flex flex-col relative bg-[#0a0a0a] border border-white/10 rounded-2xl overflow-hidden shadow-2xl"
                            onClick={e => e.stopPropagation()}
                        >
                            {/* Header */}
                            <div className="flex justify-between items-center p-6 border-b border-white/10 bg-black/40 backdrop-blur-md">
                                <h3 className="text-2xl font-bold text-white">{selectedProject.title}</h3>
                                <button
                                    onClick={() => setSelectedProject(null)}
                                    className="text-white/70 hover:text-white transition-colors p-2 hover:bg-white/10 rounded-full"
                                >
                                    <X className="w-6 h-6" />
                                </button>
                            </div>

                            <div className="flex-grow flex flex-col lg:flex-row overflow-hidden">
                                {/* Left Column: Gallery */}
                                <div className="lg:w-2/3 flex flex-col border-r border-white/10 bg-zinc-900/50">
                                    {/* Main Image Viewport using custom-scrollbar */}
                                    <div className="flex-grow relative overflow-y-auto custom-scrollbar">
                                        {selectedProject.screenshots.length > 0 ? (
                                            <div className="relative min-h-full">
                                                {/* Navigation Arrows (Absolute) */}
                                                <button
                                                    onClick={prevImage}
                                                    className="absolute top-1/2 left-4 z-20 p-3 rounded-full bg-black/50 hover:bg-primary/80 text-white transition-all backdrop-blur-md border border-white/10 shadow-lg -translate-y-1/2"
                                                >
                                                    <ChevronLeft className="w-6 h-6" />
                                                </button>
                                                <button
                                                    onClick={nextImage}
                                                    className="absolute top-1/2 right-4 z-20 p-3 rounded-full bg-black/50 hover:bg-primary/80 text-white transition-all backdrop-blur-md border border-white/10 shadow-lg -translate-y-1/2"
                                                >
                                                    <ChevronRight className="w-6 h-6" />
                                                </button>

                                                <img
                                                    src={selectedProject.screenshots[currentImageIndex].src}
                                                    alt={selectedProject.screenshots[currentImageIndex].title}
                                                    className="w-full h-auto object-cover"
                                                    onError={(e) => {
                                                        e.currentTarget.style.display = 'none';
                                                        e.currentTarget.parentElement?.querySelector('.fallback')?.classList.remove('hidden');
                                                    }}
                                                />
                                                <div className="fallback hidden absolute inset-0 flex flex-col items-center justify-center text-white/50 pt-20">
                                                    <ImageIcon className="w-16 h-16 mb-4" />
                                                    <p>Imagem não encontrada: {selectedProject.screenshots[currentImageIndex].src}</p>
                                                    <p className="text-sm">(Adicione o arquivo na pasta public)</p>
                                                </div>
                                            </div>
                                        ) : (
                                            <div className="flex items-center justify-center h-full text-white/50">
                                                Nenhuma imagem disponível.
                                            </div>
                                        )}
                                    </div>

                                    {/* Thumbnails Bar */}
                                    <div className="h-20 border-t border-white/10 bg-black/40 p-2 flex gap-2 overflow-x-auto justify-center">
                                        {selectedProject.screenshots.map((shot, idx) => (
                                            <button
                                                key={idx}
                                                onClick={() => setCurrentImageIndex(idx)}
                                                className={cn(
                                                    "h-full aspect-video rounded-md overflow-hidden relative border-2 transition-all flex-shrink-0 bg-zinc-800",
                                                    currentImageIndex === idx ? "border-primary opacity-100" : "border-transparent opacity-50 hover:opacity-80"
                                                )}
                                            >
                                                <img
                                                    src={shot.src}
                                                    alt={shot.title}
                                                    className="w-full h-full object-cover"
                                                />
                                            </button>
                                        ))}
                                    </div>

                                    {/* Current Image Title */}
                                    <div className="bg-black text-center py-2 text-sm text-white/60 border-t border-white/5">
                                        {selectedProject.screenshots[currentImageIndex]?.title}
                                    </div>
                                </div>

                                {/* Right Column: Tech Specs */}
                                <div className="lg:w-1/3 overflow-y-auto custom-scrollbar p-6 bg-[#0c0c0c]">
                                    <div className="space-y-8">
                                        <div>
                                            <h4 className="text-lg font-bold text-primary mb-3 flex items-center gap-2">
                                                <span className="w-1 h-6 bg-primary rounded-full" />
                                                Sobre o Projeto
                                            </h4>
                                            <p className="text-white/70 leading-relaxed text-sm">
                                                {selectedProject.desc}
                                                <br /><br />
                                                Este projeto utiliza uma arquitetura moderna e escalável, focada em entregar a melhor performance possível sem o overhead de frameworks pesados no frontend.
                                            </p>
                                        </div>

                                        <div>
                                            <h4 className="text-lg font-bold text-primary mb-4 flex items-center gap-2">
                                                <span className="w-1 h-6 bg-primary rounded-full" />
                                                Stack Tecnológica
                                            </h4>

                                            <div className="space-y-4">
                                                <div className="bg-white/5 rounded-xl p-4 border border-white/5">
                                                    <span className="text-xs font-bold text-white/40 uppercase tracking-widest block mb-1">Frontend</span>
                                                    <p className="text-white/90 font-medium">{selectedProject.techDetails.frontend}</p>
                                                </div>

                                                <div className="bg-white/5 rounded-xl p-4 border border-white/5">
                                                    <span className="text-xs font-bold text-white/40 uppercase tracking-widest block mb-1">Backend</span>
                                                    <p className="text-white/90 font-medium">{selectedProject.techDetails.backend}</p>
                                                </div>

                                                <div className="bg-white/5 rounded-xl p-4 border border-white/5">
                                                    <span className="text-xs font-bold text-white/40 uppercase tracking-widest block mb-1">Database</span>
                                                    <p className="text-white/90 font-medium">{selectedProject.techDetails.database}</p>
                                                </div>

                                                <div className="bg-white/5 rounded-xl p-4 border border-white/5">
                                                    <span className="text-xs font-bold text-white/40 uppercase tracking-widest block mb-1">Infraestrutura</span>
                                                    <p className="text-white/90 font-medium">{selectedProject.techDetails.infra}</p>
                                                </div>
                                            </div>
                                        </div>

                                        <Button className="w-full gap-2 mt-4" size="lg" href={selectedProject.link} target="_blank">
                                            Acessar Projeto Real <ExternalLink className="w-4 h-4" />
                                        </Button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
}
