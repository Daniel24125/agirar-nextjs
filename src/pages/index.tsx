import { Button } from '@/components/ui/button'
import { getMaxWidthClasses, getSectionClass } from '@/utils/UtilClasses'
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
import DotVector from '@/components/DotVector'
import DecorationGeometry from '@/components/DecorationGeometry'

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

  return <section className={`${getSectionClass} lg:h-[calc(100vh-64px)] `} >
    <DecorationGeometry 
      color="orange"
      size="w-44 h-64"
      position="absolute top-10 right-0"
      borderRadius="rounded-tl-3xl rounded-bl-3xl"
    />
    <DecorationGeometry 
      color="blue"
      size="w-44 h-64"
      position="absolute bottom-10 left-0"
      borderRadius="rounded-tr-3xl rounded-br-3xl"
    />
    <div className={`${getMaxWidthClasses} flex h-full flex-col items-center px-5 pt-20 lg:pt-56 lg:items-start lg:flex-row lg:justify-evenly`}>
      
      <div className='flex flex-col items-center lg:items-start gap-5 mb-40'>
        <div className='flex flex-col text-center lg:text-left lg:border-l-8 pl-3 lg:border-orange-400'>
          <h1 className=' text-8xl font-bold mb-5'>Agirar</h1>
          <h4 className=' text-2xl font-bold max-w-xs'>Associação de Familiares e Amigos de Pessoas com Psicose</h4>
        </div>
        <Button>Tornar-me Sócio</Button>
      </div>

      <div  className="hidden midHomeRect lg:flex items-end justify-center w-80 h-[550px] bg-orange-100 rounded-3xl relative">
        <Image className=' z-10' src={Person} alt="person" />
      </div>

      <div className='flex flex-col w-4/6 max-w-xs items-end justify-end pb-28 mt-20 lg:h-full lg:mt-0 '>
          <div className='relative '>
            <DotVector />
            <p className='text-xs  sm:text-base '>
              Pode contar com o nosso apoio
              através de diferentes técnicas terapeuticas
            </p>
           <DotVector rotate={true} position='-bottom-10 -right-7' />
          </div>
          <Button className="text-primary" onClick={()=> push("/servicos")} variant="link">Saber mais</Button>
      </div>

    </div>
  </section>
}

const Objectives = ()=>{
  const {push} = useRouter()

  return <section className={`${getSectionClass} h-screen gap-5 justify-center px-5`}>
     <DecorationGeometry 
      color="orange"
      size="w-44 h-64"
      position="absolute top-10 right-0"
      borderRadius="rounded-tl-3xl rounded-bl-3xl"
    />
    <DecorationGeometry 
      color="blue"
      size="w-44 h-64"
      position="absolute bottom-10 left-0"
      borderRadius="rounded-tr-3xl rounded-br-3xl"
    />
    <p className='w-[clamp(300px,90vw,550px)] text-center text-base sm:text-xl'>
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
  const [scrollOrientation, setScrollOrientation] = React.useState("vertical")
  const scrollRef = React.useRef(null)

  const updateScrollOrientation = ()=>{
      setScrollOrientation(
        //@ts-ignore
        scrollRef.current.offsetWidth > scrollRef.current.offsetHeight ? "horizontal": "vertical"
      )
  }
  
  React.useEffect(()=>{
    if(scrollRef.current) updateScrollOrientation()
  },[scrollRef.current])

React.useEffect(()=>{
    window.addEventListener('resize', updateScrollOrientation);
    return () => window.removeEventListener('resize', updateScrollOrientation);
  },[])
  
  return <section className={`${getSectionClass} justify-center`}>
    <div className={`${getMaxWidthClasses} flex-col-reverse lg:flex-row flex justify-between py-28 lg:h-[100vh] px-7 lg:px-5`}>
      <div className="flex flex-col h-full w-full lg:w-3/4 ">
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
        <AspectRatio ratio={16/9} >
          <Image
            src={selecteEvent.img}
            alt={selecteEvent.title}
            fill
            className="rounded-xl object-cover"
          />
        </AspectRatio>
        <p className=' text-sm md:text-md text-justify my-3'>
          {selecteEvent.desc}
        </p>
        <div className='flex justify-end w-full'>
          <a href={selecteEvent.href} target='__blank'>
            <Button className='text-primary' variant="link">Saber mais</Button>
          </a>
        </div>
      </div>
      {/* @ts-ignore */}
      <ScrollArea ref={scrollRef} aria-orientation={scrollOrientation} className=" w-full lg:w-fit lg:h-full p-5 rounded-xl border mb-4 lg:mb-0">
        <div className='flex lg:flex-col '>
          {events.map(e=>{
            return <div 
              key={e.id}
            onClick={()=>setSelectedEvent(e)}
            style={{
              backgroundImage: `url("${e.img}")`,
              backgroundSize: "cover",
            }} 
            className={`w-24 h-24 md:w-36  md:h-36 rounded-xl mr-3 lg:mr-0 lg:mb-3 cursor-pointer 
            ${e.id === selecteEvent.id ? "border-blue-300 border-4":""}
            hover:border-blue-300  
            hover:border-4`}>
            </div>
          })}
        </div>

    </ScrollArea>
    </div>
  </section>
}

const Donation = ()=>{
  return <section className={`${getSectionClass} justify-center px-5`}>
    <div className={`${getMaxWidthClasses} bg-[#E8F4FF] h-[450px] my-12 rounded-3xl overflow-hidden flex `}>
      <img 
        src="/donate.png"
        alt="donation"
        className='hidden lg:block -ml-40'
      />
      <div className='w-full  lg:w-1/2 flex justify-center items-center'>
        <div className="text-center  items-center flex flex-col lg:items-start justify-center gap-y-3 px-7">
          <h5 className=' font-bold sm:text-lg  text-black'>Deseja contribuir para a nossa causa? </h5>
          <p className='text-sm sm:text-base lg:text-justify max-w-sm text-black'>Precisamos de si para continuar a desenvolver os nossos Atelieres e as atividades junto das famílias! Basta fazer uma tranferência bancária para:</p>
          <h5 className=' font-bold sm:text-lg text-black'>IBAN: PT50 0036 0051 99100351967 81</h5>
          <p className='text-black text-xs'>Ou</p>
          <Button>Tornar-me Sócio</Button>
          <h5 className=' font-bold sm:text-lg text-black'>A sua contribuição faz toda a diferença!</h5>
        </div>
      </div>
    </div>
  </section>
}

export default Home