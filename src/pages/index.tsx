import { Button } from '@/components/ui/button'
import { getMaxWidthClasses, getSectionClass } from '@/utils/UtilClasses'
import Image from 'next/image'
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
  type CarouselApi } from '@/components/ui/carousel'
import Autoplay from "embla-carousel-autoplay"
import { Card, CardContent } from '@/components/ui/card'
import { Dialog, DialogContent, DialogTrigger } from '@/components/ui/dialog'
import {SquareGraphics} from '@/components/UtilsGraphics'
import { Partners } from './sobre'
import BulletTextComponent from '@/components/ui/BulletTextComponent'
import ImageVoluntatios from "@/assets/home/objetivos.jpg"
import ImagemPsicose from "@/assets/home/psicose-bullet.jpg"
import DonativoIcon from "@/assets/home/donativo.jpg"
import AssociadoIcon from "@/assets/home/associado.jpg"
import VoluntarioIcon from "@/assets/home/voluntário.jpg"


const Home = () => {
  return (
    <>
      <ImageCarrousel/>
      <PsicoseComponent/>
      <Objectives/>
      <Support/>
      <Partners/>
    </>
  )
}


const PsicoseComponent = ()=>{
  return <section id="psicose" className={`${getSectionClass} my-40 px-5`} >
    <div className={`flex ${getMaxWidthClasses} `}>
      <div className="flex flex-col w-2/3">
        <h3 className=' text-5xl font-bold mb-4'>
          Psicose
        </h3>
        <BulletTextComponent
          BulletComponent={<SquareGraphics size={30}/>}
          text={<span>O termo <strong>Psicose</strong> não se refere a uma doença específica. É uma síndrome, um conjunto de sintomas comuns a várias perturbações mentais, das quais a mais comum é a <strong>Esquizofrenia</strong>. </span>}
        />
        <BulletTextComponent
          BulletComponent={<SquareGraphics size={30}/>}
          text={<span>No episódio psicótico a pessoa tem uma perceção distorcida da realidade ou a sua interpretação é diferente da maioria das pessoas. Os <strong>sintomas</strong> mais comuns incluem os delírios (crenças que não correspondem á realidade) e as alucinações (ver, ouvir, sentir coisas não reais). No entanto, vários outros se manifestam: discurso incoerente, alterações de comportamento, etc. As pessoas com psicose podem ainda apresentar ansiedade, depressão, insónias, isolamento social, falta de motivação e apresentar dificuldades no seu funcionamento do dia a dia.</span>}
        />

        <BulletTextComponent
          BulletComponent={<SquareGraphics size={30}/>}
          text={
            <span>
              Os episódios psicóticos variam na sua intensidade e duração. O seu <strong>tratamento</strong> inclui medicação antipsicótica, medicação para outra sintomatologia (ansiedade, insónia, …), e intervenções psicoterapêuticas individuais e em grupo.
            </span>
          }
        />
        <BulletTextComponent
          BulletComponent={<SquareGraphics size={30}/>}
          text="Reconhecer precocemente os sintomas da psicose e procurar ajuda é essencial para a pessoa que experiencia esta alteração e para o seu familiar."
        />
        <BulletTextComponent
          BulletComponent={<SquareGraphics size={30}/>}
          text="O tratamento precoce é um fator positivo e melhora o prognóstico sendo ainda preditor de uma melhor qualidade de vida."
        />
      </div>
      <div className='w-1/3 min-w-[300px] h-[600px] rounded-2xl overflow-hidden'>
          <Image
            src={ImagemPsicose}
            width={350}
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
  const events = getTheLastEvents(5)

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
            <div className={`flex justify-center h-96  bg-${index%2 === 0 ? "orange" : "blue"}-100 p-8 rounded-lg`}>
              <div className={`${getMaxWidthClasses} flex justify-between`}>
                <div className="flex flex-col w-full">
                  <h3 className='text-2xl'>{evt.title}</h3>
                  <h6 className='text-gray-400'>{evt.date}</h6>
                  <p className='w-1/2 min-h-[65%] text-sm mt-5' >
                    {evt.desc}
                  </p>
                  <div className="flex justify-end pr-5">
                    <a className=' text-blue-300 font-bold' href={evt.href} target='__blank'>Saber mais</a>
                  </div>
                </div>
                <img className="h-full rounded-lg" src={evt.img[0]} alt="imagem do evento" />
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

  return <section id="objetivos"  className={`${getSectionClass} h-[calc(100vh-400px)] justify-center px-5 bg-blue-100`}>
    <div className={`flex justify-center items-center h-full gap-10 ${getMaxWidthClasses} relative justify-center`}>
      <Image
        className=' opacity-70'
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
                  <h5 className='text-blue-400 underline font-bold sm:text-lg'>IBAN: PT50 0036 0051 99100351967 81</h5> 
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
    setTranslate(elRectTop <= 350)
  }
  React.useEffect(()=>{
    //@ts-ignore
    document.addEventListener("scroll", checkTrasitionNeeded)
    
    //@ts-ignore
    return ()=> window.removeEventListener("scroll", checkTrasitionNeeded);
  },[])

  return <section id="support" className={`${getSectionClass} gap-5 justify-center mt-20`}>
    <div className={`flex justify-center items-center ${getMaxWidthClasses}`}>
      <div className={` transition-all flex flex-col gap-5 ${translate ? "mr-5": "translate-x-2/4 delay-[3000]"} bg-white rounded-3xl border-orange-400 border-2 h-[450px] w-80 items-center text-center py-5 relative`}>
        <h3 className="text-lg font-bold">FAÇA UM DONATIVO</h3>
        <Image

          width={70}
          src={DonativoIcon}
          alt="Icone donativo"
        />
        <p className=" text-slate-500 text-sm">Ajude-nos a fazer a diferença. O seu donativo ajuda-nos a continuar a nossa atividade.</p>
        <div className="absolute bottom-0 flex flex-col gap-2 py-3 text-center w-full">
          <p className=" text-slate-500 font-bold text-sm">IBAN: PT50 0036 0051 99100351967 81</p>
          <p className=" text-slate-500 font-bold text-sm">MBWAY: 912 353 788</p>
          <a href='#' className='text-orange-400'>Doar</a>
        </div>
      </div>

      <div className={`flex flex-col rounded-3xl bg-white z-10 border-blue-400 border-2 h-[550px] w-[400px] items-center  text-center p-7 relative`}>
        <h3 className="text-lg font-bold w-[90%] mb-9">TORNE-SE ASSOCIADO</h3>
        <Image
          width={130}
          src={AssociadoIcon}
          alt="Icone associado"
        />
        <p className=" text-slate-500 text-sm">Junte-se a nós, e seja proativo nesta iniciativa em prol da saúde mental.</p>

        {/* <p className=" font-bold text-sm">Vantagens de ser associado</p>
        <div className="flex text-start w-[90%] mt-4">
          <SquareGraphics size={30}/>
          <p className='text-sm ml-4'>Contribui para uma causa nobre a favor da saúde mental</p>
        </div>
        <div className="flex text-start w-[90%] mt-2">
          <SquareGraphics size={30}/>
          <p className='text-sm ml-4'>Lorem ipsum dolor sit amet consectetur. Consequat condimentum adipiscing velit lectus pellentesque integer ac purus neque.</p>
        </div>
        <div className="flex text-start w-[90%] mt-2">
          <SquareGraphics size={30}/>
          <p className='text-sm ml-4'>Lorem ipsum dolor sit amet consectetur. Consequat condimentum adipiscing velit lectus pellentesque integer ac purus neque.</p>
        </div> */}

        <div className="absolute bottom-5 flex flex-col gap-2 py-3 text-center w-full items-center">
          <Button >Associado</Button>
        </div>
      </div>
      <div className={` transition-all flex flex-col rounded-3xl bg-white ${translate ? "ml-5": "translate-x-[-50%] delay-[3000] "} border-orange-400 border-2 h-[450px] w-80 items-center text-center py-5 relative`}>
        <h5 className="text-lg font-bold mb-10 w-[80%]">TORNE-SE VOLUNTÁRIO</h5>
        <Image
          width={130}
          src={VoluntarioIcon}
          alt="Icone voluntário"
        />
        <p className=" text-slate-500 text-sm">Contribua com o seu tempo/aptidões e venha colaborar connosco.</p>

        <div className="absolute bottom-0 flex flex-col gap-2 py-3 text-center w-full items-center">
          
        <Button className='bg-orange-400'>Voluntário</Button>
        </div>
      </div>
      
    </div>
  </section>
}

export default Home