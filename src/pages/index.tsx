import { Button, buttonVariants } from '@/components/ui/button'
import { getMaxWidthClasses, getSectionClass } from '@/utils/UtilClasses'
import Image, { StaticImageData } from 'next/image'
import { useRouter } from 'next/router'
import { ScrollArea } from "@/components/ui/scroll-area"
import React, { UIEvent } from 'react'
import { AspectRatio } from '@/components/ui/aspect-ratio'
import { TEvent, getTheLastEvents } from '@/utils/Events'
import DotVector from '@/components/DotVector'
import DecorationGeometry from '@/components/DecorationGeometry'
import MemberComponent from '@/components/MemberComponent'
import VoluntarioComponent from '@/components/VoluntarioComponent'
import { orgaos } from '@/utils/Team'
import {  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
  type CarouselApi } from '@/components/ui/carousel'
import Autoplay from "embla-carousel-autoplay"
import { Card, CardContent } from '@/components/ui/card'
import { Dialog, DialogContent, DialogTrigger } from '@/components/ui/dialog'
import {HandHeartIcon, SquareGraphics} from '@/components/UtilsGraphics'
import { Partners } from './sobre'
import BulletTextComponent from '@/components/ui/BulletTextComponent'
import ImageVoluntatios from "@/assets/home/objetivos.jpg"
import ImagemPsicose from "@/assets/home/psicose-bullet.jpg"
import DonativoIcon from "@/assets/home/donativo.png"
import AssociadoIcon from "@/assets/home/associado.jpg"
import VoluntarioIcon from "@/assets/home/voluntário.jpg"
import { testimonials } from '@/utils/Testimonials'
import { ChevronLeftCircle, HeartHandshakeIcon, LucideIcon, Quote, UserIcon } from 'lucide-react'
import Link from 'next/link'
import { IBAN } from '@/utils/Utils'
import { SocialBtns } from '@/components/Template/Nav'


const Home = () => {
  return (
    <>
      <HeaderComponent/>
      {/* <ImageCarrousel/> */}
      <PsicoseComponent/>
      <Objectives/>
      <Support/>
      <Testemunhos/>
      <Partners/>
    </>
  )
}

const HeaderComponent = ()=>{
  return <header className={`${getSectionClass} h-[640px] `}>
    <div className='w-full h-full bg-[url("/eventos/intro.jpeg")] bg-cover brightness-50 bg-center z-0 absolute'></div>
    <div className={`${getMaxWidthClasses} flex justify-center items-center z-10 h-full flex-col text-white`}>
      <h1 className='mb-2 border-b-8 border-orange-400 text-8xl'>AGIRAR</h1>
      <h3 className='text-center max-w-xs text-2xl'>Associação de Familiares e Amigos de Pessoas com Psicose</h3>
    </div>
    <div className='absolute flex flex-col z-10 right-10 bottom-1/2 gap-2'>
      <SocialBtns size="w-4 h-4 sm:w-6 sm:h-6 text-white " show='all'/>
    </div>
  </header>
}


const PsicoseComponent = ()=>{
  return <section id="psicose" className={`${getSectionClass} my-40 px-5`} >
    <div className={`flex ${getMaxWidthClasses} `}>
      <div className="flex flex-col w-full md:w-2/3">
        <h3 className=' text-5xl font-bold mb-4'>
          Psicose
        </h3>
        <BulletTextComponent
          BulletComponent={<SquareGraphics className="hidden md:block" size={30}/>}
          text={<span>O termo <strong>Psicose</strong> não se refere a uma doença específica. É uma síndrome, um conjunto de sintomas comuns a várias perturbações mentais, das quais a mais comum é a <strong>Esquizofrenia</strong>. </span>}
        />
        <BulletTextComponent
          BulletComponent={<SquareGraphics className="hidden md:block" size={30}/>}
          text={<span>No episódio psicótico a pessoa tem uma perceção distorcida da realidade ou a sua interpretação é diferente da maioria das pessoas. Os <strong>sintomas</strong> mais comuns incluem os delírios (crenças que não correspondem á realidade) e as alucinações (ver, ouvir, sentir coisas não reais). No entanto, vários outros se manifestam: discurso incoerente, alterações de comportamento, etc. As pessoas com psicose podem ainda apresentar ansiedade, depressão, insónias, isolamento social, falta de motivação e apresentar dificuldades no seu funcionamento do dia a dia.</span>}
        />

        <BulletTextComponent
          BulletComponent={<SquareGraphics className="hidden md:block" size={30}/>}
          text={
            <span>
              Os episódios psicóticos variam na sua intensidade e duração. O seu <strong>tratamento</strong> inclui medicação antipsicótica, medicação para outra sintomatologia (ansiedade, insónia, …), e intervenções psicoterapêuticas individuais e em grupo.
            </span>
          }
        />
        <BulletTextComponent
          BulletComponent={<SquareGraphics className="hidden md:block" size={30}/>}
          text="Reconhecer precocemente os sintomas da psicose e procurar ajuda é essencial para a pessoa que experiencia esta alteração e para o seu familiar. O tratamento precoce é um fator positivo e melhora o prognóstico sendo ainda preditor de uma melhor qualidade de vida."
        />
     
      </div>
      <div className='w-1/3 min-w-[300px] h-[700px] rounded-2xl overflow-hidden hidden md:flex items-center'>
          <Image
            src={ImagemPsicose}
            width={500}
            alt="Imagem psicose"
          />
        {/* <video autoPlay muted loop>
          <source src="/videos/psicose.mp4" type="video/mp4"/>
        </video> */}
      </div>
    </div>
  </section>
}



const ImageCarrousel = ()=>{
  const [api, setApi] = React.useState<CarouselApi>()
  const [current, setCurrent] = React.useState(0)
  const [count, setCount] = React.useState(0)
  const events = getTheLastEvents(3)

  React.useEffect(() => {
    if (!api) {
      return
    }
 
    setCount(api.scrollSnapList().length)
    setCurrent(api.selectedScrollSnap()+1)
 
    api.on("select", () => {
      setCurrent(api.selectedScrollSnap()+1)
    })
  }, [api])
  
 
  return <section className={`${getSectionClass} h-96 `} >
    
    <Carousel
      className='w-full'
      setApi={setApi}
      plugins={[
        Autoplay({
          delay: 5000,
        }),
      ]}
    >
      <CarouselContent >
        <CarouselItem >
          <CarouselCardComponent style={{
            backgroundPosition: "center 500px"
          }} img="/eventos/intro.jpeg">
            <div className="flex flex-col text-white justify-center items-center">
              <h1 className='mb-2 border-b-8 border-orange-400 text-8xl'>AGIRAR</h1>
              <h3 className='text-center max-w-xs text-2xl'>Associação de Familiares e Amigos de Pessoas com Psicose</h3>
            </div>
          </CarouselCardComponent>
        </CarouselItem>
        {events.map((evt, index) => (
          <CarouselItem key={index}>
            <div style={{
              backgroundImage: `url("${evt.img[0]}")`,
              backgroundSize: "cover", 
              backgroundPosition: "center"
            }} className={`w-full flex justify-center h-96 p-8 relative 
                before:content-[""] before:absolute before:w-full before:h-full before:bg-black/30 before:backdrop-blur-sm before:top-0 
            `}>
              
              <div className={`${getMaxWidthClasses} flex justify-between relative `}>
                <div className={`p-4 absolute max-w-[500px] rounded-lg ${index%2 === 0 ? "top-4 left-4 bg-orange-400/50":"bottom-4 right-4 bg-blue-400/50"}`}>
                  <p className='text-2xl font-bold'>{evt.title}</p>
                  <p className='mt-5' >
                    {evt.abstract}
                  </p>
                  <div className='flex w-full justify-end py-2'>
                    <Link href={evt.href} target="_blank" className={` cursor-pointer ${buttonVariants({ variant: "outline" })}}`}>Saber mais</Link>
                  </div>
                </div>
                {/* <div className="flex flex-col w-full">
                  <h3 className='text-2xl'>{evt.title}</h3>
                  <div className='w-full flex justify-between items-center'>
                    <h6 className='text-gray-400'>{evt.date}</h6>
                    <a className=' text-blue-300 font-bold block sm:hidden' href={evt.href} target='__blank'>Saber mais</a>
                  </div>
                  <p className='md:w-1/2 min-h-[65%] text-sm mt-5' >
                    {evt.desc}
                  </p>
                  <div className="flex justify-end pr-5">
                    <a className=' text-blue-300 font-bold hidden sm:block' href={evt.href} target='__blank'>Saber mais</a>
                  </div>
                </div> */}
              </div>
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
    </Carousel>
    <div className="flex gap-2 py-2">
      {api && api.scrollSnapList().map((_, index)=>{
        const isActive = index === current -1
        return <div key={index} onClick={()=>{
          api.scrollTo(index)
        }} className={` transition-all rounded-md cursor-pointer  w-3 h-3 ${isActive ? "bg-blue-400 w-5" : "bg-slate-400"}`}></div>
      })}
    </div>
   
  </section>
}


const CarouselCardComponent = ({
  children,
  onClick,
  style,
  img
}:{
  children: React.ReactNode,
  onClick?: any,
  style?: any,
  img: string
})=>{
  return  <Card className=' overflow-hidden h-96 cursor-pointer' style={{
    backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.527),rgba(0, 0, 0, 0.5)), url("${img}")`,
    backgroundSize: "cover",
    backgroundPosition: "center",
    ...style
  }}
    onClick={onClick}
  >
    <CardContent className={`flex backdrop-blur-sm items-center justify-center p-6 h-full`}>
      {children}
    </CardContent>
  </Card>
}

const PhotoGallery = ({
  imageCollection,
  ButtonContent,
}:{
  imageCollection: string[],
  ButtonContent: React.ReactNode | string
})=>{

  return <Dialog>
    <DialogTrigger asChild>
      <Button variant="ghost">{ButtonContent}</Button>
    </DialogTrigger>
    <DialogContent className="sm:max-w-md lg:max-w-7xl">
      <Carousel>
        <CarouselContent>
          {imageCollection.map(imgURL=>{
            return <div key={imgURL} className='w-full aspect-video' style={{
              backgroundImage: `url("${imgURL}")`,
              backgroundSize: "cover",
              backgroundPosition: "center"
            }}></div>
          })}
        </CarouselContent>
      </Carousel>
      {/* <DialogFooter className="sm:justify-start">
        <DialogClose asChild>
        <div className="flex gap-2 py-2">
          
        </div>
        </DialogClose>
      </DialogFooter> */}
    </DialogContent>
  </Dialog>
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
        <MemberComponent
          reason='mensal'
          pagamento='transferencia'
          title='Tornar-me Associado'
        >
          <Button>Tornar-me Associado</Button>
        </MemberComponent>
        
      </div>

      {/* <div  className="hidden midHomeRect lg:flex items-end justify-center w-80 h-[550px] bg-orange-100 rounded-3xl relative">
        <Image className=' z-10' src={Person} alt="person" />
      </div> */}

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

  return <section id="objetivos"  className={`${getSectionClass} h-[calc(100vh-400px)] justify-center px-5 bg-blue-100`}>
    <div className={`flex justify-center items-center h-full gap-10 ${getMaxWidthClasses} relative justify-center`}>
      <Image
        className='hidden lg:block opacity-70'
        src={ImageVoluntatios}
        width={350}
        alt="Imagem de voluntários"
      />
      <div className='flex flex-col items-center'>
        <p className='w-[clamp(300px,90vw,550px)] text-center text-base sm:text-xl mb-3'>
            Os principais objetivos da AGIRAR são promover a 
          reabilitação e integração social de pessoas com doença 
          mental grave e dar apoio às suas famílias, assim como 
          promover o apoio, formação e investigação no domínio 
          da saúde mental e reabilitação psicossocial
        </p>
        <Button onClick={()=>push("sobre")}>
          Saber mais
        </Button>
      </div>
    </div>
  </section>
}

const Events = ()=>{
  const events: TEvent[] = getTheLastEvents(10)
  const [selecteEvent, setSelectedEvent] = React.useState(events[0])
  const [scrollOrientation, setScrollOrientation] = React.useState("vertical")
  const scrollRef = React.useRef(null)
  const router = useRouter()

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
    <div className={`${getMaxWidthClasses} flex-col-reverse lg:flex-row flex justify-between my-28 lg:h-[70vh] min-h-[600px] px-7 lg:px-5`}>
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
          {/* <TooltipAbstraction title="Partilhar este Evento">
              <Share2/>
          </TooltipAbstraction> */}
  
        </div>
        <AspectRatio ratio={16/9} >
          <Image
            src={selecteEvent.img[0]}
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
      <div className='flex flex-col gap-3'>
        <Button onClick={()=>router.push("/eventos")} variant="outline">Todos os nossos eventos</Button>
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
                backgroundPosition: "center"
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
          <p className='text-sm sm:text-base lg:text-justify max-w-sm text-black'>Precisamos de si para continuar a desenvolver os nossos Atelieres e as atividades junto das famílias! Basta fazer uma pequena contribuição:</p>
          
          <MemberComponent
              reason="unico"
              pagamento="transferencia"
              title='Pagamento Único'
          >
            <Button variant="link" className='text-center w-full'>
                  <h5 className='text-blue-400 underline font-bold sm:text-lg'>IBAN: {IBAN}</h5> 
                </Button>
          </MemberComponent>

          <MemberComponent
              reason="unico"
              pagamento="mbway"
              title='Pagamento Único'
          >
             <Button variant="link" className='text-center w-full'>
                  <h5 className='text-blue-400 underline font-bold sm:text-lg '>MBWAY: 912 353 788</h5> 
                </Button>
          </MemberComponent>
          <div className="flex w-full justify-center">
            <MemberComponent
                reason='mensal'
                pagamento='transferencia'
                title='Tornar-me Associado'
            >
              <Button>Tornar-me Sócio</Button>
            </MemberComponent>
          </div>
          <h5 className=' font-bold sm:text-lg text-center text-black w-full mt-2'>A sua contribuição faz toda a diferença!</h5>
        </div>
      </div>
    </div>
  </section>
}

const Volunteering = ()=>{
  const {push} = useRouter()
  const {assembleia, direcao, conselho, voluntarios} = orgaos
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
    <p className='w-[clamp(300px,90vw,550px)] text-center text-base sm:text-3xl'>
      A Agirar conta com o apoio inestimável da sua equipa. Já podemos contar com a ajuda de {
        assembleia.membros.length+
        direcao.membros.length+
        conselho.membros.length+
        voluntarios.membros.length
      } voluntários
    </p>
    <p className='w-[clamp(300px,90vw,550px)] text-center text-xs sm:text-base'>
      Se tiver vontade de se juntar à nossa família, pode-se tornar um voluntário da Agirar. Toda a ajuda é bem-vinda.
    </p>
    <div className="flex gap-5">
      <Button  onClick={()=>push("orgaos")}>A Nossa Equipa</Button>
      <VoluntarioComponent
        title='Junte-se à nossa família! 😍'
        renderComponent={<Button variant="outline">Voluntariado</Button>}
      />
    </div>
  </section>
}

const Support = ()=>{
  const [translate, setTranslate] = React.useState(false)


  const checkTrasitionNeeded = (evt: UIEvent<HTMLDivElement>)=>{
    const el = document.getElementById("support")
    const scrollPos = window.scrollY
    //@ts-ignore
    const elRectTop =  (el && el.getBoundingClientRect().top) || 600
    setTranslate(elRectTop <= 400)
  }
  React.useEffect(()=>{
    //@ts-ignore
    document.addEventListener("scroll", checkTrasitionNeeded)
    
    //@ts-ignore
    return ()=> window.removeEventListener("scroll", checkTrasitionNeeded);
  },[])

  return <section id="support" className={`${getSectionClass} gap-5 justify-center mt-20`}>
    <div className={`flex justify-center items-center flex-wrap ${getMaxWidthClasses}`}>
      <SupportCard
        title='FAÇA UM DONATIVO'
        Image={<HandHeartIcon width={70}/>}
        information="Ajude-nos a fazer a diferença. O seu donativo ajuda-nos a continuar a nossa atividade." 
        href="/apoiar?tab=doar" 
        linkLabel="Doar"
        footer={<><p className=" text-slate-500 font-bold text-xs">IBAN: {IBAN}</p>
          <p className=" text-slate-500 font-bold text-xs">MBWAY: 912 353 788</p></>}
        className={translate ? "md:mr-5": "lg:translate-x-2/4 delay-[3000]"}
        imgSize={100}
      />
      <SupportCard
        title='TORNE-SE ASSOCIADO'
        Image={<UserIcon size={70}/>}
        information="Junte-se a nós, e seja proativo nesta iniciativa em prol da saúde mental." 
        href="/apoiar?tab=associado" 
        linkLabel="Associado"
        color="blue"
        className='z-10'
        // className={translate ? "mr-5": "translate-x-2/4 delay-[3000]"}
      />
       <SupportCard
        title='TORNE-SE VOLUNTÁRIO'
        Image={<HeartHandshakeIcon size={70} />}
        information="Contribua com o seu tempo/aptidões e venha colaborar connosco." 
        href="/apoiar?tab=voluntario" 
        linkLabel="Voluntário"
        className={`${translate ? "md:ml-5": "lg:translate-x-[-50%] delay-[3000]"} z-0`}
      />      
    </div>
  </section>
}

const SupportCard = ({
  title, 
  Image, 
  information, 
  href, 
  linkLabel,
  footer,
  className,
  color="orange",
  imgSize=180
}:{
  title:string, 
  Image: React.ReactNode, 
  information:string, 
  href:string,
  linkLabel: string, 
  footer?:React.ReactNode,
  className?: string,
  color?: "orange" | "blue"
  imgSize?: number
})=>{
  return  <div className={`mb-5 transition-all flex flex-col gap-5 bg-white rounded-3xl border-${color}-400 border-2 h-[380px] w-72 p-5 items-center text-center py-5 relative ${className}`}>
  <h3 className="text-xl font-bold">{title}</h3>
  {Image}
  {/* <Image
    width={imgSize}
    src={img}
    alt="Icone"
  /> */}
  <p className=" text-slate-500 text-sm">{information}</p>
  <div className="absolute bottom-0 flex flex-col gap-2 py-3 text-center w-full items-center">
    {footer}
    <Link className={buttonVariants({ variant: "outline", className:`bg-${color}-400 text-white`})} href={href}>{linkLabel}</Link>
  </div>
</div>
}

const Testemunhos = ()=>{

  return <section id="testemunhos" className={`${getSectionClass} gap-5 justify-center mt-40`}>
    <div className={`flex flex-col justify-center items-center ${getMaxWidthClasses}`}>
      <TestemunhosList/>
    </div>
  </section>
}


export const TestemunhosList = ()=>{

 


  return < >
    <Carousel className="w-9/12 " plugins={[
      
      Autoplay({
        delay: 10000,
      }),
    ]} opts={{
      align: "center",
      loop: true,
    }}
    >
      <CarouselContent >
        {testimonials.map((t, index)=>{
          return <CarouselItem key={index} className='md:basis-1/2 lg:basis-1/3 justify-center flex'>
            <div className='bg-gray-200 w-72 lg:w-80 rounded-xl h-80 p-5 flex flex-col gap-4'>
              <Quote className='text-blue-400 '/>
              <p className='text-xs lg:text-sm'>{t.quote}</p>
              <p className='w-full text-right text-xs lg:text-base'>{t.author}</p>
            </div>
          </CarouselItem>
        })}
      </CarouselContent>
      <CarouselPrevious/>
      <CarouselNext/>
     
    </Carousel>
  </>
}
export default Home