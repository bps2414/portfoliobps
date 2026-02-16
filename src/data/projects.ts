import { Project } from "@/types";

export const projects: Project[] = [
    {
        title: "White-Label SaaS Engine",
        desc: "Plataforma multi-tenant que permite o deploy instantâneo de e-commerces para restaurantes. Utiliza arquitetura 'Single-Repo' com injeção estática de temas (Static Injection) e isolamento total de dados por cliente via Postgres (Neon).",
        tags: ["Node.js", "TypeScript", "Docker", "Prisma", "CI/CD", "System Design"],
        imageColor: "bg-blue-500", // Para passar ar de tecnologia/confiança
        link: "#", // Placeholder
        gradient: "bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900",
        icon: "Server",
        screenshots: [], // No screenshots provided yet
        techDetails: {
            frontend: "Next.js 15 (App Router), Tailwind CSS v4, Static Theme Injection",
            backend: "Node.js + TypeScript, Express.js, JWT, Zod Validation",
            database: "Prisma ORM, Neon (PostgreSQL Serverless), Multi-Tenant Isolation",
            infra: "Docker, Render, CI/CD, Single-Branch Architecture"
        }
    },
    {
        title: "Burguer House",
        desc: "Aplicação real de delivery com foco em alta conversão. Interface imersiva 'Glow & Glass', integração direta com WhatsApp API e otimização de performance (Lighthouse 100). Uma instância rodando sobre a minha SaaS Engine.",
        tags: ["Next.js", "Tailwind v4", "UX/UI", "Glassmorphism", "Conversion"],
        imageColor: "bg-amber-500", // Para remeter a comida/fogo/lampião
        link: "https://hamburgueriavitri.onrender.com",
        coverImage: "/projects/burguerhouse/home1.png", // Reusing existing asset
        screenshots: [
            { title: "Home Page", src: "/projects/burguerhouse/home.png" },
            { title: "Menu Interativo", src: "/projects/burguerhouse/menu.png" },
            { title: "Admin Dashboard", src: "/projects/burguerhouse/admin.png" },
            { title: "Sobre", src: "/projects/burguerhouse/about.png" },
            { title: "Contato", src: "/projects/burguerhouse/contact.png" },
        ],
        techDetails: {
            frontend: "Next.js 15 (App Router), Tailwind CSS v4, Glassmorphism UI",
            backend: "Node.js + TypeScript (SaaS Backend Integration)",
            database: "PostgreSQL (Managed via SaaS Engine)",
            infra: "Deployed on SaaS Instance (Render)"
        }
    }
];
