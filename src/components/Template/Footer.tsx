import React from 'react'
import Logo from '../Logo'
import { HomeIcon, MailIcon,  PhoneCallIcon } from 'lucide-react'
import { getMaxWidthClasses, getSectionClass } from '@/utils/UtilClasses'
import { SocialBtns } from './Nav'
import Link from 'next/link'

const Footer = () => {
    return (<>
        
        <LawComponent/>
        <footer className='w-screen py-10 flex flex-col justify-center items-center bg-blue-100 pb-40'> 
            <div className="w-screen max-w-7xl flex flex-col items-center lg:items-start px-5">
                <div className="flex items-center lg:justify-between my-10 w-full flex-col lg:flex-row">
                    <div className="flex flex-col items-center">
                        <Logo height={112}/>
                        <p className='text-xs max-w-[110px] text-center'>Associação de Familiares e Amigos de Pessoas com Psicose</p>
                        <p className='text-xs max-w-[190px] text-center font-bold mt-10'>Tem como objetivo principal promover a reabilitação e integração social de pessoas com doença mental grave edar apoio às suas famílias</p> 
                    </div>
                    <div className="flex flex-col items-center lg:items-start gap-y-7">
                        <h6 className='font-bold mb-5'>Contactos</h6>
                        <ContactComponent
                            icon={<HomeIcon/>}
                            infoContent={<div className="flex flex-col ml-5">
                                <span className='text-sm'>Rua das Mimosas, 81-A </span>
                                <span className='text-sm'>4430-458, Vilar de Andorinho</span>
                            </div>}
                        />
                        <ContactComponent
                            icon={<PhoneCallIcon/>}
                            infoContent={<div className="flex items-center ml-5">
                                <a className="text-sm underline" href="tel:912353788">912 353 788</a>
                            </div>}
                        />
                          <ContactComponent
                            icon={<MailIcon/>}
                            infoContent={<div className="flex items-center ml-5">
                                <a className="text-sm underline" href="mailto:agirar.2013@gmail.com">agirar.2013@gmail.com</a>
                            </div>}
                        />                        
                    </div>
                    <iframe 
                        className="mt-10 lg:mt-0 rounded-3xl border-blue-400 border-2 w-80 md:w-96 h-72" 
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3006.6014027109677!2d-8.59268990000432!3d41.09955491140556!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd247b6a680e8a6f%3A0x651b7222910ddad5!2s4430-458%20Vila%20Nova%20de%20Gaia!5e0!3m2!1sen!2spt!4v1593272433391!5m2!1sen!2spt" frameBorder="0" allowFullScreen={false} aria-hidden="false" tabIndex={0} >
                        </iframe>
                </div>
                <div className="w-full flex justify-center border-b-2 border-blue-300 pb-3 mb-3">
                    <SocialBtns size="w-6 h-6 sm:w-8 sm-h-8" show='facebook;instagram'/>
                </div>
                <div className="w-full flex flex-col gap-5 md:gap-0 items-center md:flex-row justify-between">
                    <span className='text-xs text-blue-400'>© Agirar {new Date().getFullYear() }  - Todos os direitos reservados</span>
                    <div className="flex gap-x-4 text-xs text-blue-400">
                        <Link href='/estatutos.pdf' target='__blank'>Estatutos</Link>
                        <Link href='/orgaos'>Orgãos Sociais</Link>
                        <Link href='/relatorios'>Relatórios</Link>
                    </div>
                </div>
            </div>
        </footer>
    </>
    )
}

const ContactComponent = ({
    icon,
    infoContent
}:{
    icon: React.ReactNode
    infoContent: React.ReactNode
})=>{
    return <div className="flex">
    <div className="flex justify-center items-center bg-blue-400 w-10 h-10 text-white rounded-lg">
        {icon}
    </div>
    {infoContent}
</div>
}

const LawComponent = ()=>{
    return <section className={`${getSectionClass}`}>
            <div className={`${getMaxWidthClasses} py-20 flex flex-col gap-1 `}>
            <h5 className='text-md font-bold  mb-7 '>Informação importante</h5>
            <a className='text-xs text-justify text-blue-400' href='https://diariodarepublica.pt/dr/detalhe/decreto-lei/113-2021-175865938' target='__blank'>1 - Decreto Lei 113/2021 – Princípios gerias e regras de organização e funcionamento dos serviços de saúde mental</a>
            <a className='text-xs text-justify text-blue-400' href='https://diariodarepublica.pt/dr/detalhe/lei/35-2023-215980339' target='__blank'>2 – Lei nº 35/2023 de 21 de julho – Lei de Saúde Mental</a>
        </div>
        </section>
}


export default Footer