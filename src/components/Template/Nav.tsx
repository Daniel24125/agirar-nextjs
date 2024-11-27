import React from 'react'
import ThemeModeToggle from "./ThemeModeToggle"
import { Button, buttonVariants } from '../ui/button'
import { useRouter } from 'next/router'
import { Facebook, Instagram, LucideIcon, Mail, MapPin, MenuIcon } from 'lucide-react'
import { getMaxWidthClasses } from '@/utils/UtilClasses'
import Logo from '../Logo'
import { Sheet,SheetContent, SheetDescription, SheetHeader,  SheetTrigger } from '../ui/sheet'
import MemberComponent from '../MemberComponent'
import TooltipAbstraction from '../ui/TooltipAbstraction'
import { NavigationMenuList, NavigationMenu, NavigationMenuItem, NavigationMenuTrigger, NavigationMenuContent, NavigationMenuLink } from '../ui/navigation-menu'
import { cn } from "@/lib/utils"
import Link from 'next/link'
import { Drawer, DrawerContent, DrawerDescription, DrawerFooter, DrawerHeader, DrawerTitle, DrawerTrigger } from '../ui/drawer'




const Nav = () => {
    return (<>
        <MobileNavigation/>
        <DesktopNavigation/>
    </>
  )
}

const DesktopNavigation = ()=>{
    return <nav className='bg-white  justify-center items-center py-4 fixed top-0 z-50 w-full hidden md:flex  '>
    <div className={`${getMaxWidthClasses} px-5 flex justify-between items-center`}>
        {/* <MenuBtn/> */}
        <Logo className='mr-4' height={112}/>
        <div className="flex-col w-full ">
            <div className="w-full  h-16 ml-4 flex justify-end items-center px-2">
                {/* <ComunicadosComponent/> */}
                <SocialBtns show='all'/>
            </div>
            <div className="w-full flex justify-between py-2 px-4 bg-blue-100 rounded-lg ">
                <div className='hidden md:flex '>
                    <NavBtns/>
                </div>
                <CallForActionNav/>
            </div>
        </div>
    </div>
</nav>
}


const MobileNavigation = ()=>{
    return <>
        {/* <MobileNavigationHeader/> */}
        <MobileNavigationButtons/>
        
    </>
}

const MobileNavigationHeader = ()=>{
    return <div className='w-screen p-4 flex justify-between items-center fixed top-0 z-50 md:hidden'>
        <Logo className='mr-4' height={70}/>
        <div className='flex gap-2'>
            <SocialBtns show='all' size='w-5'/>
        </div>
    </div>
} 

const MobileNavigationButtons = ()=>{
    return <>
        <nav className='w-screen p-3 flex flex-col items-center fixed bottom-0 z-50'>
            <div className='w-1/2 h-2 rounded-xl bg-slate-200'></div>
            <div className='flex justify-center w-full gap-4'>
                
            </div>
        </nav>
        <Drawer >
            
            <DrawerContent>
                <DrawerHeader>
                <DrawerTitle>Are you absolutely sure?</DrawerTitle>
                <DrawerDescription>This action cannot be undone.</DrawerDescription>
                </DrawerHeader>
                <DrawerFooter>
                <Button>Submit</Button>
           
                </DrawerFooter>
            </DrawerContent>
        </Drawer>
    </>
}

const CallForActionNav = ({
    size= "w-4 h-4 sm:w-6 sm-h-6"
}:{
    size?: string
})=>{
    return <div className="flex gap-2">
        <TooltipAbstraction
            title="Tornar-me Associado">
            <Link className={buttonVariants({variant: "outline"})} href="/apoiar?tab=associado">Associado</Link>
            {/* <MemberComponent
                title='Tornar-me Associado'
                reason='mensal'
                pagamento='transferencia'
            >
                <span  className={`h-10 px-4 py-2 cursor-pointer inline-flex items-center justify-center rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 border-2 bg-blue-400 bg-primary text-primary-foreground hover:bg-primary/90`}>
                    Associado
                </span>
            </MemberComponent> */}
        </TooltipAbstraction>
        <TooltipAbstraction
            title="Fazer um donativo">
            <Link className={buttonVariants()} href="/apoiar?tab=doar">Doar</Link>

            {/* <MemberComponent
                title='Tornar-me Associado'
                reason="unico"
                pagamento='transferencia'
            >
                <span className={`h-10 px-4 py-2 cursor-pointer inline-flex items-center justify-center rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 border-2 bg-blue-400 bg-primary text-primary-foreground hover:bg-primary/90`}>
                    Doar
                </span>
            </MemberComponent> */}
        </TooltipAbstraction>
        {/* <ThemeModeToggle className='hidden sm:flex'/> */}

    </div>
}

const ComunicadosComponent = ()=>{
    return <div className='w-full'>
        <p className=' text-blue-400 text-sm font-bold'>COMUNICADOS</p>
        <p className="text-sm">Convocatória para a Assembleia Geral ordinária pelas 17:00 do dia 31/03/2024 </p>
    </div>
}

const MenuBtn = ()=>{
    const [open, setOpen] = React.useState(false)
    return <>
        <Sheet open={open} onOpenChange={setOpen}>
            <SheetTrigger asChild >
                <Button className='md:hidden' variant="ghost" size="icon">
                    <MenuIcon/>
                </Button>
            </SheetTrigger>
            <SheetContent side="top" className="w-screen">
                <SheetHeader>  
                    <SheetDescription>
                        <div className="flex flex-col gap-7">
                            <Logo/>
                            <NavBtns onClick={()=>{
                                setOpen(false)
                            }} />
                            <div className="flex w-full justify-center gap-5 mt-32 items-center">
                                <SocialBtns size='w-6 sm-h-6'/>
                                <ThemeModeToggle/>
                            </div>
                        </div>
                    </SheetDescription>
                </SheetHeader>
            </SheetContent>
        </Sheet>
        
    </>
}

const NavBtns = ({
    onClick
}:{
    onClick?: any
})=>{
    const {push, asPath, query} = useRouter()
    const routes = [
        {
            title: "Início",
            href: "/", 
            // displayImage: <Logo className="h-full w-full" />,
            displayImage: false,
            subMenus: [
                {
                    title: "Psicose",
                    desc: "Uma breve descrição sobre o que é a psicose",
                    href: "/?scrollTo=psicose"
                },
                {
                    title: "Objetivos",
                    desc: "Um resumo dos principais objetivos da AGIRAR",
                    href: "/?scrollTo=objetivos"
                },
                {
                    title: "Parceiros",
                    desc: "Uma lista dos nossos parceiros",
                    href: "/?scrollTo=parceiros"
                },
                {
                    title: "Testemunhos",
                    desc: "O que os nossos utentes dizem sobre nós",
                    href: "/?scrollTo=testemunhos"
                }
            ]
        },
        {
            title: "Quem somos",
            href: "/sobre", 
            displayImage: false,
            // displayImage: <img className='rounded-xl' src="https://images.pexels.com/photos/1955134/pexels-photo-1955134.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"/>,
            subMenus: [
                // {
                //     title: "A AGIRAR",
                //     desc: "Uma breve história sobre a nossa origem",
                //     href: "/sobre?scrollTo=origem"
                // },
            ]
        },
        {
            title: "O que fazemos",
            href: "/servicos", 
            displayImage: false,
            // displayImage: <img className='rounded-xl' src="https://images.pexels.com/photos/2539658/pexels-photo-2539658.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"/>,
            subMenus: [
                {
                    title: "Serviços",
                    desc: "Os serviços que temos disponíveis na nossa instituição",
                    href: "/servicos?scrollTo=servicos"
                },
                {
                    title: "Projetos",
                    desc: "Os projetos que foram aprovados",
                    href: "/servicos?scrollTo=projetos"
                },
                {
                    title: "Protocolos",
                    desc: "Vantagens para os nossos associados",
                    href: "/servicos?scrollTo=protocolos"
                },
            ]
        },
        {
            title: "Notícias",
            href: "/noticias", 
            displayImage: false,
            subMenus: []
        },
        {
            title: "Contactos",
            href: "/contactos", 
            displayImage: <img className='rounded-xl' src="/map.png"/>,
            subMenus: [
                {
                    title: "Morada",
                    desc: "Rua das Mimosas, 81-A | 4430-458, Vilar de Andorinho",
                    href: "https://www.google.com/maps?ll=41.099453,-8.590646&z=16&t=m&hl=en&gl=PT&mapclient=embed&q=4430-458+Vila+Nova+de+Gaia"
                },
                {
                    title: "Telemóvel",
                    desc: "912 353 788",
                    href: "tel:912353788"
                },
                {
                    title: "Email",
                    desc: "agirar.2013@gmail.com",
                    href: "mailto:agirar.2013@gmail.com"
                },
            ]
        }
    ]

    React.useEffect(()=>{
        if(query && query.scrollTo){
            //@ts-ignore
            const element = document.getElementById(query.scrollTo)
            if(element){
                element.scrollIntoView({ behavior: "smooth"});
            }

        }
    },[query])

    return <NavigationMenu>
        <NavigationMenuList>
            {routes.map((r: any)=>{
                return r.subMenus.length > 0 ? <NavigationMenuItem key={r.title}>
                <NavigationMenuTrigger className={`${asPath.replaceAll("/", "") === r.href.replaceAll("/", "") ? "text-blue-400": ""} text-lg bg-transparent`}>
                    <a href={r.href}>{r.title}</a>
                </NavigationMenuTrigger>
                {r.subMenus.length > 0 && <NavigationMenuContent>
                    <ul className="grid gap-3 p-6 md:w-[400px] lg:w-[500px] lg:grid-cols-[.75fr_1fr]">
                        {r.displayImage && <li className="row-span-3">
                            {r.displayImage} 
                        </li>}
                        {r.subMenus.map((s:any)=>{
                            return <ListItem key={s.title} onClick={()=>{
                                push(s.href)
                            }} title={s.title}>
                            {s.desc}
                        </ListItem>
                        })}  
                    </ul>
                </NavigationMenuContent>}
            </NavigationMenuItem> : 
            <Button onClick={()=>{
                push(r.href)
            }} variant="ghost" className={`${asPath.replaceAll("/", "") === r.href.replaceAll("/", "") ? "text-blue-400": ""} text-lg bg-transparent`}> {r.title}</Button>
            })}
            
        </NavigationMenuList>
        {/* <Button size="lg" className={`${asPath === "/" ? "text-orange-400": ""} text-lg`} onClick={()=>{
            push("/")
            if(onClick) onClick()
        }} variant="link">Início</Button>
        <Button size="lg" className={`${asPath === "/sobre/" ? "text-orange-400": ""} text-lg`} onClick={()=>{
            push("/sobre")
            if(onClick) onClick()
        }} variant="link">Sobre Nós</Button>
        <Button size="lg" className={`${asPath === "/servicos/"? "text-orange-400": ""}  text-lg`} onClick={()=>{
            push("/servicos")
            if(onClick) onClick()
        }} variant="link">Os Nossos Serviços</Button>
        <Button size="lg" className={`${asPath === "/contactos/"? "text-orange-400": ""} text-lg`} onClick={()=>{
            push("/contactos")
            if(onClick) onClick()
        }} variant="link">Contactos</Button> */}
    </NavigationMenu>
}

const ListItem = React.forwardRef<
  React.ElementRef<"a">,
  React.ComponentPropsWithoutRef<"a">
>(({ className, title, children, ...props }, ref) => {
  return (
    <li>
      <NavigationMenuLink asChild>
        <a
          ref={ref}
          className={cn(
            "cursor-pointer block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
            className
          )}
          {...props}
        >
          <div className="text-sm font-medium leading-none">{title}</div>
          <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
            {children}
          </p>
        </a>
      </NavigationMenuLink>
    </li>
  )
})
ListItem.displayName = "ListItem"



export const SocialBtns = ({
    size= "w-4 h-4 sm:w-6 sm-h-6",
    show="all"
}:{
    size?: string,
    show?: string
})=>{
    return <>
        <SocialBtn
            show={show === "all" || show.includes("facebook")}
            title="@agirarassociacao"
            href="https://www.facebook.com/agirarassociacao"
            size={size}
            Icon={Facebook}
            hoverColor='text-blue-800'
        />
        <SocialBtn
            show={show === "all" || show.includes("instagram")}
            title="@agirar_associacao"
            href="https://www.instagram.com/agirar_associacao/"
            size={size}
            Icon={Instagram}
            hoverColor="text-red-800"
        />
        <SocialBtn
            show={show === "all" || show.includes("email")}
            title="Enviar email"
            href="mailto:agirar.2013@gmail.com"
            size={size}
            Icon={Mail}
            hoverColor="text-blue-800"
        />
        <SocialBtn
            show={show === "all" || show.includes("location")}
            title="A nossa localização"
            href="https://www.google.com/maps/place/Agirar/@41.0981635,-8.5925828,17z/data=!3m1!4b1!4m6!3m5!1s0xd247b6a3397ac99:0x4f30b17826bc7308!8m2!3d41.0981635!4d-8.5900025!16s%2Fg%2F11c1ly6bb6?hl=en&entry=ttu"
            size={size}
            Icon={MapPin}
            hoverColor="text-blue-800"
        />
    </>
}

const SocialBtn = ({
    size, 
    title, 
    href, 
    Icon,
    hoverColor,
    show
}:{
    size: string, 
    title: string, 
    href: string, 
    Icon: LucideIcon,
    hoverColor: string,
    show: boolean
})=>{
    return show && <TooltipAbstraction
    title={title}
>
    <a href={href} target='__blank'>
        <Icon  className={`${size} cursor-pointer hover:${hoverColor}`} />
    </a>
</TooltipAbstraction>
}

export default Nav