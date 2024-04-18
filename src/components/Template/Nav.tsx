import React from 'react'
import ThemeModeToggle from "./ThemeModeToggle"
import { Button } from '../ui/button'
import { useRouter } from 'next/router'
import { Facebook, Heart, Instagram, Mail, MapPin, MenuIcon, Smile } from 'lucide-react'
import { getMaxWidthClasses } from '@/utils/UtilClasses'
import Logo from '../Logo'
import { Sheet,SheetContent, SheetDescription, SheetHeader, SheetTitle, SheetTrigger } from '../ui/sheet'
import MemberComponent from '../MemberComponent'
import TooltipAbstraction from '../ui/TooltipAbstraction'



const Nav = () => {
    return (
        <nav className='bg-white  flex justify-center items-center py-4 fixed top-0 z-50 w-full '>
            <div className={`${getMaxWidthClasses} px-5 flex justify-between items-center`}>
                <MenuBtn/>
                <Logo/>
                <div className="flex flex-col w-full">
                    <div className="w-full bg-blue-100 h-16 rounded-lg ml-4 flex justify-between items-center px-2">
                        <ComunicadosComponent/>
                        <SocialBtns/>
                    </div>
                    <div className="w-full flex justify-between py-2">
                        <div className='hidden md:flex '>
                            <NavBtns/>
                        </div>
                        <CallForActionNav/>
                    </div>
                </div>
                {/* <div className='flex gap-3'>
                    <MenuBtn/>
                    <Logo/>
                </div>
                <div className='hidden md:flex '>
                   <NavBtns/>
                </div>
                <div className="flex items-center gap-3">
                    <SocialBtns/>
                </div> */}
            </div>
        </nav>
  )
}

const CallForActionNav = ({
    size= "w-4 h-4 sm:w-6 sm-h-6"
}:{
    size?: string
})=>{
    return <div className="flex gap-2">
        <TooltipAbstraction
            title="Tornar-me Associado">
            <MemberComponent
                renderComponent={<Button className={`cursor-pointer border-2 bg-white text-black border-orange-200 hover:bg-orange-200`}>
                    Associado
                </Button>}
                title='Tornar-me Associado'
                reason='mensal'
                pagamento='transferencia'
            />
        </TooltipAbstraction>
        <TooltipAbstraction
            title="Tornar-me Associado">
            <MemberComponent
                renderComponent={<Button className={`cursor-pointer border-2 bg-white text-black border-orange-200 hover:bg-orange-200`}>
                    Doar
                </Button>}
                title='Tornar-me Associado'
                reason="unico"
                pagamento='transferencia'
            />
        </TooltipAbstraction>
        <ThemeModeToggle className='hidden sm:flex'/>

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
    const {push, asPath} = useRouter()
    return <>
        <Button className={`${asPath === "/" ? "text-orange-400": ""}`} onClick={()=>{
            push("/")
            if(onClick) onClick()
        }} variant="link">Início</Button>
        <Button className={`${asPath === "/sobre/" ? "text-orange-400": ""}`} onClick={()=>{
            push("/sobre")
            if(onClick) onClick()
        }} variant="link">Sobre Nós</Button>
        <Button className={`${asPath === "/servicos/"? "text-orange-400": ""} `} onClick={()=>{
            push("/servicos")
            if(onClick) onClick()
        }} variant="link">Os Nossos Serviços</Button>
        <Button className={`${asPath === "/contactos/"? "text-orange-400": ""}`} onClick={()=>{
            push("/contactos")
            if(onClick) onClick()
        }} variant="link">Contactos</Button>
    </>
}

export const SocialBtns = ({
    size= "w-4 h-4 sm:w-6 sm-h-6"
}:{
    size?: string
})=>{
    return <>
        {/* <TooltipAbstraction
            title="Tornar-me Associado">
            <MemberComponent
                renderComponent={<Smile className={`${size} cursor-pointer hover:text-orange-500`}/>}
                title='Tornar-me Associado'
                reason='mensal'
                pagamento='transferencia'
            />
        </TooltipAbstraction> */}
        {/* <Heart className={`${size} cursor-pointer hover:text-red-500`}/> */}
        <TooltipAbstraction
            title="@agirarassociacao"
        >
            <a href="https://www.facebook.com/agirarassociacao" target='__blank'>
                <Facebook  className={`${size} cursor-pointer hover:text-blue-800`} />
            </a>
        </TooltipAbstraction>
        <TooltipAbstraction
            title="@agirar_associacao"
        >
            <a href="https://www.instagram.com/agirar_associacao/" target='__blank'>
                <Instagram  className={`${size} cursor-pointer hover:text-red-800`} />
            </a>
        </TooltipAbstraction>
        <TooltipAbstraction
            title="Enviar email"
        >
            <a href="mailto:agirar.2013@gmail.com" target='__blank'>
                <Mail  className={`${size} cursor-pointer hover:text-blue-800`} />
            </a>
        </TooltipAbstraction>
        <TooltipAbstraction
            title="A nossa localização"
        >
            <a href="https://www.google.com/maps/place/Agirar/@41.0981635,-8.5925828,17z/data=!3m1!4b1!4m6!3m5!1s0xd247b6a3397ac99:0x4f30b17826bc7308!8m2!3d41.0981635!4d-8.5900025!16s%2Fg%2F11c1ly6bb6?hl=en&entry=ttu" target='__blank'>
                <MapPin  className={`${size} cursor-pointer hover:text-blue-800`} />
            </a>
        </TooltipAbstraction>
    </>
}

export default Nav