import React, { memo } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { ExternalLink, Github } from 'lucide-react';

// Tipos TypeScript
interface Project {
    slug: string;
    name: string;
    external: string;
    repository?: string; // Link do repositório GitHub
    image: {
        url: string;
        alt: string;
    };
}

interface ProjectsProps {
    projects: Project[];
}

// Dados atualizados com repositórios GitHub
const projectsData: Project[] = [
    {
        slug: "linktree",
        name: "LinkTree",
        external: "https://ttvcixayah.vercel.app",
        repository: "https://github.com/Cixayah/ttvcixayah", // Assumindo baseado no domínio
        image: {
            url: "https://img001.prntscr.com/file/img001/4Jz3M18BQlW0liHJ8ALBPw.png",
            alt: "A link tree, the main icon is a cat biting a Gengar plush"
        }
    },
    {
        slug: "pokedex",
        name: "Pokédex",
        external: "https://cixayah.github.io/pokedex/",
        repository: "https://github.com/Cixayah/pokedex",
        image: {
            url: "https://img001.prntscr.com/file/img001/xurDZK4YQ1aqKm5UuIOFzA.png",
            alt: "Pokédex with Gengar"
        }
    },
    {
        slug: "todo-list",
        name: "TODO List",
        external: "https://cix.up.railway.app",
        repository: "https://github.com/Cixayah/todo-list", // Assumindo
        image: {
            url: "https://lh3.googleusercontent.com/pw/AP1GczPGMe-3JPrMnw84I_tpqMf7myMPJTH4ejvFgrAYwh8xMxsosuPvlA56dZWTZrSfC-jroin8eagW4li56_60H6cTf0H1sg6X38GqBoHglDgfdlXRCH8sOieo3Ji_m7sj6TqgmwTxGWIEV5tyg0y8XmUX=w400-h434-s-no-gm?authuser=0",
            alt: "TODO List Screenshot"
        }
    },
    {
        slug: "auth-jwt",
        name: "Auth JWT",
        external: "https://cixayah.github.io/html-jwt/",
        repository: "https://github.com/Cixayah/html-jwt",
        image: {
            url: "https://lh3.googleusercontent.com/pw/AP1GczP30zKTN_hIt9YHlBZoEF83yTBht-sOFYCD_ybAjcz-6aZ_5FKS2z7RTyTabwcRUlhVzOvbFYjKUtJNJiSevT4U66hmcnNEiPqalJJ2GbShgk9VQm_oZVUtKTM0yGAty7g3tXpPhcwZP3cHm_YGejtVig=w418-h476-s-no-gm?authuser=0",
            alt: "A Login with a white background and a form with email and password fields"
        }
    },
    {
        slug: "hungar-bot-discord",
        name: "Hungar - Discord Bot",
        external: "https://github.com/Cixayah/Hungar", // Este já é o repositório
        repository: "https://github.com/Cixayah/Hungar",
        image: {
            url: "https://lh3.googleusercontent.com/pw/AP1GczN9ztE-DjykOS9quWvPCPgDlJHjxB8vtsmEzHGJWwN41OBUrQM-l64mVyKk_CguDZj-cPbk7e33MHS4uHNGjg1PyZHuZT8SHIdMoK35EVbBIfmQYvC3bfRMvVqh2H6tstUzTq-62vwXJ6DK-gvsbZgG=w362-h343-s-no-gm?authuser=0",
            alt: "Hungar bot photo, with Gengar in black and without background"
        }
    },
    {
        slug: "my-expenses-flash",
        name: "My Expenses - Flask",
        external: "https://meus-gastos-two.vercel.app/",
        repository: "https://github.com/Cixayah/meus-gastos", // Assumindo
        image: {
            url: "https://lh3.googleusercontent.com/pw/AP1GczN4IpdHij9AGb86fT4kAeOcSMpQ7rFf87a3jjAl5C6GT7ctabo8t5hjabry3Peq7KSkOSzlyqt-m4eG41-2BZW1fTyZx3Vim_LKXIVAspoWveJfImVvbzRNHE1l_xcvUickZMKg0LaTegjN-Hq0OpfJ=w626-h590-s-no-gm?authuser=0",
            alt: "Interface with colorful theme, with description, value, and email fields"
        }
    },
    {
        slug: "csharp-project",
        name: "Crud in C# Windows Forms",
        external: "https://github.com/Cixayah/cs-sales-control", // Este já é o repositório
        repository: "https://github.com/Cixayah/cs-sales-control",
        image: {
            url: "https://lh3.googleusercontent.com/pw/AP1GczPPG0D4pfGLCarqIMOLyCYM1AXW5FBJ-T9ALdJ0et9ty7E94IBYFV3LfqONR5DuSH57pcIMivDPHKW6abyfTEHOJQEb_nVJzpz74EAE6eIYM9JABrUFr-Tc6y2Eeu-WOxde8zfhoGFt9ls201G8Mq4B=w316-h320-s-no-gm?authuser=0",
            alt: "Interface application, with a form with name, email, and phone fields"
        }
    },
    {
        slug: "gym-cix",
        name: "Gym Cix - Website",
        external: "https://gym-cix.vercel.app",
        repository: "https://github.com/Cixayah/gym-cix", // Assumindo
        image: {
            url: "https://lh3.googleusercontent.com/pw/AP1GczPuYznPdgAggDAliUUcn00zaFNC_zEU5jqOz-UpV7RHtG0TPgdosOUTmFw7zJFztY-EEmtIO7dvaKBq_cyPenwN35pWq-GHyXDHvONvt1L8mOWe8QDK4aa4Z5GYfWu2z8cVb8kth5sPbj-LUxt1WU7S=w500-h500-s-no-gm?authuser=0",
            alt: "A website developed for a fictitious gym"
        }
    },
    {
        slug: "cixtema-customer-web-system",
        name: "Cixtema - Customer Web System",
        external: "https://cixtema.vercel.app",
        repository: "https://github.com/Cixayah/cixtema", // Assumindo
        image: {
            url: "https://lh3.googleusercontent.com/pw/AP1GczNIfxsm3DDRGlUpOQY5Hc9wnhoU-9YEwOOLkLYtYlkY2qTb4Sh1q1WjdLyKE07GEZHGgW4_bRiNIPR0YZIA-zKrBbWxkjfWldPOu25ndJITPMl7w7HYuz4tztxv0WHZ7QenoR7S17XuD7RkUgl4AMwyQQ=w660-h645-s-no-gm?authuser=0",
            alt: "A website developed for customer registrations"
        }
    }
];

// Separate ProjectItem into its own memoized component
const ProjectItem = memo(({ project, index }: { project: Project; index: number }) => {
    const { external, repository, name, image } = project;

    // Determina se external é um site ou repositório baseado na URL
    const isExternalSite = external && !external.includes('github.com');
    const hasRepository = repository && repository !== external;

    return (
        <motion.li
            variants={{
                hidden: { opacity: 0, y: 20, scale: 0.98 },
                visible: {
                    opacity: 1,
                    y: 0,
                    scale: 1,
                    transition: { type: "easeOut", duration: 0.3 }
                }
            }}
            whileHover={{
                y: -5,
                transition: { duration: 0.2 }
            }}
            className="group relative"
        >
            <div className="block relative rounded-xl overflow-hidden bg-gray-900 
                shadow-lg transition-all duration-200 group-hover:shadow-xl 
                group-hover:shadow-green-500/20 border border-green-500/10">

                <div className="relative aspect-video overflow-hidden">
                    <img
                        src={image.url}
                        alt={image.alt}
                        className="w-full h-full object-cover transition-transform duration-300 
                            group-hover:scale-102"
                        loading={index < 2 ? "eager" : "lazy"}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-gray-900/70 to-transparent 
                        opacity-0 group-hover:opacity-100 transition-opacity duration-200" />
                </div>

                <div className="p-6 relative bg-gray-900/95">
                    <h3 className="text-xl text-white font-medium mb-4 
                        group-hover:text-green-400 transition-colors duration-200">
                        {name}
                    </h3>

                    {/* Links Section */}
                    <div className="flex gap-3 mt-4">
                        {isExternalSite && (
                            <Link
                                href={external}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex items-center gap-2 px-4 py-2 bg-green-600 hover:bg-green-500 
                                    text-white rounded-lg transition-all duration-200 text-sm font-medium
                                    hover:scale-105 active:scale-95"
                                onClick={(e) => e.stopPropagation()}
                            >
                                <ExternalLink size={16} />
                                <span>Site</span>
                            </Link>
                        )}

                        {(hasRepository || !isExternalSite) && (
                            <Link
                                href={repository || external}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex items-center gap-2 px-4 py-2 bg-gray-700 hover:bg-gray-600 
                                    text-white rounded-lg transition-all duration-200 text-sm font-medium
                                    hover:scale-105 active:scale-95"
                                onClick={(e) => e.stopPropagation()}
                            >
                                <Github size={16} />
                                <span>GitHub</span>
                            </Link>
                        )}
                    </div>

                    <div className="absolute top-4 right-4 w-8 h-8 rounded-full 
                        bg-gradient-to-r from-green-500 to-green-400
                        text-white flex items-center justify-center 
                        text-sm font-medium opacity-90 group-hover:opacity-100 
                        transition-all duration-200">
                        {index + 1}
                    </div>
                </div>
            </div>
        </motion.li>
    );
});

ProjectItem.displayName = 'ProjectItem';

export const Projects = ({ projects = projectsData }: ProjectsProps) => {
    return (
        <section className="py-10 px-4 md:px-8 bg-gray-950 min-h-screen">
            <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.05 }}
                variants={{
                    hidden: { opacity: 0 },
                    visible: {
                        opacity: 1,
                        transition: { staggerChildren: 0.1 }
                    }
                }}
                className="max-w-7xl mx-auto"
            >
                <motion.h2
                    variants={{
                        hidden: { opacity: 0, y: 20 },
                        visible: {
                            opacity: 1,
                            y: 0,
                            transition: { duration: 0.3 }
                        }
                    }}
                    className="text-4xl sm:text-5xl text-white font-light mb-12 text-center"
                >
                    My recent{' '}
                    <span className="font-bold text-pink-400 bg-gradient-to-r from-pink-400 to-green-400 bg-clip-text text-transparent">
                        projects
                    </span>
                </motion.h2>

                <motion.ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {projects.map((project, index) => (
                        <ProjectItem
                            key={project.slug}
                            project={project}
                            index={index}
                        />
                    ))}
                </motion.ul>
            </motion.div>
        </section>
    );
};

export default memo(Projects);