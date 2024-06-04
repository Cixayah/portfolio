import Head from "next/head";
import Link from "next/link";
import { Roboto } from 'next/font/google'

const roboto = Roboto({
    subsets: ['latin'],
    weight: '500'
})
const NotFound = () => {
    return (
        <>
            <Head>
                <title>404 | Cix</title>
                <meta name="description" content="Página de erro 404" />
            </Head>
            <div className="flex flex-col text-center items-center mt-12 md:my-24 gap-8 px-6 md:px-32">
                <h1 className="text -5xl sm:text-7xl font-bold">404</h1>
                <p className="flex flex-col gap-8 md:gap-4 md:text-xl">
                    <span>Não conseguimos encontrar esta página!</span>
                    <span>Clique no botão abaixo para ser redirecionado</span>
                </p>
                <Link href="/" className={`${roboto.className} p-4 bg-dracula-cyan rounded-xl text-black mt-5 md:text-xl md-12 w-fit`}>Ir para Home</Link>
            </div>
        </>
    );
};

export default NotFound;
