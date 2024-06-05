import { CopyButton } from "@/components/commons/CopyButton";
import Head from "next/head";
const contacts = () => {
    return (
        <>
            <Head>
                <title>Contatos | Cix</title>
                <meta name="description" content="Página contato do site" />
            </Head>
            <div className="mt-12 md:mt-24 space-y-8 md:space-y-16 px-6 md:px-32">
                <h1 className="text-5xl md:text-7xl font-bold text-center">Contatos</h1>
                <ul className="table mx-auto space-y-6 md:space-y-8">
                    <li className="md:text-xl">
                        <span className="font-bold">E-mail</span>
                        <div className="flex gap-1 md:gap-3 items-center">
                            <a href="mailto:cixayah@gmail.com" className="text-sm md:text-lg text-slate-300 underline truncate" target="_blank">
                                cixayah@gmail.com
                            </a>
                            <CopyButton textToCopy="cixayah@gmail.com" />
                        </div>
                    </li>
                    <li className="md:text-xl">
                        <span className="font-bold">LinkedIn</span>
                        <div className="flex gap-1 md:gap-3 items-center">
                            <a href="https://linkedin.com/in/cixayah" target="_blank" className="text-sm md:text-lg text-slate-300 underline truncate">
                                https://linkedin.com/in/cixayah
                            </a>
                        </div>
                    </li>
                    <li className="md:text-xl">
                        <span className="font-bold">GitHub</span>
                        <div className="flex gap-1 md:gap-3 items-center">
                            <a href="https://github.com/cixayah" target="_blank" className="text-sm md:text-lg text-slate-300 underline truncate">
                                https://github.com/cixayah
                            </a>
                        </div>
                    </li>
                </ul>
            </div>
        </>
    )
}
export default contacts;