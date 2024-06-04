import Head from "next/head";
import Link from "next/link";

const NotFound = () => {
    return (
        <>
            <Head>
                <title>404 | Cix</title>
                <meta name="description" content="Página de erro 404" />
            </Head>
            <div className="text-center mt-12 md:my-24 space-y-8 md:space-y-16 px-6 md:px-32">
                <h1 className="text -5xl sm:text-7xl font-bold">404</h1>
                <div>
                    <p>Não conseguimos encontrar esta página!</p>
                    <span>Clique no botão abaixo para ser redirecionado à Página Inicial</span>
                </div>
                <Link href="/">Ir para Home</Link>
            </div>
        </>
    );
};

export default NotFound;
