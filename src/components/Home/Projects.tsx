import { Project } from '@/types/Home';
import Link from 'next/link';
import Image from 'next/image';

interface ProjectsProps {
    projects: Project[];
}

export const Projects = ({ projects }: ProjectsProps) => {
    return (
        <article className='space-y-16 flex flex-col items-center xl:items-start text-center xl: text-left'>
            <h2 className='text-2xl md:text-4xl'>Projetos Recentes</h2>
            <ul className='flex flex-wrap gap-16 justify-center xl:justify-start'>
                {projects.map(({ slug, name, image }, index) => (
                    <Link href={`/projects/${slug}`} key={name + index}>
                        <li className='text-md relative'>
                            <Image
                                src={image.url}
                                alt={image.alt}
                                width={300}
                                height={300}
                                className='object-cover rounded-2xl h-[18.75rem]'
                            />
                            <span>{name}</span>
                            <div>
                                <span>{index + 1}</span>
                            </div>
                        </li>
                    </Link>
                ))}
            </ul>
        </article>
    );
};
