export interface Project {
    title: string;
    desc: string;
    tags: string[];
    imageColor: string;
    link: string;
    coverImage?: string;
    gradient?: string;
    icon?: "Server" | "Store";
    screenshots: { title: string; src: string }[];
    techDetails: {
        frontend: string;
        backend: string;
        database: string;
        infra: string;
    };
}

export interface TechStackItem {
    name: string;
}

export interface Profile {
    about: string[]; // Array of paragraphs
    values: {
        title: string;
        desc: string;
        icon: "Heart" | "Globe" | "Code" | "Coffee"; // Icon mapping key
        color: string; // Tailwind color class for icon
    }[];
    techStack: string[];
}
