# PORTFOLIO_CONTEXT_DUMP.md

> **Gerado em:** 2026-02-16T16:56:00-03:00
> **Propósito:** Snapshot completo do estado do projeto para migração de conhecimento (NotebookLM).

---

## 1. IDENTIDADE DO PROJETO

- **Nome:** `nexo-portfolio`
- **Versão:** `0.1.0`
- **Autor:** Bryan Souza (bryanpsouza123@gmail.com)
- **Marca:** Nexo Digital (nexodigital.dev)
- **Objetivo:** Portfólio pessoal premium com design "Glow & Glass" (Glassmorphism + Neon). Showcase de projetos web criados para clientes do ramo alimentício (restaurantes, hamburguerias).
- **Idioma da UI:** Português Brasileiro (`lang="pt-BR"`)
- **Repo:** `https://github.com/bps2414/portfoliobps.git`
- **Deploy:** Vercel / Netlify / Render (Ready)

### Stack Principal

| Camada      | Tecnologia                       | Versão    |
|-------------|----------------------------------|-----------|
| Framework   | Next.js (App Router)             | 15.1.11   |
| UI Library  | React                            | 19.0.0    |
| Linguagem   | TypeScript                       | ^5.0.0    |
| Estilização | Tailwind CSS (CSS-first, v4)     | ^4.0.0    |
| Animações   | Framer Motion                    | ^12.34.0  |
| Ícones      | Lucide React                     | ^0.564.0  |
| Utilitários | clsx + tailwind-merge            | ^2.1.1 / ^3.4.1 |
| PostCSS     | @tailwindcss/postcss             | ^4.0.0    |
| Lint        | ESLint + eslint-config-next      | ^9.0.0 / ^16.1.6 |
| Fonte       | Google Fonts (Inter)             | via next/font |

### Design System: "Glow & Glass"

- **Background:** `#0a0a0a` (quase preto)
- **Foreground:** `#ededed` (off-white)
- **Primary (Accent):** `#f59f0a` (amber/gold)
- **Surface:** `rgba(255, 255, 255, 0.05)`
- **Efeitos:** Glassmorphism (`backdrop-blur-md bg-white/5 border border-white/10`), Neon glow (`text-shadow`, `box-shadow` com primary)
- **Tipografia:** Inter (Google Fonts)

---

## 2. RAIO-X DA INFRAESTRUTURA

### package.json

```json
{
  "name": "nexo-portfolio",
  "version": "0.1.0",
  "private": true,
  "scripts": {
    "dev": "next dev",
    "build": "next build",
    "start": "next start",
    "lint": "eslint ."
  },
  "dependencies": {
    "clsx": "^2.1.1",
    "framer-motion": "^12.34.0",
    "lucide-react": "^0.564.0",
    "next": "15.1.11",
    "react": "^19.0.0",
    "react-dom": "^19.0.0",
    "tailwind-merge": "^3.4.1"
  },
  "devDependencies": {
    "@tailwindcss/postcss": "^4.0.0",
    "@types/node": "^20.0.0",
    "@types/react": "^19.0.0",
    "@types/react-dom": "^19.0.0",
    "es-abstract": "^1.24.1",
    "eslint": "^9.0.0",
    "eslint-config-next": "^16.1.6",
    "tailwindcss": "^4.0.0",
    "typescript": "^5.0.0"
  }
}
```

### next.config.ts

```ts
import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
};

export default nextConfig;
```

> **Nota:** Config vazia (defaults do Next.js). Sem customizações de `images`, `rewrites`, ou `redirects`.

### tsconfig.json

```json
{
  "compilerOptions": {
    "target": "ES2017",
    "lib": ["dom", "dom.iterable", "esnext"],
    "allowJs": true,
    "skipLibCheck": true,
    "strict": true,
    "noEmit": true,
    "esModuleInterop": true,
    "module": "esnext",
    "moduleResolution": "bundler",
    "resolveJsonModule": true,
    "isolatedModules": true,
    "jsx": "preserve",
    "incremental": true,
    "plugins": [{ "name": "next" }],
    "paths": {
      "@/*": ["./src/*"]
    }
  },
  "include": [
    "next-env.d.ts", "**/*.ts", "**/*.tsx",
    ".next/types/**/*.ts", ".next/dev/types/**/*.ts", "**/*.mts"
  ],
  "exclude": ["node_modules"]
}
```

> **Path Alias:** `@/*` → `./src/*`

### postcss.config.mjs

```js
const config = {
  plugins: {
    "@tailwindcss/postcss": {},
  },
};

export default config;
```

> **Nota:** Tailwind v4 usa abordagem CSS-first. **Não existe `tailwind.config.js`**. As customizações de tema são feitas via `@theme` no `globals.css`.

### eslint.config.mjs

```js
import nextCoreWebVitals from "eslint-config-next/core-web-vitals";
import nextTypescript from "eslint-config-next/typescript";

const eslintConfig = [...nextCoreWebVitals, ...nextTypescript, {
  ignores: ["node_modules/**", ".next/**", "out/**", "build/**", "next-env.d.ts"]
}];

export default eslintConfig;
```

---

## 3. MAPEAMENTO VISUAL (Tree)

```
nexo-portfolio/
├── docs/
│   └── PLAN.md                      # Plano de UX improvements (modal + form)
├── public/
│   ├── file.svg
│   ├── globe.svg
│   ├── next.svg
│   ├── vercel.svg
│   ├── window.svg
│   └── projects/                    # ← DADOS: Screenshots estáticas dos projetos
│       ├── lampiao/
│       │   ├── about.png
│       │   ├── admin.png
│       │   ├── contact.png
│       │   ├── home.png
│       │   ├── home1.png
│       │   └── menu.png
│       └── restaurante/
│           ├── about.png
│           ├── admin.png
│           ├── contact.png
│           ├── home.png
│           ├── home1.png
│           └── menu.png
├── src/
│   ├── app/
│   │   ├── about/
│   │   │   └── page.tsx             # Página "Sobre Mim"
│   │   ├── contact/
│   │   │   └── page.tsx             # Página de Contato (Form → WhatsApp)
│   │   ├── projects/
│   │   │   └── page.tsx             # Página de Projetos + Gallery Modal
│   │   ├── favicon.ico
│   │   ├── globals.css              # Design tokens + Tailwind @theme
│   │   ├── layout.tsx               # Root Layout (metadata + Inter font)
│   │   ├── not-found.tsx            # Página 404 customizada
│   │   └── page.tsx                 # Home Page (Hero + Skills + Featured)
│   ├── components/
│   │   ├── layout/
│   │   │   ├── Header.tsx           # Header fixo com glass on scroll + mobile menu
│   │   │   └── Footer.tsx           # Footer com links sociais (GitHub, LinkedIn)
│   │   └── ui/
│   │       ├── Button.tsx           # Componente Button polimórfico (Link ou button)
│   │       └── GlassContainer.tsx   # Container glassmorphism reutilizável
│   └── lib/
│       └── utils.ts                 # cn() helper (clsx + tailwind-merge)
├── testsprite_tests/                # Pasta de testes gerados por TestSprite
├── next.config.ts
├── tsconfig.json
├── postcss.config.mjs
├── eslint.config.mjs
├── package.json
└── README.md
```

### Onde ficam os dados?

| Tipo           | Localização                      | Formato               |
|----------------|----------------------------------|-----------------------|
| Projetos       | `public/projects/{nome}/`        | Imagens PNG estáticas |
| Dados de projetos | `src/app/projects/page.tsx`   | Array hardcoded `const projects: Project[]` |
| Info de contato | `src/app/contact/page.tsx`      | Hardcoded (email, WhatsApp, localização)    |
| Stack / Bio    | `src/app/about/page.tsx`         | Hardcoded em JSX      |

> **Não existe CMS, MDX, ou banco de dados.** Todos os dados são estáticos e hardcoded no código.

---

## 4. ANÁLISE DO ANTIGRAVITY KIT LOCAL

### Skills Ativas (37 pastas em `.agent/skills/`)

```
api-patterns          architecture          bash-linux
behavioral-modes      brainstorming         clean-code
code-review-checklist database-design       deployment-procedures
documentation-templates frontend-design     game-development
geo-fundamentals      i18n-localization     intelligent-routing
lint-and-validate     mcp-builder           mobile-design
nextjs-react-expert   nodejs-best-practices parallel-agents
performance-profiling plan-writing          powershell-windows
python-patterns       red-team-tactics      rust-pro
seo-fundamentals      server-management     systematic-debugging
tailwind-patterns     tdd-workflow          testing-patterns
vulnerability-scanner web-design-guidelines webapp-testing
app-builder
```

### Agents Disponíveis (20 arquivos em `.agent/agents/`)

```
backend-specialist    code-archaeologist    database-architect
debugger              devops-engineer       documentation-writer
explorer-agent        frontend-specialist   game-developer
mobile-developer      orchestrator          penetration-tester
performance-optimizer product-manager       product-owner
project-planner       qa-automation-engineer security-auditor
seo-specialist        test-engineer
```

### Regras Customizadas (`GEMINI.md` - Resumo)

- **Request Classifier:** Classifica requests em QUESTION, SURVEY, SIMPLE CODE, COMPLEX CODE, DESIGN/UI, SLASH CMD.
- **Intelligent Agent Routing:** Auto-seleciona o agente especialista antes de qualquer resposta de código.
- **Socratic Gate:** Obrigatório para requests complexas — mínimo 3 perguntas antes de implementar.
- **Tier 0 (Universal):** Clean Code, File Dependency Awareness, Read→Understand→Apply.
- **Tier 1 (Code):** Project Type Routing (Mobile vs Web vs Backend), Gemini Mode Mapping.
- **Purple Ban:** Proibido usar cores violeta/roxas (regra dos agents de design).
- **Template Ban:** Não usar layouts genéricos/padrão.
- **Final Checklist:** Scripts de verificação (`security_scan.py`, `lint_runner.py`, etc.)

### User Global Rules (Memory)

- **Respostas SEMPRE em Português Brasileiro.**
- **Single Branch Strategy:** Opera em `main` apenas. Sem branches de longa duração.
- **Themes:** `themes/{tema}` é fonte da verdade. Pasta `/public` é volátil (gerada por `select-theme.js`).
  - `themes/restaurante` — padrão
  - `themes/hamburgueria` — alternativo
- **Cross-theme HTML fixes:** Ao editar HTML de um tema, aplicar em TODOS.

---

## 5. AMOSTRAGEM DE CÓDIGO (Core)

### src/app/layout.tsx (Root Layout)

```tsx
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Nexo Digital | Glow & Glass Portfolio",
  description: "Portfolio premium com design em glassmorphism e neon.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body className={`${inter.variable} antialiased bg-black text-white`}>
        {children}
      </body>
    </html>
  );
}
```

### src/app/globals.css (Design Tokens)

```css
@import "tailwindcss";

@theme {
  --color-primary: #f59f0a;
  --color-background: #0a0a0a;
  --color-surface: rgba(255, 255, 255, 0.05);
  --font-sans: var(--font-inter);
}

:root {
  --background: #0a0a0a;
  --foreground: #ededed;
}

body {
  background: var(--background);
  color: var(--foreground);
  font-family: var(--font-inter), sans-serif;
  overflow-x: hidden;
}

.glass {
  @apply backdrop-blur-md bg-white/5 border border-white/10;
}

.glass-hover {
  @apply hover:bg-white/10 transition-colors duration-300;
}

.text-glow {
  text-shadow: 0 0 20px rgba(245, 159, 10, 0.5);
}

/* Custom Scrollbar */
.custom-scrollbar::-webkit-scrollbar { width: 8px; }
.custom-scrollbar::-webkit-scrollbar-track { background: rgba(255, 255, 255, 0.05); }
.custom-scrollbar::-webkit-scrollbar-thumb { background: rgba(255, 255, 255, 0.2); border-radius: 4px; }
.custom-scrollbar::-webkit-scrollbar-thumb:hover { background: rgba(255, 255, 255, 0.3); }
```

### src/app/page.tsx (Home Page)

```tsx
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
          <span className="inline-block py-1 px-3 rounded-full bg-white/5 border border-white/10 text-primary text-sm font-medium mb-6 glass">
            Desenvolvedor Web & UI Designer
          </span>

          <h1 className="text-5xl md:text-7xl font-bold mb-6 tracking-tight">
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

        {/* Featured Projects Preview — 2 cards com imagem, hover effects, CTA */}
      </main>

      <Footer />
    </div>
  );
}
```

### src/components/layout/Header.tsx

```tsx
"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/Button";

export function Header() {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => setIsScrolled(window.scrollY > 50);
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const navLinks = [
        { name: "Home", href: "/" },
        { name: "Projetos", href: "/#projects" },
        { name: "Sobre", href: "/about" },
        { name: "Contato", href: "/contact" },
    ];

    return (
        <header className={cn(
            "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
            isScrolled ? "py-4 bg-black/50 backdrop-blur-lg border-b border-white/5" : "py-6 bg-transparent"
        )}>
            <div className="container mx-auto px-6 flex items-center justify-between">
                <Link href="/" className="text-2xl font-bold tracking-tighter text-white">
                    Nexo<span className="text-primary">.</span>
                </Link>
                {/* Desktop Nav + Mobile Nav com toggle */}
            </div>
        </header>
    );
}
```

### src/components/ui/Button.tsx (Componente Polimórfico)

```tsx
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
            variant === "primary" && "bg-primary text-black hover:bg-primary/90 shadow-[0_0_20px_rgba(245,159,10,0.3)] hover:shadow-[0_0_30px_rgba(245,159,10,0.5)]",
            variant === "secondary" && "bg-white/5 border border-white/10 text-white hover:bg-white/10 backdrop-blur-md",
            variant === "ghost" && "bg-transparent text-white/70 hover:text-white hover:bg-white/5",
            size === "sm" && "h-9 px-4 text-sm",
            size === "md" && "h-11 px-6 text-base",
            size === "lg" && "h-14 px-8 text-lg",
            className
        );

        if (href) {
            return <Link href={href} target={target} className={styles} {...(props as any)}>{props.children}</Link>;
        }
        return <button ref={ref} className={styles} {...props} />;
    }
);

Button.displayName = "Button";
export { Button };
```

### src/components/ui/GlassContainer.tsx

```tsx
import { cn } from "@/lib/utils";
import { ReactNode } from "react";

interface GlassContainerProps {
    children: ReactNode;
    className?: string;
    hoverEffect?: boolean;
}

export function GlassContainer({ children, className, hoverEffect = false }: GlassContainerProps) {
    return (
        <div className={cn(
            "backdrop-blur-md bg-white/5 border border-white/10 rounded-2xl shadow-lg",
            hoverEffect && "hover:bg-white/10 transition-colors duration-300",
            className
        )}>
            {children}
        </div>
    );
}
```

### src/lib/utils.ts

```ts
import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
    return twMerge(clsx(inputs));
}
```

### src/app/projects/page.tsx (Resumo — 319 linhas)

- **Dados hardcoded:** Array `const projects: Project[]` com 2 projetos ("Restaurante Sabor & Arte" e "Lampião Burguer").
- **Interface `Project`:** `{ title, desc, tags, imageColor, link, coverImage, screenshots[], techDetails{frontend, backend, database, infra} }`
- **UI:** Grid de cards + Modal de galeria com carrossel horizontal (Framer Motion `AnimatePresence`), thumbnails, e painel lateral de specs.
- **Interação:** `openGallery()`, `nextImage()`, `prevImage()` com state management.

### src/app/contact/page.tsx (Resumo — 198 linhas)

- **Form fields:** Nome, Nome do Restaurante, Email (com validação regex), Mensagem.
- **Submit:** Monta texto → Abre WhatsApp via `wa.me` API.
- **Número WhatsApp hardcoded:** `5521987783382`
- **UX:** Loading spinner, success message com auto-dismiss (5s), email validation inline.
- **Info de contato exibida:** Email (bryanpsouza123@gmail.com), WhatsApp (+55 21 98778-3382), Localização (Rio de Janeiro, RJ).

### src/app/about/page.tsx (Resumo — 134 linhas)

- **Seções:** Bio/Jornada pessoal, "O que me move" (4 cards motivacionais), Stack sidebar, CTA para contato.
- **Stack listada:** Next.js, React, TypeScript, Tailwind CSS, Node.js, PostgreSQL, Stitch, Framer Motion, Git, Vercel.
- **Estilo narrativo:** "Vibecode" — autodidata, foco em resultados.

### src/app/not-found.tsx (32 linhas)

- Página 404 customizada com gradient text e CTA para voltar à Home.

---

## 6. ROTAS DA APLICAÇÃO

| Rota        | Arquivo                        | Descrição                    |
|-------------|--------------------------------|------------------------------|
| `/`         | `src/app/page.tsx`             | Home (Hero + Skills + Featured Projects) |
| `/about`    | `src/app/about/page.tsx`       | Sobre Mim (Bio + Stack)     |
| `/projects` | `src/app/projects/page.tsx`    | Projetos (Cards + Gallery Modal) |
| `/contact`  | `src/app/contact/page.tsx`     | Contato (Form → WhatsApp)   |
| `404`       | `src/app/not-found.tsx`        | Página Não Encontrada        |

---

## 7. PADRÕES DE CÓDIGO IDENTIFICADOS

1. **Todas as pages são `"use client"`** — Nenhuma server component page. Tudo roda no client.
2. **Layout pattern:** Cada page repete `<Header />` + `<main>` + `<Footer />`. Não está centralizado no layout.
3. **Componentes UI:** Apenas 2 (`Button`, `GlassContainer`). Todos usam `cn()` helper.
4. **Sem data fetching:** Zero API calls, zero `fetch`, zero `getServerSideProps`. Tudo estático.
5. **Sem estado global:** Sem Context API, Redux, Zustand, etc.
6. **Sem testes unitários:** `testsprite_tests/` existe mas contém apenas output gerado por TestSprite (IA de testes).
7. **Sem i18n:** Conteúdo fixo em PT-BR.
8. **Sem dark/light mode toggle:** Always dark.

---

## 8. PLANO DE MELHORIAS PRÉ-EXISTENTE (docs/PLAN.md)

- **Status:** Implementado parcialmente.
- **Foco 1:** Correção do modal de projetos para que screenshots de página inteira sejam scrolláveis (já implementado — usa `overflow-y-auto custom-scrollbar` com `width={1920} height={1080}` e `w-full h-auto`).
- **Foco 2:** Campo "Nome do Restaurante" no formulário de contato (já implementado).

---

*Fim do Context Dump. Arquivo gerado automaticamente para migração de sessão.*
