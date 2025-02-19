import Image from 'next/image';
import Link from 'next/link';
import { Roboto } from 'next/font/google';
import { AboutMe as TAboutMe } from '@/types/Home';
import { motion, useAnimation } from 'framer-motion';
import { useEffect } from 'react';

const roboto = Roboto({
    subsets: ['latin'],
    weight: ['400', '700'],
});

interface AboutMeProps {
    aboutMe: TAboutMe;
}

export const AboutMe = ({ aboutMe }: AboutMeProps) => {
    const { title, description, contact, pfp, techs } = aboutMe;
    const controls = useAnimation();

    useEffect(() => {
        controls.start({
            opacity: 1,
            y: 0,
            transition: { duration: 0.8 }
        });
    }, [controls]);

    const textVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.05
            }
        }
    };

    const letterVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: {
            opacity: 1,
            y: 0
        }
    };

    return (
        <motion.main
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="min-h-screen flex flex-wrap-reverse justify-center items-center gap-10 md:gap-32 py-16 px-4 md:px-8"
        >
            <motion.div
                initial={{ opacity: 0, y: 50 }}
                animate={controls}
                className="flex-1 flex flex-col items-center xl:items-start gap-8 min-w-[300px] max-w-2xl"
            >
                <h1 className="text-4xl sm:text-6xl xl:text-7xl font-light text-white">
                    {title.default}{' '}
                    <motion.div
                        variants={textVariants}
                        initial="hidden"
                        animate="visible"
                        className="font-bold text-dracula-pink italic inline-block"
                    >
                        {title.bold.split('').map((char, index) => (
                            <motion.span
                                key={index}
                                variants={letterVariants}
                                className="inline-block"
                            >
                                {char}
                            </motion.span>
                        ))}
                    </motion.div>
                </h1>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.5, duration: 0.5 }}
                    className="space-y-8 text-center xl:text-left"
                >
                    <p className={`${roboto.className} text-xl text-dracula-green leading-relaxed`}>
                        {description}
                    </p>

                    <Link
                        href={contact.link}
                        className="inline-block px-8 py-4 bg-dracula-pink text-white text-lg rounded-lg 
                            transition-all duration-300 hover:bg-opacity-90 hover:transform hover:-translate-y-1
                            hover:shadow-lg"
                    >
                        {contact.label}
                    </Link>
                </motion.div>

                <motion.ul
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.8, duration: 0.5 }}
                    className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 w-full max-w-3xl mt-8"
                >
                    {techs.map(({ tech, bgcolor, color }, index) => (
                        <motion.li
                            key={tech + index}
                            initial={{ opacity: 0, scale: 0.8 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ delay: index * 0.1 + 1 }}
                            whileHover={{
                                scale: 1.1,
                                transition: { duration: 0.2 }
                            }}
                            className="relative group cursor-pointer"
                        >
                            <div
                                style={{ backgroundColor: bgcolor, color }}
                                className="p-3 rounded-lg shadow-lg border border-opacity-20 border-white
                                    backdrop-blur-sm transition-all duration-300
                                    hover:shadow-xl hover:border-opacity-50"
                            >
                                <span className="text-sm font-medium">{tech}</span>
                            </div>
                        </motion.li>
                    ))}
                </motion.ul>
            </motion.div>

            <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8 }}
                className="relative flex-shrink-0"
            >
                <div className="relative w-[280px] h-[280px] sm:w-[400px] sm:h-[400px] rounded-full overflow-hidden
                    shadow-2xl transition-transform duration-300 hover:scale-105">
                    <Image
                        src={pfp.image.url}
                        alt={pfp.image.alt}
                        fill
                        className="object-cover"
                        priority
                    />
                </div>

                <motion.div
                    initial={{ opacity: 0, x: 50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 1.2, duration: 0.5 }}
                    className="absolute -bottom-4 right-0 bg-dracula-pink text-white p-4 rounded-xl
                        shadow-lg transform hover:scale-105 transition-transform duration-300"
                >
                    <p className="font-bold text-2xl mb-1">{pfp.experience.bold}</p>
                    <p className="text-sm opacity-90">{pfp.experience.default}</p>
                </motion.div>
            </motion.div>
        </motion.main>
    );
};