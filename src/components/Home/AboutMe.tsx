import Image from 'next/image'
import Link from 'next/link'
import { Roboto } from 'next/font/google'

const roboto = Roboto({
    subsets: ['latin'],
    weight: '400',
});

export const AboutMe = () => {
    return (
        <main className='flex flex-wrap-reverse justify-center items-center gap-10 md:gap-32 py-8 text-lg text-center xl:text-left xl:flex-nowrap xl:justify-between'>
            <div className="text-white flex flex-col items-center xl:items-start gap-4 w-full xl:w-120">
                <h1 className='text-3xl sm:text-6xl xl:leading-[rem]'>Hello! Sou Gabriel aka&nbsp;
                    <strong className='font-bold text-dracula-pink italic'>Cix</strong>
                </h1>
                <div className='mb-12'>
                    <h2 className={`${roboto.className} mb-12 text-dracula-green`}>
                        dev junior full stack
                    </h2>
                    <Link href="/contact" className='p-3 bg-dracula-selection w-fit text-xl rounded-lg transition-all hover:bg-opacity-80'>Converse comigo!</Link>
                </div>
                <ul className='flex flex-wrap justify-center xl:grid xl:grid-cols-2 xl:w-fit gap-3 text-xl'>
                    <li style={{ backgroundColor: '#2F74C0', color: '#fff' }} className='w-fit p-2 rounded-md'>typescript</li>
                    <li style={{ backgroundColor: '#6BDDFA', color: '#000' }} className='w-fit p-2 rounded-md'>react</li>
                    <li style={{ backgroundColor: '#EFD81D', color: '#000' }} className='w-fit p-2 rounded-md'>javascript</li>
                    <li style={{ backgroundColor: '#000', color: '#fff' }} className='w-fit p-2 rounded-md'>next.js</li>
                </ul>
            </div>
            <div className='relative'>
                <Image src="https://avatars.githubusercontent.com/u/102544926?v=4" alt="Foto do perfil do Cix" width={500} height={500} unoptimized className='rounded-full' />
                <p className='p-4 w-fit text-base leading-tight bg-dracula-pink rounded-xl text-white absolute -bottom-[0.75rem] sm:bottom-3'>
                    <strong className='text-2xl'>2+</strong>
                    <br />
                    anos de experiência
                </p>
            </div>
        </main >
    )
}