import React from 'react'
import ThemeModeToggle from "./ThemeModeToggle"
import { Button } from '../ui/button'
import { useRouter } from 'next/router'
import { Facebook, Heart, MenuIcon, Smile } from 'lucide-react'
import { getMaxWidthClasses } from '@/utils/UtilClasses'
import Logo from '../Logo'
import { Sheet,SheetContent, SheetDescription, SheetHeader, SheetTitle, SheetTrigger } from '../ui/sheet'
const Nav = () => {
    return (
        <nav className='flex justify-center '>
            <div className={`${getMaxWidthClasses} px-5 flex justify-between items-center  h-16`}>
                <div className='flex gap-3'>
                    <MenuBtn/>
                    <Logo/>
                </div>
                <div className='hidden md:flex '>
                   <NavBtns/>
                </div>
                <div className="flex items-center gap-3">
                    <SocialBtns/>
                </div>
            </div>
        </nav>
  )
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

const SocialBtns = ({
    size= "w-4 h-4 sm:w-6 sm-h-6"
}:{
    size?: string
})=>{
    return <>
        <Smile className={`${size} cursor-pointer hover:text-orange-500`}/>
        <Heart className={`${size} cursor-pointer hover:text-red-500`}/>
        <a href="https://www.facebook.com/agirarassociacao" target='__blank'>
            <Facebook  className={`${size} cursor-pointer hover:text-blue-800`} />
        </a>
        <ThemeModeToggle className='hidden sm:flex'/>
    </>
}

export default Nav