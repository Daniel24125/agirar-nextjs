import DecorationGeometry from '@/components/DecorationGeometry'
import DotVector from '@/components/DotVector'
import MemberComponent from '@/components/MemberComponent'
import { Button} from '@/components/ui/button'
import { PageTitleAlternative } from '@/components/UtilsGraphics'
import { TServicos, servicosFamiliar, servicosUtente } from '@/utils/Servicos'
import { getMaxWidthClasses, getSectionClass } from '@/utils/UtilClasses'
import Image, { StaticImageData } from 'next/image'
import React, { Dispatch, SetStateAction } from 'react'
import LaCaixa from "@/assets/servicos/lacaixa.png"
import ULS from "@/assets/servicos/uls.png"
import PNC from "@/assets/servicos/clique.jpg"
import { DownloadIcon, ExternalLink} from 'lucide-react'
import Link from 'next/link'
import TooltipAbstraction from '@/components/ui/TooltipAbstraction'
import { Dialog, DialogClose, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle } from '@/components/ui/dialog'
import { Carousel, CarouselApi, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from '@/components/ui/carousel'
import { Badge } from '@/components/ui/badge'
import { saveAs } from 'file-saver'
import { Select, SelectContent,  SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select'




const ServiceContext = React.createContext<Partial<{
  selectedService: null | TServicos, 
  setSelectedService: Dispatch<SetStateAction<TServicos | null>>
}>>({})

const Servicos = () => {
  const [selectedService, setSelectedService] = React.useState<null | TServicos>(null)
  return <ServiceContext.Provider value={{
    selectedService,
setSelectedService
  }}>
    <PageTitleAlternative
      title={
        <p className='text-4xl md:text-6xl text-center font-bold'>O QUE FAZEMOS</p>
      }
    />
    {/* <HeaderSection/> */}
    <ServicesColection/>
    <Projetos/>
    <Protocolos/>
  </ServiceContext.Provider>
}

const HeaderSection = ()=>{
  return <section className={`${getSectionClass} h-[50vh] lg:h-[calc(100vh-64px)] justify-center`}>
    <DecorationGeometry 
      color="blue"
      size="w-4/12 h-32 lg:h-64"
      position="absolute top-10 left-0"
      borderRadius="rounded-tr-3xl rounded-br-3xl"
    />
      <DecorationGeometry 
      color="orange"
      size="w-4/12 h-32 lg:h-64"
      position="absolute bottom-10 right-0"
      borderRadius="rounded-tl-3xl rounded-bl-3xl"
    />
    <div className="flex flex-col relative text-center text-xl md:text-3xl lg:text-5xl font-bold items-center ">
      <DotVector
      />
      <h2>Torne-se Associado e Participe nas </h2>
      <h2 className='relative w-full mb-7 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-orange-600'>
         Nossas Atividades/Eventos
        <DotVector
          color='bg-blue-400'
          position='-bottom-5 -right-1'
          rotate={true}
        />
        </h2>
        <MemberComponent
            title='Tornar-me Associado'
            reason='mensal'
            pagamento='transferencia'
        >
          <Button>Tornar-me Associado</Button>
        </MemberComponent>
    </div>
  </section>
}

const ServiceDetails = ()=>{
  const {selectedService, setSelectedService} = React.useContext(ServiceContext)

  return  <Dialog open={Boolean(selectedService)} onOpenChange={setSelectedService! as ()=>void}>
  
  <DialogContent  className="sm:max-w-md">
    <DialogHeader>
      <DialogTitle>{selectedService?.title}</DialogTitle>
      <DialogDescription>
        <p className='my-5'>{selectedService?.desc}</p>
        <p className='w-full text-center text-blue-400 font-bold'>
          {selectedService?.day} | {selectedService?.time}
        </p>
      </DialogDescription>
    </DialogHeader>
    
    <DialogFooter className="sm:justify-start">
      <DialogClose asChild>
        <Button onClick={()=>setSelectedService!(null)} type="button" variant="secondary">
          Fechar
        </Button>
      </DialogClose>
    </DialogFooter>
  </DialogContent>
</Dialog>
}

const ServicesColection = ()=>{
  const [selectedServiceType, setSelectedServiceType] = React.useState<"utentes" | "familias">("utentes")
  
  return <section className={`${getSectionClass} sm:top-0`}>
    <div className={`${getMaxWidthClasses} flex flex-col gap-10`}>
      <Subtitle title="Serviços">
        <div className=' gap-2 flex items-center'>
          {/* <Button  onClick={()=>setSelectedServiceType("utentes")} variant={selectedServiceType === "utentes"? "default": "outline"} className={`hidden sm:block ${selectedServiceType === "utentes"?"bg-orange-400": ""} `}>Utentes</Button>
          <Button  onClick={()=>setSelectedServiceType("familias")} variant={selectedServiceType === "familias"? "default": "outline"} className={`hidden sm:block ${selectedServiceType === "familias"?"bg-orange-400": ""} `}>Familiares</Button>
           */}
          {/* <Badge className='block md:hidden' >{selectedServiceType === "utentes" ? "Utentes": "Famílias"}</Badge> */}
          
          
          <Select onValueChange={(val:"utentes" | "familias") =>setSelectedServiceType(val)}>
            <SelectTrigger value={selectedServiceType}>
              <SelectValue  placeholder={`${selectedServiceType[0].toUpperCase()}${selectedServiceType.substring(1,selectedServiceType.length)}`}  />
            </SelectTrigger>
            <SelectContent>
                <SelectItem value="utentes">Utentes</SelectItem>
                <SelectItem value="familias">Família</SelectItem>
            </SelectContent>
          </Select>
          <TimesheetDonwload selectedServiceType={selectedServiceType}/>
          
{/*           
          <DropdownMenu >
            <DropdownMenuTrigger asChild>
              <Button className='block md:hidden' variant="ghost" size="icon">
                <MoreVerticalIcon/>
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent className="w-56">
              <DropdownMenuLabel>Tipos de Serviços</DropdownMenuLabel>
              <DropdownMenuSeparator />
              <DropdownMenuGroup>
                <DropdownMenuItem onClick={()=>setSelectedServiceType("utentes")}>
                  <UserIcon/>
                  <span>Utentes</span>
                  {selectedServiceType === "utentes" && <DropdownMenuShortcut>
                    <div className='w-2 h-2 rounded-full bg-orange-400'></div>
                  </DropdownMenuShortcut>}
                </DropdownMenuItem>
                <DropdownMenuItem onClick={()=>setSelectedServiceType("familias")}>
                  <UsersIcon/>
                  <span>Famílias</span>
                  {selectedServiceType === "familias" && <DropdownMenuShortcut>
                    <div className='w-2 h-2 rounded-full bg-blue-400'></div>
                  </DropdownMenuShortcut>}
                </DropdownMenuItem>
              </DropdownMenuGroup>
  
            </DropdownMenuContent>
          </DropdownMenu> */}
        </div>
      </Subtitle>
      <ServiceDetails/>
      <ServicesList
        collection={selectedServiceType === "utentes" ? servicosUtente : servicosFamiliar}
      />
    </div>
  </section>
}

const TimesheetDonwload = ({selectedServiceType}: {selectedServiceType:"utentes" | "familias"})=>{
  return <TooltipAbstraction title='Download do horário completo'>
  <Button variant="outline" size="icon" onClick={()=>{
    
    saveAs(`/servicos/horario_${selectedServiceType}.pdf`, `horario_${selectedServiceType}.pdf`)
  }} >
    <DownloadIcon/>
  </Button>
</TooltipAbstraction>
}

const ServicesList = ({
  collection
}:{
  collection: TServicos[]
})=>{
  const {setSelectedService} = React.useContext(ServiceContext)
  const [open, setOpen] = React.useState<null | string>(null)

  return <div className='w-full flex justify-center sm:justify-between gap-6 flex-wrap md:px-0'>
  {collection.map((s:TServicos)=>{
    return <React.Fragment key={s.id}>
        <div  className='flex flex-col p-4 rounded-lg border w-80 items-start'>
          <h6 className=' font-bold mb-2 md:text-md h-12 text-start'>{s.title}</h6>
            <div 
              title='Ver galeria'
              onClick={(e)=>{
                e.stopPropagation()
                setOpen(s.id)
              }}
              style={{
                backgroundImage: `url("${s.img[0]}")`,
                backgroundSize: "cover",
                backgroundPosition: "center"
              }} className='w-full h-[200px] rounded-lg border cursor-pointer'
            ></div>
          <div className='flex w-full justify-end pt-4'>
              <Button variant="ghost" onClick={()=>setSelectedService!(s)}>Saber mais</Button>
          </div>
        </div>
      <GalleryComponent
        imgs={s.img}
        open={open === s.id}
        setOpen={()=>setOpen(null)}
      />
     
    </React.Fragment>
  })}
</div>
}

const GalleryComponent = ({imgs, open, setOpen}:
  {imgs:string[], open:boolean, setOpen:Dispatch<SetStateAction<boolean>>})=>{
  const [api, setApi] = React.useState<CarouselApi>()
  const [current, setCurrent] = React.useState(0)
  const [count, setCount] = React.useState(0)

  React.useEffect(() => {
    if (!api) {
      return
    }
 
    setCount(api.scrollSnapList().length)
    setCurrent(api.selectedScrollSnap() + 1)
 
    api.on("select", () => {
      setCurrent(api.selectedScrollSnap() + 1)
    })
  }, [api])

  return <Dialog open={open} onOpenChange={setOpen} >
    <DialogContent  className="max-w-lg flex items-center flex-col w-screen">
      <Carousel setApi={setApi} className="w-[80%]">
        <CarouselContent >
          {imgs.map((img, index) => (
            <CarouselItem key={index}>
              <div className='w-full h-64 mt-4' style={{
                backgroundImage: `url("${img}")`,
                backgroundPosition: "center",
                backgroundSize: "cover"
              }}>

              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
      <div className="py-2 text-center text-sm text-muted-foreground">
        Imagem {current} de {count}
      </div>
    </DialogContent>
  </Dialog>
}

const Projetos = ()=>{

  return <section className={`${getSectionClass} top-16 py-16 bg-blue-50 mb-10`}>
    <div className={`${getMaxWidthClasses} flex flex-col gap-10`}>
      <Subtitle title="Projetos" color='orange'/>
      <Projeto 
        title='Projeto ReIntegrar'
        support='BPI Fundação “La Caixa” Iniciativa Social Descentralizada (ISD)'
        imageURL={LaCaixa}
      > 
        <p className='text-sm text-justify'>A AGIRAR obteve em 2024 a aprovação da sua candidatura à ISD. O objetivo do Projeto é promover a reabilitação psicossocial de pessoas com doença mental grave e aumentar a literacia em saúde mental de cuidadores e doentes. </p>
        <p className='text-sm text-justify mt-2'>A operacionalização do Projeto prevê:</p>
        <ul className=' list-disc pl-7 mt-2'>
          <li className='text-sm text-justify'>A implementação de atividades psicoterapêuticas visando a maior autonomia e integração social do individuo;</li>
          <li className='text-sm text-justify'>Sessões psicoeducativas dirigidas a utentes e seus cuidadores de forma a aumentar a literacia em saúde mental;</li>
          <li className='text-sm text-justify'>Apoio psicoterapêutico individualizado e em grupo por parte de técnicos de várias áreas.</li>
        </ul>
      </Projeto>
      <Projeto 
        title='Apenas um Clique'
        support='Unidade Local de Saúde Gaia e Espinho'
        className='mt-20'
        imageURL={PNC}
      > 
        <p className='text-sm text-justify'>A AGIRAR obteve em Abril de 2024 a aprovação de um projeto relacionado com a cedência de equipamento informático. O objetivo do Projeto é aumentar as competências digitais de utentes, familiares e Associados, promover a interação social dos envolvidos e fomentar a confiança na utilização de ferramentas digitais.</p>
        <p className='text-sm text-justify mt-2'>A operacionalização do Projeto prevê:</p>
        <ul className=' list-disc pl-7 mt-2'>
          <li className='text-sm text-justify'>Sessões formativas presenciais sobre os computadores, seus componentes e diferentes programas, com entrega de um manual com a informação básica das sessões;</li>
          <li className='text-sm text-justify'>Aprender a elaborar um curriculum vitae e a navegar de forma segura na internet nomeadamente para a procura de emprego;</li>
          <li className='text-sm text-justify'>Utilização do computador como forma de lazer, interagindo nas redes sociais.</li>
        </ul>
        <div className='w-full flex justify-end mt-5'>
          <Image className='p-2 rounded-lg border-blue-100 border-2' src={ULS} alt="Logo ULS" height={30}/>
        </div>
      </Projeto>
    </div>
  </section>
}

const Projeto = ({
  className,
  title,
  support,
  imageURL,
  children
}:{
  className?: string, 
  title: string,
  support: string,
  imageURL:StaticImageData, 
  children: React.ReactNode
})=>{
  return <div className={`w-full flex sm:flex-row flex-col justify-between ${className}`}>
    <div className='flex flex-col w-full sm:w-1/2'>
      <h3 className='text-blue-400 text-lg font-bold'>{title}</h3>
      <span className='text-gray-400 text-sm mb-5'>{support}</span>
      {children}
    </div>
    <div className='h-full w-full sm:w-3/4 max-w-sm flex items-center'>
      <Image className='p-2 rounded-lg border-blue-100 ' src={imageURL} alt="Logo ULS" width={500}/>
    </div>
  </div>
}

const Protocolos = ()=>{
  return <section className={`${getSectionClass} py-16 mb-10`}>
    <div className={`${getMaxWidthClasses} flex flex-col gap-10`}>
      <Subtitle title="Protocolos"/>
      <Protocolo
        title='Immersivus'
        href='https://www.immersivus.com'
        logo='/parceiros/immersivus.png'
      />
    </div>
  </section>

}

const Protocolo = ({
  title, 
  href,
  logo
}:{
  title:string
  href:string
  logo:string
})=>{
  return <div className='flex flex-col justify-between w-full sm:w-[650px] bg-white border rounded-2xl  px-5 py-2'>
    <div className='flex justify-between items-center mb-5'>
      <h5 className='font-bold text-lg'>{title}</h5>
      <Button variant="ghost" size="icon">
        <Link target="_blank" href={href}>
          <ExternalLink size={15}/>
        </Link>
      </Button>
    </div>
    <div className='flex sm:flex-row flex-col justify-between gap-3'>
      <div className='w-full sm:w-4/5 flex flex-col gap-2'>
        <p className='text-blue-400 font-bold text-xs'>Condições para associados Agirar:</p>
        <p className='text-xs'>Os Associados têm acesso à compra de &quot;Bilhete-Parceiro&quot;. O valor varia conforme o cada espetáculo e é sempre inferior ao praticado na venda ao público. Para usufruir deste tipo de bilhete é necessário fazer pré-reserva informando que é associado da AGIRAR. No dia do espetáculo deve apresentar nas bilheteiras o cartão de associado e uma declaração em como tem as quotas desse ano regularizadas (pedir antecipadamente por email). </p>
      </div>
      <div className='w-full sm:w-1/5 min-w-[100px] flex items-center justify-center'>
        <Image src={logo} alt="Logo de protocolo" width={80} height={50} />
      </div>
    </div>
  </div>
}

const Subtitle = ({
  title,
  color="blue",
  children
}:{
  title: string,
  color?: "blue" | "orange"
  children?: React.ReactNode
})=>{
  return <div className='flex flex-col gap-2'>
    <div className='flex w-full justify-between'>
      <h3 className='text-2xl font-bold'>{title}</h3>
      {children ? children : ""}
    </div>
    <DecorationGeometry
      color={color}
      size="w-1/2 h-2"
      position="relative "
      borderRadius="rounded-3xl"
      className={color === "orange" ? "bg-orange-200 z-10": ""}
    />
  </div>
}

export default Servicos