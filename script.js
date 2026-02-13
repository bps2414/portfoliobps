/* ═══════════════════════════════════════════
   Portfolio — JavaScript Interactions
   ═══════════════════════════════════════════ */

document.addEventListener('DOMContentLoaded', () => {
    // ─── DOM References ──────────────────────
    const navbar = document.getElementById('navbar');
    const navToggle = document.getElementById('navToggle');
    const navLinks = document.getElementById('navLinks');

    // Create backdrop overlay for mobile nav
    const overlay = document.createElement('div');
    overlay.className = 'nav-overlay';
    document.body.appendChild(overlay);

    // ─── 1. Navbar Scroll Effect ─────────────
    let lastScrollY = 0;

    const handleScroll = () => {
        const scrollY = window.scrollY;

        if (scrollY > 20) {
            navbar.classList.add('navbar--scrolled');
        } else {
            navbar.classList.remove('navbar--scrolled');
        }

        lastScrollY = scrollY;
    };

    window.addEventListener('scroll', handleScroll, { passive: true });

    // ─── 2. Mobile Nav Toggle ────────────────
    const toggleNav = () => {
        const isOpen = navLinks.classList.contains('is-open');

        navToggle.classList.toggle('active');
        navLinks.classList.toggle('is-open');
        overlay.classList.toggle('is-active');

        // Prevent body scroll when nav is open
        document.body.style.overflow = isOpen ? '' : 'hidden';
    };

    const closeNav = () => {
        navToggle.classList.remove('active');
        navLinks.classList.remove('is-open');
        overlay.classList.remove('is-active');
        document.body.style.overflow = '';
    };

    navToggle.addEventListener('click', toggleNav);
    overlay.addEventListener('click', closeNav);

    // Close nav when clicking a link
    navLinks.querySelectorAll('a').forEach(link => {
        link.addEventListener('click', closeNav);
    });

    // Close nav on Escape key
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape') closeNav();
    });

    // ─── 3. Smooth Scroll for Anchor Links ───
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', (e) => {
            const targetId = anchor.getAttribute('href');
            if (targetId === '#') return;

            const targetEl = document.querySelector(targetId);
            if (!targetEl) return;

            e.preventDefault();

            const navbarHeight = navbar.offsetHeight;
            const targetPosition = targetEl.getBoundingClientRect().top + window.scrollY - navbarHeight;

            window.scrollTo({
                top: targetPosition,
                behavior: 'smooth'
            });
        });
    });

    // ─── 4. Scroll Reveal Animation ──────────
    const animatedElements = document.querySelectorAll('[data-animate]');

    if ('IntersectionObserver' in window) {
        const observerOptions = {
            root: null,
            rootMargin: '0px 0px -60px 0px',
            threshold: 0.1
        };

        const observer = new IntersectionObserver((entries) => {
            entries.forEach((entry, index) => {
                if (entry.isIntersecting) {
                    // Stagger animation for grid items
                    const delay = entry.target.closest('.projects__grid, .services__grid, .team__grid')
                        ? Array.from(entry.target.parentElement.children).indexOf(entry.target) * 100
                        : 0;

                    setTimeout(() => {
                        entry.target.classList.add('is-visible');
                    }, delay);

                    observer.unobserve(entry.target);
                }
            });
        }, observerOptions);

        animatedElements.forEach(el => observer.observe(el));
    } else {
        // Fallback: just show everything
        animatedElements.forEach(el => el.classList.add('is-visible'));
    }

    // ─── 5. Active nav link highlight ────────
    const sections = document.querySelectorAll('section[id]');

    const highlightNav = () => {
        const scrollY = window.scrollY + navbar.offsetHeight + 100;

        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.offsetHeight;
            const sectionId = section.getAttribute('id');

            const navLink = navLinks.querySelector(`a[href="#${sectionId}"]`);
            if (!navLink || navLink.classList.contains('btn')) return;

            if (scrollY >= sectionTop && scrollY < sectionTop + sectionHeight) {
                navLink.classList.add('is-active');
            } else {
                navLink.classList.remove('is-active');
            }
        });
    };

    window.addEventListener('scroll', highlightNav, { passive: true });
});
