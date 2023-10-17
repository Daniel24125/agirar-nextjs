import { Button } from '@/components/ui/button'
import { getMaxWidthClasses } from '@/utils/UtilClasses'
import Head from 'next/head'
import Person from "@/assets/smile.png"
import Image from 'next/image'
import { useRouter } from 'next/router'
import { ScrollArea } from "@/components/ui/scroll-area"
import React from 'react'
import { Share2 } from 'lucide-react'
import TooltipAbstraction  from '@/components/ui/TooltipAbstraction'
import { AspectRatio } from '@/components/ui/aspect-ratio'
import { TEvent, getTheLastEvents } from '@/utils/Events'

const Home = () => {
  return (
    <>
      <Head>
        <title>Agirar</title>
      </Head>
      <HeaderLandingPage />
      <Objectives />
      <Events/>
      <Donation />
    </>
  )
}

const HeaderLandingPage = ()=>{
  const {push} = useRouter()

  return <section className='flex flex-col items-center relative w-screen h-[calc(100vh-64px)]' >
    <div className=" z-0 rounded-tl-3xl rounded-bl-3xl bg-orange-100 w-44 h-64 top-10 absolute right-0"></div>
    <div className=" z-0 rounded-tr-3xl rounded-br-3xl bg-blue-100 w-44 h-64 bottom-10 absolute left-0"></div>
    <div className={`${getMaxWidthClasses} flex h-full justify-between items-start pt-56 px-5`}>
      <div className='flex flex-col border-l-8 pl-3 border-orange-400'>
        <h1 className=' text-8xl font-bold mb-5'>Agirar</h1>
        <h4 className=' text-2xl font-bold max-w-xs'>Associação de Familiares e Amigos de Pessoas com Psicose</h4>
      </div>
      <div  className="midHomeRect flex items-end justify-center w-80 h-[550px] bg-orange-100 rounded-3xl relative">
        <Image className=' z-10' src={Person} alt="person" />
      </div>
      <div className='flex flex-col max-w-xs items-end h-full justify-end pb-28'>
          <p>
          Pode contar com o nosso apoio
          através de diferentes técnicas terapeuticas
          </p>
          <Button className="text-primary" onClick={()=> push("/servicos")} variant="link">Saber mais</Button>
      </div>
    </div>
  </section>
}

const Objectives = ()=>{
  const {push} = useRouter()

  return <section className='flex flex-col gap-5 justify-center items-center relative w-screen h-screen'>
     <div className=" z-0 rounded-tl-3xl rounded-bl-3xl bg-orange-100 w-44 h-64 top-10 absolute right-0"></div>
    <div className=" z-0 rounded-tr-3xl rounded-br-3xl bg-blue-100 w-44 h-64 bottom-10 absolute left-0"></div>
    <p className='w-[clamp(300px,90vw,550px)] text-center text-xl'>
    Os principais objetivos da AGIRAR são promover a 
    <span className=' text-primary font-bold'> reabilitação e integração social de pessoas com doença 
    mental grave </span>e <span className='font-bold text-orange-400'> dar apoio às suas famílias </span>, assim como 
    promover o apoio, formação e investigação no domínio 
    da saúde mental e reabilitação psicossocial
    </p>
    <Button onClick={()=>push("sobre")}>
      Saber mais
    </Button>
  </section>
}

const Events = ()=>{
  const events: TEvent[] = getTheLastEvents()
  const [selecteEvent, setSelectedEvent] = React.useState(events[0])
  
  return <section className="flex justify-center items-center relative w-screen">
    <div className={`${getMaxWidthClasses} flex justify-between py-28 h-[100vh] px-5`}>
      <div className="flex flex-col w-3/4 h-full">
        <div className="flex justify-between w-full">
          <div className="flex flex-col">
            <h4 className='text-xl font-bold'>
              {selecteEvent.title}
            </h4>
            <h6 className='text-md text-slate-400'>
              {selecteEvent.date}
            </h6>
          </div>
          <TooltipAbstraction title="Partilhar este Evento">
              <Share2/>
          </TooltipAbstraction>
  
        </div>
        <AspectRatio ratio={16/9} className="bg-muted">
          <Image
            src={selecteEvent.img}
            alt={selecteEvent.title}
            fill
            className="rounded-xl object-cover"
          />
        </AspectRatio>
        <p className=' text-justify my-3'>
          {selecteEvent.desc}
        </p>
        <div className='flex justify-end w-full'>
          <a href={selecteEvent.href} target='__blank'>
            <Button className='text-primary' variant="link">Saber mais</Button>
          </a>
        </div>
      </div>
      <ScrollArea className=" h-full p-5 rounded-xl border">
        {events.map(e=>{
 
          return <div 
          onClick={()=>setSelectedEvent(e)}
          style={{
            backgroundImage: `url("${e.img}")`,
            backgroundSize: "cover",
          }} 
          className={`w-36 h-36 rounded-xl mb-3 cursor-pointer 
          ${e.id === selecteEvent.id ? "border-blue-300 border-4":""}
          hover:border-blue-300  
          hover:border-4`}>
          </div>
        })}

    </ScrollArea>
    </div>
  </section>
}

const Donation = ()=>{
  return <section className='flex justify-center items-center relative w-screen'>
    <div className={`${getMaxWidthClasses} bg-[#E8F4FF] h-[450px] my-12 rounded-3xl overflow-hidden flex px-5`}>
      <img 
        src="/donate.png"
        alt="donation"
        className=' -ml-40'
      />
      <div className='w-1/2 flex justify-center items-center'>
        <div className="flex flex-col items-start justify-center gap-y-3">
          <h5 className=' font-bold text-lg '>Deseja contribuir para a nossa causa? </h5>
          <p className='text-justify max-w-sm'>Precisamos de si para continuar a desenvolver os nossos Atelieres e as atividades junto das famílias! Basta fazer uma tranferência bancária para:</p>
          <h5 className=' font-bold text-lg'>IBAN: PT50 0036 0051 99100351967 81</h5>
          <p>Ou</p>
          <Button >Tornar-me Sócio</Button>
          <h5 className=' font-bold text-lg'>A sua contribuição faz toda a diferença!</h5>

        </div>
      </div>
    </div>
  </section>
}

export default Home