import React from 'react'
import Logo from '../Logo'
import { HomeIcon, MailIcon,  PhoneCallIcon } from 'lucide-react'
import { getMaxWidthClasses, getSectionClass } from '@/utils/UtilClasses'
import { SocialBtns } from './Nav'
import Link from 'next/link'

const Footer = () => {
    return (<>
        
        <LawComponent/>
        <footer className='w-screen py-10 flex flex-col justify-center items-center bg-blue-100'> 
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
                    {/* <div className="flex flex-col items-center lg:items-start mt-10 lg:mt-0">
                        <h6 className='font-bold text-lg mb-5'>A Agirar</h6>
                        <Button onClick={()=>push("/sobre")} variant="link">Quem Somos</Button>
                        <Button onClick={()=>push("/servicos")} variant="link">Serviços</Button>
                    </div> */}
                    {/* <div className="flex flex-col items-center lg:items-start mt-10 lg:mt-0">
                        <h6 className='font-bold text-lg mb-5'>Informações Legais</h6>
                        <Button onClick={()=>push("/estatutos.pdf")} variant="link">Estatutos</Button>
                        <Button onClick={()=>push("/orgaos")} variant="link">Orgãos Sociais</Button>
                        <Button onClick={()=>push("/contas")} variant="link">Relatório de Contas</Button>
                    </div> */}
                    <iframe 
                        className="mt-10 lg:mt-0 rounded-3xl border-blue-400 border-2 w-96 h-72" 
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3006.6014027109677!2d-8.59268990000432!3d41.09955491140556!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd247b6a680e8a6f%3A0x651b7222910ddad5!2s4430-458%20Vila%20Nova%20de%20Gaia!5e0!3m2!1sen!2spt!4v1593272433391!5m2!1sen!2spt" frameBorder="0" allowFullScreen={false} aria-hidden="false" tabIndex={0} >
                        </iframe>
                </div>
                <div className="w-full flex justify-center border-b-2 border-blue-300 pb-3 mb-3">
                    <SocialBtns/>
                </div>
                <div className="w-full flex justify-between">
                    <span className='text-xs text-blue-400'>© Agirar {new Date().getFullYear() }  - Todos os direitos reservados</span>
                    <div className="flex gap-x-4 text-xs text-blue-400">
                        <Link href='/estatutos.pdf'>Estatutos</Link>
                        <Link href='/orgaos'>Orgãos Sociais</Link>
                        <Link href='/contas'>Relatório de Contas</Link>
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
            <div className={`${getMaxWidthClasses} pb-20`}>
            <h5 className='text-xl font-bold  mb-7'>Informação importante</h5>
            <p className='text-xs text-justify'>Lorem ipsum dolor sit amet consectetur. Consequat lacus vitae dictum eu gravida pulvinar amet. Pharetra molestie ultricies amet fermentum. Tincidunt dignissim viverra et justo cras. Vehicula odio ut diam tincidunt aliquam lectus faucibus ut ullamcorper. Mauris eget elit id eget sollicitudin adipiscing. Felis dictum egestas natoque id enim amet feugiat enim. Ac aliquet adipiscing ut imperdiet. Bibendum feugiat malesuada in orci aenean. Arcu mi elit auctor pretium elementum ultricies. Platea massa a non morbi. Aliquam viverra proin eget maecenas auctor pellentesque urna auctor. Risus consectetur ante nunc risus suspendisse natoque tempor arcu mauris. Sollicitudin tellus tincidunt sollicitudin sagittis sed. Eget amet mauris velit sed pulvinar cras. Enim scelerisque ipsum posuere blandit pulvinar adipiscing. Dictum tellus bibendum morbi auctor. Dui arcu massa sed vitae. Sit tristique nisl nisl facilisis enim. Sed diam cras mauris tempus. Aliquet duis ornare id justo vel. Ligula urna sed velit mauris. Imperdiet consequat lectus pulvinar malesuada scelerisque. Malesuada nec parturient imperdiet non semper eget. Amet consectetur mauris lectus blandit diam a sed duis dui. Amet facilisi in eu id nascetur bibendum venenatis. Eget pretium justo arcu congue sem bibendum. Vel scelerisque eget hendrerit habitant convallis velit proin. Tortor pulvinar ut pellentesque vel aliquet. Eu eu accumsan lorem nisi commodo morbi volutpat tristique convallis. Ultricies eget commodo donec sem natoque tortor diam. Consequat faucibus etiam id elit. Purus faucibus ipsum scelerisque pellentesque. Placerat et enim diam sed id. Facilisis risus tristique eget tellus morbi ut enim. In neque sit metus et turpis. Sit ante auctor turpis maecenas cursus. Purus convallis integer in fermentum aliquet. Arcu purus neque consectetur non habitant duis porttitor nunc. Tellus interdum at aliquam in. Quis aliquet bibendum netus scelerisque feugiat eget pharetra purus. Neque velit quam etiam ut enim aenean proin tristique faucibus. Sed ultrices vulputate feugiat non. At orci scelerisque blandit odio. Scelerisque fermentum risus eget morbi faucibus eu nec. Rhoncus eu vestibulum purus eros quis vel et integer sed. Mi in habitasse aliquet ultrices quis accumsan. Enim sit nulla dapibus morbi. Nibh diam enim eget pharetra. Morbi scelerisque purus adipiscing ut sed id cras aenean amet.</p>
            <div className='flex justify-end w-full mt-10'>
                <a className='text-sm text-orange-400' href="https://diariodarepublica.pt/dr/detalhe/decreto-lei/113-2021-175865938" target='__black'>Decreto de Lei</a>
            </div>
        </div>
        </section>
}


export default Footer