import DecorationGeometry from '@/components/DecorationGeometry'
import DotVector from '@/components/DotVector'
import MemberComponent from '@/components/MemberComponent'
import { Button } from '@/components/ui/button'
import { ScrollArea } from '@/components/ui/scroll-area'
import Timeline, { TimelineItem } from '@/components/ui/timeline'
import { PageTitle, PageTitleAlternative } from '@/components/UtilsGraphics'
import { THist, getHist } from '@/utils/History'
import { TPartner, getPartners } from '@/utils/Partners'
import { getMaxWidthClasses, getSectionClass } from '@/utils/UtilClasses'
import moment from 'moment'
import React from 'react'

const Sobre = () => {
  return (
    <>
        {/* <AboutHeader/>*/}
        <PageTitleAlternative
            title={
            <div className="flex flex-col gap-8 w-screen justify-center items-center top-40">
                <p className='text-4xl md:text-8xl text-center font-bold mt-10'>AGIRAR</p>
                <p className='text-xl md:text-3xl w-[clamp(300px,90vw,500px)] text-center font-bold'>Associação de Familiares e Amigos de Pessoas com Psicose</p>
            </div>
           }
        />
        <HistorySection/>
        <ObjectivesSection/>
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
                title='Tornar-me Associado'
                reason='mensal'
                pagamento='transferencia'
            >
                <Button>Ser Associado</Button>
            </MemberComponent>
        </DecorationGeometry>
       <div className="flex flex-col gap-8 absolute w-screen justify-center items-center top-40">
            <p className='text-8xl text-center font-bold'>Agirar</p>
            <p className='text-3xl w-[clamp(300px,90vw,500px)] text-center font-bold'>Associação de Familiares e Amigos de Pessoas com Psicose</p>
       </div>
    </section>
}

const HistorySection = ()=>{
    return <section className={`${getSectionClass} top-20 sm:top-3 py-11`}>
        <div className={`${getMaxWidthClasses} flex flex-col items-center gap-10 px-5`}>
            <Timeline>
                <TimelineItem
                    title="O início da AGIRAR"
                    desc="A AGIRAR – Associação de Familiares e Amigos de Pessoas com Psicose é uma associação sem fins lucrativos, criada por escritura pública a 8 de julho de 2013, com o objetivo major de apoiar pessoas com psicose e as suas famílias."
                />
                <TimelineItem
                    title="A nossa missão e os nossos valores"
                    desc="A Associação foi criada por iniciativa de um grupo de profissionais do Serviço de Psiquiatria do então denominado Centro Hospitalar de Vila Nova de Gaia/Espinho e um grupo de familiares que estavam integrados num Programa para doentes com Psicose. Ao perceberem que pouco ou nenhum apoio havia para os familiares e numa tentativa de colmatar esta lacuna identificada lançaram mãos á obra e pensaram que a criação de uma Associação poderia ser a resposta para um concelho onde, até á data nada havia para dar resposta a este problema de saúde mental."
                />
                <TimelineItem
                    title="Os desafios que temos de ultrapassar"
                    desc="O primeiro grande obstáculo era que as pessoas fossem capazes de falar sobre os seus problemas, pois o estigma associado às doenças mentais é enorme e a vergonha de ter um familiar, um ente querido com uma patologia do foro mental, discrimina famílias e isola-as."
                />
                <TimelineItem
                    title="Promover a inclusão dos nossos utentes"
                    desc="As primeiras reuniões decorreram nesse serviço, pois não havia instalações onde fosse possível desenvolver atividades e iniciativas com o foco na saúde mental das famílias. Logo desde o seu início foram desenvolvidas atividades em que fosse possível dotar as famílias de melhores ferramentas para lidar com esta nova condição de saúde do seu familiar. Foram organizados whorkshops, palestras, grupos de apoio, eventos lúdicos para diminuir o isolamento social das mesmas. O objetivo em mente é sempre que esta capacitação seja um fator favorecedor de um melhor prognóstico da doença e da forma com as famílias lidam com a mesma."
                />
                <TimelineItem
                    title="Desenvolvimento de capacidades cognitivas e sociais"
                    desc="Mas, para que as famílias sejam mais capazes é também importante intervir nos utentes e na melhoria das suas capacidades cognitivas e sociais. Nesse sentido temos vindo a disponibilizar várias atividades psicoterapêuticas que envolvem jogos lúdicos, ateliers de estimulação cognitiva, raciocínio, memória, habilidades manuais e criativas. Este ambiente seguro e acolhedor propício para interação entre os grupos de utentes fortalecem o sentirem-se como pertença de uma comunidade e reduzem o isolamento social tão importante para uma boa saúde mental."
                />
                <TimelineItem
                    title="Integração dos utentes na comunidade"
                    desc="A autonomia e plena integração dos utentes na comunidade e o acompanhamento dos seus familiares será sempre o foco de toda a nossa intervenção."
                />
                <TimelineItem
                    title="O futuro"
                    desc="O futuro será a continuação desta breve história em que os intervenientes serão sempre as pessoas com psicose e seus familiares."
                />
                
            </Timeline>
        </div>

    </section>
}



const ObjectivesSection = ()=>{
    return <section className={`${getSectionClass} top-20 sm:top-3 py-11`}>
        <div className={`${getMaxWidthClasses} flex flex-col items-center gap-10 px-5 `}>
            <h6 className='text-primary font-bold text-3xl'>Os Nossos Objetivos</h6>
            <div className='max-w-lg relative mt-12'>
                <DotVector />
                <p>
                    Os principais objetivos da AGIRAR são promover a reabilitação e integração social de pessoas com doença mental grave e dar apoio às suas famílias, assim como promover o apoio, formação e investigação no domínio da saúde mental e reabilitação psicossocial
                </p>
            </div>
            <p className='max-w-lg'>Apoiar o desenvolvimento de competências sociais e o processo de reabilitação, no sentido da maior autonomia possível dos indivíduos com doença mental implementando um conjunto de respostas sociais nomeadamente fóruns e/ou unidades sócio-ocupacionais, respostas residenciais e apoio domiciliário.</p>
            <p className='max-w-lg '>Promover ações e programas de apoio às famílias das pessoas com doença mental</p>
            <p className='max-w-lg'>Colaborar com as redes sociais locais, tais como instituições particulares de solidariedade social, empresas, autarquias e serviços públicos e com elas encontrar estratégias de ação comuns</p>
            <div className='max-w-lg relative mb-20'>
                <DotVector rotate={true} position='-bottom-7 -right-7' color="bg-blue-400"/>
                <p>Desenvolver ações conjuntas com outras entidades oficiais ou privadas de forma a contribuir para a política de Saúde Mental</p>
            </div>
            {/* <ScrollArea className='mt-16 lg:mt-0 h-[calc(100vh-200px)] lg:w-1/2'>
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
            </ScrollArea> */}
        </div>
    </section>
}

export const Partners = () => {

    return <section id="parceiros"  className='flex flex-col items-center relative w-screen pt-36 '>
        <div className={`${getMaxWidthClasses} flex flex-col relative items-center px-5`}>
            
            <p className='text-md text-start w-full font-bold mb-4'>Parceiros</p>
            <div className="flex flex-wrap justify-center md:justify-between w-full p-10 bg-white items-center rounded-2xl gap-4">
                {getPartners.map((p: TPartner)=>{
                    return <a key={p.href} href={p.href} target="_blank">
                        <img className='mb-5 sm:mr-16 sm:mb-16 h-10 lg:h-8 grayscale hover:grayscale-0' src={p.img} alt="partner" key={p.href} />
                    </a>
                })}

            </div>
            
        </div>
    </section>
}

export default Sobre