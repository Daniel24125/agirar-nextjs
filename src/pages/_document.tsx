import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html lang="en">
       <Head>
        <link rel="apple-touch-icon" sizes="120x120" href="/apple-touch-icon.png"/>
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png"/>
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png"/>
        <link rel="manifest" href="/site.webmanifest"/>
        <link rel="mask-icon" href="/safari-pinned-tab.svg" color="#6c5ce7"/>
        <meta name="msapplication-TileColor" content="#6c5ce7"/>
        <meta name="theme-color" content="#ffffff"/>
        <meta name="description" content="Associação de Familiares e Amigos de Pessoas com Psicose" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <body className='overflow-x-hidden mt-28 md:mt-40'>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
