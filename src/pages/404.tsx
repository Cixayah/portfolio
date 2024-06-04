import Head from "next/head";
import Link from "next/link";

const NotFound = () => {
    return (
        <>
            <Head>
                <title>404 | Cix</title>
                <meta name="description" content="Página de erro 404" />
            </Head>
            <div>
                <h1>404</h1>
                <p>Não conseguimos encontrar esta página!</p>
                <span>Clique no botão abaixo para ir para a página Home.</span>
                <Link href="/">
                    Ir para Home
                </Link>
            </div>
        </>
    );
}

export default NotFound;
