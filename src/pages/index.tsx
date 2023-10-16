import { Button } from '@/components/ui/button'
import Head from 'next/head'



export default function Home() {
  return (
    <>
      <Head>
        <title>Agirar</title>
        <meta name="description" content="Associação de Familiares e Amigos de Pessoas com Psicose" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main >
        <Button>Hello World</Button>
      </main>
    </>
  )
}
