import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="pt-br">
      <Head>
        <link rel="icon" href="/favicon.svg" />
      </Head> {/* Add closing tag for Head element */}
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
