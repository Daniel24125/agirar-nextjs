import React from 'react'
import ThemeModeToggle from "./ThemeModeToggle"
import { Button } from '../ui/button'
import { useRouter } from 'next/router'
const Nav = () => {
    const {push, asPath} = useRouter()
    
    return (
        <nav className='flex justify-center '>
            <div className="flex justify-between items-center w-screen max-w-7xl h-16">
                <div onClick={()=>push("/")} className="flex cursor-pointer items-center justify-center gap-4">
                    <div className=" w-10 h-10 rounded-full bg-orange-500"></div>
                    <h6 className=' text-2xl'>Agirar</h6>
                </div>
                <div className='flex'>
                    <Button onClick={()=>push("/sobre")} variant="link">Sobre Nós</Button>
                    <Button onClick={()=>push("/servicos")} variant="link">Os Nossos Serviços</Button>
                    <Button onClick={()=>push("/contactos")} variant="link">Contactos</Button>
                </div>
                <div className="flex">
                    <ThemeModeToggle/>
                </div>
            </div>
        </nav>
  )
}

export default Nav