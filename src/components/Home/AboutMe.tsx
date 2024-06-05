import Image from 'next/image'
import Link from 'next/link'
import { Roboto } from 'next/font/google'
import { AboutMe as TAboutMe } from '@/types/Home'

const roboto = Roboto({
    subsets: ['latin'],
    weight: '400',
});

interface AboutMeProps {
    aboutMe: TAboutMe;
}

export const AboutMe = ({ aboutMe }: AboutMeProps) => {
    const { title, description, contact, pfp, techs } = aboutMe;

    return (
        <main className='flex flex-wrap-reverse justify-center items-center gap-10 md:gap-32 py-8 text-lg text-center xl:text-left xl:flex-nowrap xl:justify-between'>
            <div className="text-white flex flex-col items-center xl:items-start gap-4 w-full xl:w-120">
                <h1 className='text-3xl sm:text-6xl xl:leading-[rem]'>{title.default}&nbsp;
                    <strong className='font-bold text-dracula-pink italic'>{title.bold}</strong>
                </h1>
                <div className='mb-12'>
                    <h2 className={`${roboto.className} mb-12 text-dracula-green`}>
                        {description}
                    </h2>
                    <Link href={contact.link} className='p-3 bg-dracula-selection w-fit text-xl rounded-lg transition-all hover:bg-opacity-80'>{contact.label}</Link>
                </div>
                <ul className='flex flex-wrap justify-center xl:grid xl:grid-cols-2 xl:w-fit gap-3 text-xl'>
                    {techs.map(({ tech, bgcolor, color }, index) => (
                        <li
                            key={tech + index}
                            style={{ backgroundColor: bgcolor, color: color }}
                            className='w-fit p-2 rounded-md'
                        >
                            {tech}
                        </li>
                    ))}
                </ul>
            </div>
            <div className='relative'>
                <Image src={pfp.image.url}
                    alt="{pfp.image.alt}"
                    width={500}
                    height={500}
                    className='rounded-full'
                    unoptimized
                />
                <p className='p-4 w-fit text-base leading-tight bg-dracula-pink rounded-xl text-white absolute -bottom-[0.75rem] sm:bottom-3'>
                    <strong className='text-2xl'>{pfp.experience.bold}</strong>
                    <br />
                    {pfp.experience.default}
                </p>
            </div>
        </main >
    )
}