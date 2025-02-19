import { Project } from '@/types/Home';
import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';

interface ProjectsProps {
    projects: Project[];
}

export const Projects = ({ projects }: ProjectsProps) => {
    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.2
            }
        }
    };

    const projectVariants = {
        hidden: { opacity: 0, y: 30 },
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                duration: 0.5
            }
        }
    };

    return (
        <section className="py-16 px-4 md:px-8">
            <motion.div
                initial="hidden"
                animate="visible"
                variants={containerVariants}
                className="max-w-7xl mx-auto"
            >
                <motion.h2
                    variants={projectVariants}
                    className="text-4xl sm:text-5xl text-white font-light mb-16 text-center"
                >
                    My recent{' '}
                    <span className="font-bold text-dracula-pink italic">projects</span>
                </motion.h2>

                <motion.ul
                    variants={containerVariants}
                    className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
                >
                    {projects.map(({ external, slug, name, image }, index) => (
                        <motion.li
                            key={slug}
                            variants={projectVariants}
                            whileHover={{ y: -8 }}
                            className="group relative"
                        >
                            <Link
                                href={external || `/projects/${slug}`}
                                target={external ? "_blank" : "_self"}
                                className="block relative rounded-xl overflow-hidden bg-dracula-selection 
                                    shadow-lg transition-all duration-300 group-hover:shadow-2xl 
                                    group-hover:shadow-dracula-pink/20"
                            >
                                <div className="relative aspect-video">
                                    <Image
                                        src={image.url}
                                        alt={image.alt}
                                        fill
                                        className="object-cover transition-transform duration-500 
                                            group-hover:scale-105"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent 
                                        opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                                </div>

                                <div className="p-6 relative">
                                    <h3 className="text-xl text-white font-medium mb-2 group-hover:text-dracula-pink 
                                        transition-colors duration-300">
                                        {name}
                                    </h3>

                                    <div className="absolute top-4 right-4 w-8 h-8 rounded-full bg-dracula-pink 
                                        text-white flex items-center justify-center text-sm font-medium
                                        opacity-80 group-hover:opacity-100 transition-opacity duration-300">
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