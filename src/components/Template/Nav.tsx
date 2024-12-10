import React from 'react'
import { Button, buttonVariants } from '../ui/button'
import { useRouter } from 'next/router'
import { Facebook, HomeIcon, Instagram, LucideIcon, Mail, MapPin,  NewspaperIcon, PhoneCallIcon, UserIcon, WrenchIcon } from 'lucide-react'
import { getMaxWidthClasses } from '@/utils/UtilClasses'
import Logo from '../Logo'
import TooltipAbstraction from '../ui/TooltipAbstraction'
import { NavigationMenuList, NavigationMenu, NavigationMenuItem, NavigationMenuTrigger, NavigationMenuContent, NavigationMenuLink } from '../ui/navigation-menu'
import { cn } from "@/lib/utils"
import Link from 'next/link'
import { Drawer, DrawerContent,  DrawerFooter } from '../ui/drawer'
import { useEventListener } from '@/utils/useCases'

const routes = [
    {
        title: "Início",
        href: "/", 
        displayImage: false,
        icon: <HomeIcon/>,
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
        icon: <UserIcon/>,
        subMenus: []
    },
    {
        title: "O que fazemos",
        href: "/servicos", 
        displayImage: false,
        icon: <WrenchIcon/>,
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
        icon: <NewspaperIcon/>,
        displayImage: false,
        subMenus: []
    },
    {
        title: "Contactos",
        href: "/contactos", 
        icon: <PhoneCallIcon/>,
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


const Nav = () => {
    return (<>
        <MobileNavigation/>
        <DesktopNavigation/>
    </>
  )
}

const DesktopNavigation = ()=>{
    const [showBG, setShowBG] = React.useState(true)
    const {asPath} = useRouter()
    const handleSetBackground = React.useCallback(()=>setShowBG(window.scrollY > 100), [])
    
    React.useEffect(()=>{
        if(asPath === "/"){
            handleSetBackground()
            window.addEventListener("scroll", handleSetBackground)
        }else{
            setShowBG(true)
            window.removeEventListener("scroll",handleSetBackground)
        }
      },[asPath])

    return <nav className={`z-50 w-screen hidden fixed top-0 md:flex justify-center items-center py-4 transition-all ${showBG ? "bg-white": ""}`}>
        <div className={`${getMaxWidthClasses} px-5 flex justify-between items-center ${showBG ? "text-black": ""}`}>
            <NavBtns color={showBG ? "text-black": "text-white"}/>
            <CallForActionNav/>
        </div>
    </nav>
}

const MobileNavigation = ()=>{
    return <>
        <MobileNavigationHeader/>
        <MobileNavigationButtons/>
        
    </>
}

const MobileNavigationHeader = ()=>{
    return <div className='w-screen p-4 flex justify-between items-center fixed top-0 z-50 md:hidden bg-white'>
        <Logo className='mr-4' height={70}/>
        <div className='flex flex-col items-end gap-2'>
            <div className='flex gap-2'>
                <SocialBtns show='all' size='w-4'/>
            </div>
            <CallForActionNav/>
        </div>
    </div>
} 

const MobileNavigationButtons = ()=>{
    const {push, asPath, query} = useRouter()
    const [open, setOpen] = React.useState(false)

    return <section className='md:hidden'>
        <nav className='w-screen  flex flex-col items-center fixed bottom-0 z-50 bg-white rounded-tr-2xl rounded-tl-2xl pb-3 border'>
            <div onClick={()=>setOpen(true)} className='cursor-pointer w-full flex justify-center pt-5'>
                <div className='w-[100px] h-2 rounded-xl bg-muted'></div>
            </div>
            <div className='flex justify-center w-full gap-2 mt-5'>
                {routes.map(r=>{
                    const active = asPath.replaceAll("/", "") === r.href.replaceAll("/", "")
                    return <TooltipAbstraction key={r.title} title={r.title}>
                        <div onClick={(e)=>{
                            e.stopPropagation()
                            push(r.href)
                        }} className={`flex items-center p-2 transition cursor-pointer hover:text-blue-400 ${active ? "rounded-2xl bg-blue-400 text-white hover:text-white": ""}`}>
                            {r.icon}
                            <span className={`text-xs text-center ml-3 ${active ? "": "hidden"}`}>{r.title}</span>
                        </div>
                    </TooltipAbstraction>
                })}
            </div>
        </nav>
        <Drawer open={open} onClose={()=>setOpen(false)}>
            
            <DrawerContent>
                <div className='flex flex-col gap-5 items-center py-5'>
                    {routes.map(r=>{
                        const active = asPath.replaceAll("/", "") === r.href.replaceAll("/", "")
                        return <div className=' flex flex-col' key={r.href}>
                            <Link className={`${active? "text-blue-400": ""} transition text-center hover:text-blue-400 font-bold text-lg `} href={r.href}>{r.title}</Link>
                            <div className='flex flex-col gap-1 mt-2 items-center'>
                                {r.subMenus!.map(sm =>{
                                    return <Link className='text-sm' key={sm.title} href={sm.href}>{sm.title}</Link>
                                })}
                            </div>
                        </div>
                    })}
                </div>
                <DrawerFooter>
                    <div className='flex gap-2 w-full justify-center'>
                        <SocialBtns show='all' size='w-5'/>
                    </div>
           
                </DrawerFooter>
            </DrawerContent>
        </Drawer>
    </section>
}


const CallForActionNav = ()=>{
    return <div className="flex gap-2">
        <TooltipAbstraction
            title="Tornar-me Associado">
            <Link className={`${buttonVariants({variant: "ghost"})} bg-orange-400`} href="/apoiar?tab=associado">Associado</Link>
        </TooltipAbstraction>
        <TooltipAbstraction
            title="Fazer um donativo">
            <Link className={`${buttonVariants({variant: "ghost", className: "text-black bg-blue-400"})}`} href="/apoiar?tab=doar">Doar</Link>
        </TooltipAbstraction>
    </div>
}

const NavBtns = ({
    color
}:{
    color?: string
})=>{
    const {push, asPath, query} = useRouter()
     
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
                const isActive = asPath.replaceAll("/", "") === r.href.replaceAll("/", "")
                return r.subMenus.length > 0 ? <NavigationMenuItem key={r.title}>
                <NavigationMenuTrigger className={`${color} bg-transparent`}>
                    <Link className={`${isActive ? "border-b-2 border-b-orange-400": ""} lg:text-lg bg-transparent`}href={r.href}>{r.title}</Link>
                </NavigationMenuTrigger>
                {r.subMenus.length > 0 && <NavigationMenuContent>
                    <ul className="grid gap-3 p-6 md:w-[400px] lg:w-[500px] lg:grid-cols-[.75fr_1fr] ">
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
            </NavigationMenuItem> : <Link className={`${isActive ? "border-b-2 border-b-orange-400": ""} lg:text-lg bg-transparent ${color} ${buttonVariants({variant:"ghost"})}`} href={r.href}>
               {r.title}
            </Link>
            
            })}
            
        </NavigationMenuList>
        
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