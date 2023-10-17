import React from 'react'
import ThemeModeToggle from "./ThemeModeToggle"
import { Button } from '../ui/button'
import { useRouter } from 'next/router'
import { Facebook, Heart, Smile } from 'lucide-react'
import { getMaxWidthClasses } from '@/utils/UtilClasses'
import Logo from '../Logo'
const Nav = () => {
    const {push, asPath} = useRouter()
    
    return (
        <nav className='flex justify-center '>
            <div className={`${getMaxWidthClasses} flex justify-between items-center  h-16`}>
                <Logo/>
                <div className='flex'>
                    <Button onClick={()=>push("/sobre")} variant="link">Sobre Nós</Button>
                    <Button onClick={()=>push("/servicos")} variant="link">Os Nossos Serviços</Button>
                    <Button onClick={()=>push("/contactos")} variant="link">Contactos</Button>
                </div>
                <div className="flex items-center gap-3">

                    <Smile className="cursor-pointer hover:text-orange-500"/>
                    <Heart className="cursor-pointer hover:text-red-500"/>
                    <a href="https://www.facebook.com/agirarassociacao" target='__blank'>
                        <Facebook  className="cursor-pointer hover:text-blue-800" />
                    </a>
                    <ThemeModeToggle/>
                </div>
            </div>
        </nav>
  )
}

export default Nav