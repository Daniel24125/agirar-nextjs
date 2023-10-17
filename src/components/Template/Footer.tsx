import { getMaxWidthClasses } from '@/utils/UtilClasses'
import React from 'react'
import Logo from '../Logo'
import { Button } from '../ui/button'
import { useRouter } from 'next/router'
import { MoveRight } from 'lucide-react'

const Footer = () => {
    const {push} = useRouter()
    return (
        <footer className='w-screen py-10 flex justify-center'> 
            <div className={`${getMaxWidthClasses} flex flex-col items-start px-5`}>
                <Logo/>
                <div className="flex justify-between my-10 w-full">
                    <div className="flex flex-col items-start gap-y-3">
                        <h6 className='font-bold text-lg mb-5'>Contacte-nos</h6>
                        <a href="tel:912353788">912 353 788</a>
                        <a href="mailto:agirar.2013@gmail.com">agirar.2013@gmail.com</a>
                        <Button className='text-orange-400 hover:text-orange-600' onClick={()=>push("/contactos")} variant="link">Onde estamos <MoveRight/> </Button>
                    </div>
                    <div className="flex flex-col items-start ">
                        <h6 className='font-bold text-lg mb-5'>A Agirar</h6>
                        <Button onClick={()=>push("/sobre")} variant="link">Quem Somos</Button>
                        <Button onClick={()=>push("/servicos")} variant="link">Serviços</Button>
                    </div>
                    <div className="flex flex-col items-start ">
                        <h6 className='font-bold text-lg mb-5'>Informações Legais</h6>
                        <Button onClick={()=>push("/estatutos")} variant="link">Estatutos</Button>
                        <Button onClick={()=>push("/orgaos")} variant="link">Orgãos Sociais</Button>
                        <Button onClick={()=>push("/contas")} variant="link">Relatório de Contas</Button>
                    </div>
                    <iframe 
                        className="rounded-lg border-orange-400 border-2 w-96" 
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3006.6014027109677!2d-8.59268990000432!3d41.09955491140556!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd247b6a680e8a6f%3A0x651b7222910ddad5!2s4430-458%20Vila%20Nova%20de%20Gaia!5e0!3m2!1sen!2spt!4v1593272433391!5m2!1sen!2spt" frameBorder="0" allowFullScreen={false} aria-hidden="false" tabIndex={0} >
                        </iframe>
                </div>
                <span className='text-center w-full text-xs'>© Agirar {new Date().getFullYear()}</span>
            </div>
        </footer>
    )
}

export default Footer