import Head from "next/head";

const Contatos = () => {
    return (
        <>
            <Head>
                <title>Contatos | Cix</title>
                <meta name="description" content="Página contato do site" />
            </Head>
            <div>
                <h1>Contatos</h1>
                <ul>
                    <li>
                        <span>E-mail</span>
                        <div>
                            <a href="mailto:gabrielviniciodacosta@gmail.com">
                                gabrielviniciodacosta@gmail.com
                            </a>
                        </div>
                    </li>
                    <li>
                        <span>LinkedIn</span>
                        <div>
                            <a href="https://linkedin.com/in/cixayah">
                                https://linkedin.com/in/cixayah
                            </a>
                        </div>
                    </li>
                    <li>
                        <span>GitHub</span>
                        <div>
                            <a href="https://github.com/cixayah">
                                https://github.com/cixayah
                            </a>
                        </div>
                    </li>
                </ul>
            </div>
        </>
    )
}
export default Contatos