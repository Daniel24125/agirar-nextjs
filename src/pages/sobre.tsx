import DecorationGeometry from '@/components/DecorationGeometry'
import DotVector from '@/components/DotVector'
import MemberComponent from '@/components/MemberComponent'
import { Button } from '@/components/ui/button'
import { ScrollArea } from '@/components/ui/scroll-area'
import { THist, getHist } from '@/utils/History'
import { TPartner, getPartners } from '@/utils/Partners'
import { getMaxWidthClasses, getSectionClass } from '@/utils/UtilClasses'
import moment from 'moment'
import React from 'react'

const Sobre = () => {
  return (
    <>
        <AboutHeader/>
        <ObjectivesSection/>
        <Partners/>
    </>
  )
}

const AboutHeader = ()=>{
    return <section className={`${getSectionClass}  h-[calc(100vh-64px)] `}>
        <DecorationGeometry
            color="orange"
            size="w-1/2 h-60"
            position="absolute right-0 top-1/2 -translate-y-full"
            borderRadius="rounded-tl-3xl rounded-bl-3xl"
        />
        <DecorationGeometry
            color="blue"
            size="w-[90vw] sm:w-1/2 h-60"
            position="absolute sm:left-0 top-1/2 "
            borderRadius="rounded-3xl sm:rounded-tr-3xl sm:rounded-br-3xl sm:rounded-tl-none sm:rounded-bl-none "
            className=" z-30 flex justify-center flex-col mt-24 sm:mt-0 lg:flex-row lg:justify-end items-center gap-8 sm:pr-10"
        >
            <div className="flex flex-col justify-end gap-2">
                <p className='font-bold text-lg sm:text-2xl text-center'>Todos nós somos AGIRAR</p>
                <p className='text-center lg:text-right'>Quer fazer parte da desta Associação?</p>
            </div>
            <MemberComponent
                renderComponent={<Button>Ser Associado</Button>}
                title='Tornar-me Associado'
                reason='mensal'
                pagamento='transferencia'
            />
        </DecorationGeometry>
       <div className="flex flex-col gap-8 absolute w-screen justify-center items-center top-40">
            <p className='text-8xl text-center font-bold'>Agirar</p>
            <p className='text-3xl w-[clamp(300px,90vw,500px)] text-center font-bold'>Associação de Familiares e Amigos de Pessoas com Psicose</p>
       </div>
    </section>
}


const ObjectivesSection = ()=>{
    const hist : THist[]  = getHist()

    return <section className={`${getSectionClass} top-3 py-11`}>
        <div className={`${getMaxWidthClasses} flex flex-col items-center gap-10 px-5 lg:flex-row lg:justify-between `}>
            <div className="flex flex-col items-center lg:w-1/2 gap-11 text-center text-sm lg:text-base">
                <h6 className='text-primary font-bold text-xl'>Os Nossos Objetivos</h6>
                <div className='max-w-lg relative'>
                    <DotVector />
                    <p>
                        Os principais objetivos da AGIRAR são promover a reabilitação e integração social de pessoas com doença mental grave e dar apoio às suas famílias, assim como promover o apoio, formação e investigação no domínio da saúde mental e reabilitação psicossocial
                    </p>
                </div>
                <p className='max-w-lg'>Apoiar o desenvolvimento de competências sociais e o processo de reabilitação, no sentido da maior autonomia possível dos indivíduos com doença mental implementando um conjunto de respostas sociais nomeadamente fóruns e/ou unidades sócio-ocupacionais, respostas residenciais e apoio domiciliário.</p>
                <p className='max-w-lg '>Promover ações e programas de apoio às famílias das pessoas com doença mental</p>
                <p className='max-w-lg'>Colaborar com as redes sociais locais, tais como instituições particulares de solidariedade social, empresas, autarquias e serviços públicos e com elas encontrar estratégias de ação comuns</p>
                <div className='max-w-lg relative'>
                   <DotVector rotate={true} position='-bottom-7 -right-7' color="bg-blue-400"/>
                    <p>
                    Desenvolver ações conjuntas com outras entidades oficiais ou privadas de forma a contribuir para a política de Saúde Mental
                    </p>
                </div>
            </div>
            <ScrollArea className='mt-16 lg:mt-0 h-[calc(100vh-200px)] lg:w-1/2'>
                <div className="rounded-3xl flex flex-col p-9 bg-blue-100">
                    {hist.sort((hp, hn)=>{
                        const hpDate = moment(hp.date, "DD/MM/YYYY").unix()
                        const hnDate = moment(hn.date, "DD/MM/YYYY").unix()
                        return hnDate  - hpDate
                    }).map(h=>{
                        return <div key={h.id} className='flex mb-10 text-black  gap-5'>
                            <div style={{
                                backgroundImage: `url("${h.img}")`,
                                backgroundSize: "cover"
                            }} className="rounded-full hidden sm:block sm:w-12 sm:h-12"></div>
                            <div className="flex flex-col sm:w-[calc(100%-70px)] ">
                                <h6 className='text-blue-400 font-bold text-lg'> {h.title} </h6>
                                <p className='text-sm text-slate-500 mb-3'> {h.date} </p>
                                <p className='text-sm text-justify'> {h.desc} </p>
                            </div>
                        </div>
                    })}
                </div>
            </ScrollArea>
        </div>
    </section>
}

const Partners = () => {

    return <section className='flex flex-col items-center relative w-screen py-36'>
        <div className={`${getMaxWidthClasses} flex flex-col relative items-center px-5`}>
            <div className="flex w-full justify-end">
                <DecorationGeometry
                    color="orange"
                    size="w-[calc(50%+50px)] h-2"
                    position=""
                    borderRadius="rounded-full"
                    className='mb-20'
                />
            </div>
            <p className='text-xl lg:text-3xl max-w-md text-center font-bold'>Com os nossos parceiros, tudo é mais fácil</p>
            <div className="flex flex-wrap justify-center w-full p-10 bg-white items-center rounded-2xl mt-20 gap-4">
                {getPartners.map((p: TPartner)=>{
                    return <a key={p.href} href={p.href} target="_blank">
                        <img className=' h-10 lg:h-16 grayscale hover:grayscale-0' src={p.img} alt="partner" key={p.href} />
                    </a>
                })}

            </div>
            <div className="flex w-full justify-start">
                <DecorationGeometry
                    color="blue"
                    size="w-[calc(50%+50px)] h-2"
                    position=""
                    borderRadius="rounded-full"
                    className='mt-20'
                />
            </div>
        </div>
    </section>
}

export default Sobre