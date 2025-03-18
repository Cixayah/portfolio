import React, { memo } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import type { Project } from '@/types/Home';

interface ProjectsProps {
    projects: Project[];
}

// Separate ProjectItem into its own memoized component
const ProjectItem = memo(({ project, index }: { project: Project; index: number }) => {
    const { external, slug, name, image } = project;

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
            <Link
                href={external || `/projects/${slug}`}
                target={external ? "_blank" : "_self"}
                className="block relative rounded-xl overflow-hidden bg-dracula-current 
                    shadow-lg transition-all duration-200 group-hover:shadow-xl 
                    group-hover:shadow-dracula-green/20 border border-dracula-green/10"
            >
                <div className="relative aspect-video overflow-hidden">
                    <Image
                        src={image.url}
                        alt={image.alt}
                        fill
                        className="object-cover transition-transform duration-300 
                            group-hover:scale-102"
                        sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                        priority={index < 2}
                        loading={index < 2 ? "eager" : "lazy"}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-dracula-background/70 to-transparent 
                        opacity-0 group-hover:opacity-100 transition-opacity duration-200" />
                </div>

                <div className="p-6 relative bg-dracula-current/95">
                    <h3 className="text-xl text-dracula-foreground font-medium mb-2 
                        group-hover:text-dracula-green transition-colors duration-200">
                        {name}
                    </h3>

                    <div className="absolute top-4 right-4 w-8 h-8 rounded-full 
                        bg-gradient-to-r from-dracula-green to-dracula-green/50
                        text-dracula-foreground flex items-center justify-center 
                        text-sm font-medium opacity-90 group-hover:opacity-100 
                        transition-all duration-200">
                        {index + 1}
                    </div>
                </div>
            </Link>
        </motion.li>
    );
});

ProjectItem.displayName = 'ProjectItem';

export const Projects = ({ projects }: ProjectsProps) => {
    return (
        <section className="py-10 px-4 md:px-8 bg-dracula-background min-h-screen">
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
                    className="text-4xl sm:text-5xl text-dracula-foreground font-light mb-12 text-center"
                >
                    My recent{' '}
                    <span className="font-bold text-dracula-pink bg-gradient-to-r from-dracula-pink to-dracula-green/90 bg-clip-text text-transparent">
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