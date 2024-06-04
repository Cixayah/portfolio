import Image from 'next/image'
import Link from 'next/link'
export const AboutMe = () => {
    return (
        <main className='flex flex-wrap-reverse justify-center items-center gap-10 md:gap-32 py-8 text-lg xl:text-left xl:flex-nowrap xl:justify-between'>
            <div>
                <h1>Eu sou o &nbsp;</h1>
                <span>Cix</span>
                <div>
                    <h2>
                        Sou um dev junior full stack!
                    </h2>
                    <Link href="/contatos">Converse comigo!</Link>
                </div>
                <ul>
                    <li style={{ backgroundColor: '#2F74C0', color: '#fff' }}>typescript</li>
                    <li style={{ backgroundColor: '#6BDDFA', color: '#000' }}>react</li>
                    <li style={{ backgroundColor: '#EFD81D', color: '#000' }}>javascript</li>
                    <li style={{ backgroundColor: '#000', color: '#fff' }}>next.js</li>
                </ul>
            </div>
            <div>
                <Image src="https://avatars.githubusercontent.com/u/102544926?v=4" alt="Foto do perfil do Cix" width={500} height={500} unoptimized />
                <p>
                    <span>1</span>
                    <br />
                    anos de experiência
                </p>
            </div>
        </main>
    )
}