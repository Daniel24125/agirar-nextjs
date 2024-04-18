import { Button } from '@/components/ui/button'
import { getMaxWidthClasses, getSectionClass } from '@/utils/UtilClasses'
import Head from 'next/head'
import Person from "@/assets/smile.png"
import Image from 'next/image'
import { useRouter } from 'next/router'
import { ScrollArea } from "@/components/ui/scroll-area"
import React, { UIEvent } from 'react'
import { CameraIcon, Share2 } from 'lucide-react'
import TooltipAbstraction  from '@/components/ui/TooltipAbstraction'
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
import SquareGraphics from '@/components/SquareGraphics'
import { Partners } from './sobre'
import Link from 'next/link'



const Home = () => {
  return (
    <>
      <Head>
        <title>Agirar</title>
      </Head>
      <ImageCarrousel/>
      <PsicoseComponent/>
      <Objectives/>
      <Support/>
      <Partners/>
    </>
  )
}


const PsicoseComponent = ()=>{
  return <section className={`${getSectionClass} py-40`} >
    <div className={`flex ${getMaxWidthClasses} `}>
      <div className="flex flex-col w-2/3">
        <h3 className=' text-5xl font-bold '>
          Psicose
        </h3>
        <div className="flex my-6">
          <SquareGraphics
            size={30}
          />
          <h6 className=' my-3 px-6 text-justify w-5/6'>
            Lorem ipsum dolor sit amet consectetur. Velit at facilisi fusce maecenas ornare nam eget. Eget tincidunt id sit pulvinar. Lectus sed iaculis nunc quis morbi nunc pretium scelerisque sed. Id lacus neque aliquet ultricies erat sem ac. Quis sapien nullam sagittis ipsum nibh tristique mauris. Interdum cursus neque scelerisque amet. Leo leo urna dictum condimentum odio senectus ipsum varius. Diam arcu placerat velit mauris. Id sit est magna enim. Faucibus sit dignissim congue elementum auctor blandit diam tellus. Massa commodo etiam commodo diam adipiscing semper ac vitae condimentum. Facilisis fringilla cursus consequat etiam euismod in sit egestas. Eu ultrices in aliquam in quam. Quis posuere nam vitae orci aliquam massa quam lobortis. Vulputate sit pellentesque lorem eu nunc. Cursus quisque nec amet mauris. Sit erat tristique arcu volutpat sit nullam sagittis tellus. Commodo sit eleifend adipiscing tristique massa euismod habitant nunc vestibulum. Lobortis leo interdum euismod diam sem ipsum eu nulla ut. Nullam cum nibh sit sagittis vel non. Congue magna mi dignissim praesent eleifend. Eget elementum imperdiet at turpis. Tempus ac nisl quis in blandit ultricies molestie. In sollicitudin praesent elementum sed vel cursus amet feugiat semper.
          </h6>
        </div>
        <div className="flex my-6">
          <SquareGraphics
            size={30}
          />
          <h6 className=' my-3 px-6 text-justify'>
            Se tiver alguma dúvida ou precisar de ajuda, não hesite em <Link href="/contactos" className=' text-blue-400'>contactar-nos</Link>.
          </h6>
        </div>
        <div className="flex my-6">
          <SquareGraphics
            size={30}
          />
          <h6 className=' my-3 px-6 text-justify'>
          Se tem interesse em juntar-se a nós e dar um contributo fundamental a favor da saúde mental, <Link href="/contactos" className=' text-orange-400'>clique aqui</Link>.
          </h6>
        </div>
      </div>
      <div className='w-1/3 min-w-[300px] h-[600px] rounded-2xl overflow-hidden'>
        <video autoPlay muted loop>
          <source src="/videos/psicose.mp4" type="video/mp4"/>
        </video>
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
  
 
  return <section className={`${getSectionClass} h-96`} >
    
    <Carousel
      setApi={setApi}
      className={`${getMaxWidthClasses}`}
      plugins={[
        Autoplay({
          delay: 5000,
        }),
      ]}
    >
      <CarouselContent >
        <CarouselItem >
          <CarouselCardComponent style={{
            backgroundPosition: "center bottom"
          }} img="/eventos/intro.jpeg">
            <div className="flex flex-col text-white justify-center items-center">
              <h1 className='mb-2 border-b-8 border-orange-400 text-8xl'>AGIRAR</h1>
              <h3 className='text-center max-w-xs text-2xl'>Associação de Familiares e Amigos de Pessoas com Psicose</h3>
            </div>
          </CarouselCardComponent>
        </CarouselItem>
        {events.map((evt, index) => (
          <CarouselItem key={index}>
            <CarouselCardComponent  img={evt.img[0]}>
              <div className="flex w-full h-full flex-col text-white justify-between">
                <div className="flex justify-between">
                  <div className="flex flex-col">
                    <h3 className='text-3xl '>{evt.title}</h3>
                    <h6 className='text-gray-400'>{evt.date}</h6>
                  </div>
                  <PhotoGallery
                    ButtonContent={<CameraIcon/>}
                    imageCollection={evt.img}
                  />
                </div>
                <p className='w-1/2 min-h-[50%]' >
                  {evt.desc}
                </p>
                <div className="flex justify-end">
                  <a className=' text-blue-300' href={evt.href} target='__blank'>Saber mais</a>
                </div>
              </div>
            </CarouselCardComponent>
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
          renderComponent={<Button>Tornar-me Associado</Button>}
          title='Tornar-me Associado'
        />
        
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

  return <section className={`${getSectionClass} h-[calc(100vh-300px)] gap-5 justify-center px-5 `}>
     {/* <DecorationGeometry 
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
    /> */}

    <div className={`flex flex-col items-center h-full ${getMaxWidthClasses} relative justify-center`}>

      {/* @ts-ignore */}
      <SquareGraphics style={{
            position: "absolute",
            top: 0,
            left: 0
      }} size={100}/>

    
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
      {/* @ts-ignore */}
      <SquareGraphics color='#FF985E80' style={{
        position: "absolute",
        bottom: 0, 
        right: 0
        }} size={100}/>
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
              renderComponent={
                <Button variant="link" className='text-center w-full'>
                  <h5 className='text-blue-400 underline font-bold sm:text-lg'>IBAN: PT50 0036 0051 99100351967 81</h5> 
                </Button>
              }
              title='Pagamento Único'
          />

          <MemberComponent
              reason="unico"
              pagamento="mbway"
              renderComponent={
                <Button variant="link" className='text-center w-full'>
                  <h5 className='text-blue-400 underline font-bold sm:text-lg '>MBWAY: 912 353 788</h5> 
                </Button>
              }
              title='Pagamento Único'
          />
          <div className="flex w-full justify-center">
            <MemberComponent
                reason='mensal'
                pagamento='transferencia'
                renderComponent={<Button>Tornar-me Sócio</Button>}
                title='Tornar-me Associado'
            />
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
    const elRectTop =  el.getBoundingClientRect().top || 600
    setTranslate(elRectTop <= 350)
  }
  React.useEffect(()=>{
    //@ts-ignore
    document.addEventListener("scroll", checkTrasitionNeeded)
    
    //@ts-ignore
    return ()=> window.removeEventListener("scroll", checkTrasitionNeeded);
  },[])

  return <section id="support" className={`${getSectionClass} gap-5 justify-center`}>
    <div className={`flex justify-center items-center ${getMaxWidthClasses}`}>
      <div className={` transition-all  flex flex-col ${translate ? "mr-5": "translate-x-2/4 delay-[3000]"} bg-white rounded-3xl border-orange-400 border-2 h-[450px] w-80 items-center text-center py-5 relative`}>
        <h5 className="text-lg font-bold mb-20">Apoie a AGIRAR</h5>
        <h4 className="text-2xl font-bold">Faça um Donativo</h4>
        <p className=" text-slate-500 text-sm">Ajude-nos a fazer a diferença</p>
        <div className="absolute bottom-0 flex flex-col gap-2 py-3 text-center w-full">
          <p className=" text-slate-500 font-bold text-sm">IBAN: PT50 0036 0051 99100351967 81</p>
          <p className=" text-slate-500 font-bold text-sm">MBWAY: 912 353 788</p>
          <a href='#' className='text-orange-400'>Saber mais</a>
        </div>
      </div>

      <div className={`flex flex-col rounded-3xl bg-white z-10 border-blue-400 border-2 h-[550px] w-[400px] items-center  text-center p-7 relative`}>
        <h5 className=" text-base font-bold mb-5 text-blue-400">Apoie a AGIRAR</h5>
        <h4 className="text-lg font-bold w-[90%] mb-9">Preencha a ficha de inscrição e junte-se a nós</h4>
        <p className=" font-bold text-sm">Vantagens de ser associado</p>
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
        </div>

        <div className="absolute bottom-5 flex flex-col gap-2 py-3 text-center w-full items-center">
          <Button >Associado</Button>
        </div>
      </div>
      <div className={` transition-all flex flex-col rounded-3xl bg-white ${translate ? "ml-5": "translate-x-[-50%] delay-[3000] "} border-orange-400 border-2 h-[450px] w-80 items-center text-center py-5 relative`}>
        <h5 className="text-lg font-bold mb-10 w-[80%]">Torne-se voluntário da AGIRAR</h5>
        <h4 className="font-bold w-1/2">Uma oportunidade de nos ajudar</h4>
        
        <div className="absolute bottom-0 flex flex-col gap-2 py-3 text-center w-full items-center">
          
        <Button className='bg-orange-400'>Voluntário</Button>
        </div>
      </div>
      
    </div>
  </section>
}

export default Home