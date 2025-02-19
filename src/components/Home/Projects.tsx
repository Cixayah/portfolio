import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { Project } from '@/types/Home';

interface ProjectsProps {
    projects: Project[];
}

export const Projects = ({ projects }: ProjectsProps) => {
    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.3,
                delayChildren: 0.2
            }
        }
    };

    const projectVariants = {
        hidden: {
            opacity: 0,
            y: 50,
            scale: 0.95
        },
        visible: {
            opacity: 1,
            y: 0,
            scale: 1,
            transition: {
                type: "spring",
                stiffness: 100,
                damping: 15,
                duration: 0.6
            }
        }
    };

    return (
        <section className="py-20 px-4 md:px-8 bg-dracula-background min-h-screen">
            <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.2 }}
                variants={containerVariants}
                className="max-w-7xl mx-auto"
            >
                <motion.h2
                    variants={projectVariants}
                    className="text-4xl sm:text-6xl text-dracula-foreground font-light mb-16 text-center"
                >
                    My recent{' '}
                    <span className="font-bold text-dracula-purple italic bg-gradient-to-r from-dracula-pink to-dracula-purple bg-clip-text text-transparent">
                        projects
                    </span>
                </motion.h2>

                <motion.ul
                    variants={containerVariants}
                    className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
                >
                    {projects.map(({ external, slug, name, image }, index) => (
                        <motion.li
                            key={slug}
                            variants={projectVariants}
                            whileHover={{
                                y: -12,
                                scale: 1.02,
                                transition: { duration: 0.3 }
                            }}
                            className="group relative"
                        >
                            <Link
                                href={external || `/projects/${slug}`}
                                target={external ? "_blank" : "_self"}
                                className="block relative rounded-xl overflow-hidden bg-dracula-current 
                                    shadow-lg transition-all duration-300 group-hover:shadow-2xl 
                                    group-hover:shadow-dracula-purple/30 border border-dracula-purple/10"
                            >
                                <div className="relative aspect-video overflow-hidden">
                                    <Image
                                        src={image.url}
                                        alt={image.alt}
                                        fill
                                        className="object-cover transition-transform duration-500 
                                            group-hover:scale-110"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-dracula-background/90 to-transparent 
                                        opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                                </div>

                                <div className="p-6 relative bg-dracula-current/95 backdrop-blur-sm">
                                    <h3 className="text-xl text-dracula-foreground font-medium mb-2 
                                        group-hover:text-dracula-purple transition-colors duration-300">
                                        {name}
                                    </h3>

                                    <div className="absolute top-4 right-4 w-10 h-10 rounded-full 
                                        bg-gradient-to-r from-dracula-pink to-dracula-purple
                                        text-dracula-foreground flex items-center justify-center 
                                        text-sm font-medium opacity-90 group-hover:opacity-100 
                                        transition-all duration-300 transform group-hover:scale-110">
                                        {index + 1}
                                    </div>
                                </div>
                            </Link>
                        </motion.li>
                    ))}
                </motion.ul>
            </motion.div>
        </section>
    );
};

export default Projects;