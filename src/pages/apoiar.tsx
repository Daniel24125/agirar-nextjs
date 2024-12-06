import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { PageTitle } from '@/components/UtilsGraphics'
import { getMaxWidthClasses, getSectionClass } from '@/utils/UtilClasses'
import Image from 'next/image'
import { useSearchParams } from 'next/navigation'
import React, { Dispatch, SetStateAction } from 'react'
import Associados from "@/assets/apoios/associados.jpeg"
import MemberComponent from '@/components/MemberComponent'
import { Button } from '@/components/ui/button'
import VoluntarioComponent from '@/components/VoluntarioComponent'
import Link from 'next/link'
import { IBAN } from '@/utils/Utils'
import { TestemunhosList } from '.'
import { testimonials, volunteerTestimonials } from '@/utils/Testimonials'
import Donativo1 from "@/assets/apoios/donativo1.jpeg"
import Donativo2 from "@/assets/apoios/donativo2.jpeg"
import Donativo3 from "@/assets/apoios/donativo3.jpeg"


type TTab = "associado" | "doar"| "voluntario" | "irs"

const TabContextProvider = React.createContext<Partial<{
    selectedTab: TTab, 
    setSelectedTab: Dispatch<SetStateAction<TTab>>
}>>({})

const Apoiar = () => {
    const searchParams = useSearchParams()
    const openTab  = searchParams.get("tab") as null | TTab
    const [selectedTab, setSelectedTab] = React.useState(openTab || "associado")

    React.useEffect(()=>{
        setSelectedTab(searchParams.get("tab") as null | TTab || "associado")
    }, [searchParams])

    return <TabContextProvider.Provider value={{
        selectedTab,
        setSelectedTab
    }}>
        <PageTitle title={<p className='text-3xl md:text-6xl text-center font-bold uppercase'>Como apoiar</p>} />
        <TabComponent/>
       
    </TabContextProvider.Provider>
}
const TabComponent = ()=>{
    const {selectedTab, setSelectedTab} = React.useContext(TabContextProvider)
    return <section className={`${getSectionClass} justify-center py-10 top-14 md:top-0`}>
        <div className={`${getMaxWidthClasses} flex flex-col gap-10`}>
            <Tabs defaultValue={selectedTab} value={selectedTab} onValueChange={(newVal)=>setSelectedTab!(newVal as TTab)}>
                <TabList/>
                <TabContent/>
            </Tabs>
        </div>
    </section>
}

const TabList = ()=>{
    return  <TabsList  className="w-full h-auto">
        <div className='w-full md:flex justify-evenly'>
            <TabsTrigger className='w-1/2 md:w-auto scale-75 md:scale-100' value="associado">Associado</TabsTrigger>
            <TabsTrigger className='w-1/2 md:w-auto scale-75 md:scale-100' value="doar">Doar</TabsTrigger>
            <TabsTrigger className='w-1/2 md:w-auto scale-75 md:scale-100' value="voluntario">Voluntário</TabsTrigger>
            <TabsTrigger className='w-1/2 md:w-auto scale-75 md:scale-100' value="irs">Consignação do IRS</TabsTrigger>
        </div>
  </TabsList>
}

const TabContent = ()=>{
    return <>
        <TabContentTemplate
            header="Junte-se à AGIRAR e ajude a criar um futuro mais inclusivo para pessoas com psicose!"
            value="associado"
        >
            <div className='w-full flex flex-col items-center gap-5 mt-5'>
                <p className='w-full text-center max-w-3xl'>Ao ser associado, você irá possibilitar que continuemos a dar apoio psicossocial e psicoeducação de pessoas com psicose, além de combater o estigma associado á doença mental.</p>
                <p className='w-full text-center max-w-3xl'>Juntos, podemos ser um agente transformador da vida de muitas famílias e indivíduos, promovendo a inclusão e o bem-estar.</p>
                <Image className='rounded-xl' src={Associados} width={350} alt="Foto de associados"/>
                <p className='max-w-3xl font-bold w-full'>Benefícios de ser associado:</p>
                <div className='w-full flex md:flex-row flex-col justify-between  max-w-3xl gap-3'>
                    <ul className='list-decimal pl-10'>
                        <li>Participar de eventos exclusivos e atividades organizadas pela Associação;</li>
                        <li>Receber informações atualizadas sobre projetos e iniciativas da AGIRAR;</li>
                        <li>Ter voz nas decisões e desenvolvimento da Associação;</li>
                        <li>Acesso a um ambiente de apoio e troca de experiências com outros associados e com a equipa da AGIRAR;</li>
                        <li>Acesso a parcerias da AGIRAR e às suas condições.</li>
                    </ul>
                </div>
                <p className='max-w-3xl font-bold w-full'>Como tornar-se associado:</p>
                <p className='max-w-3xl w-full'>Para se associar à AGIRAR, basta preencher o formulário de inscrição infra com seus dados pessoais.</p>
                <div className='w-full flex justify-center'>
                    <MemberComponent
                        title='Tornar-me Associado'
                        reason='mensal'
                        pagamento='transferencia'
                    >
                        <Button> Associe-se Agora</Button>
                    </MemberComponent>
                </div>
                <p className='max-w-3xl font-bold w-full'>Quanto custa ser associado?</p>
                <p className='max-w-3xl w-full'>O associado paga uma joia no valor de 5€ e posteriormente, o valor mensal de 2€ que poderá pagar mensalmente, trimestralmente ou anualmente.</p>
                <p className='max-w-3xl font-bold w-full'>Quais são os métodos de pagamento?</p>
                <p className='max-w-3xl w-full'>Poderá realizar o seu pagamento usando uma destas opções:</p>
                <ul className='list-disc'>
                    <li><strong>MBWAY</strong> para o contacto telefónico <strong>912 353 788</strong></li>
                    <li>Transferência bancária para o <strong>IBAN {IBAN}</strong></li>
                </ul>
                <p className='max-w-3xl w-full'>Envie sempre o <strong>comprovativo de pagamento para o email agirar.2013@gmail.com.</strong> Mais tarde receberá o seu recibo via email.</p>
                <TestemunhosList list={volunteerTestimonials}/>
                <p className='w-full text-center max-w-3xl font-bold text-2xl'>A sua adesão é fundamental para que a nossa Associação seja mais representativa. Ao associar-se, ajuda a permitir o apoio a pessoas com psicose e seus familiares tornando a sociedade mais inclusiva.</p>

            </div>
        </TabContentTemplate>

        <TabContentTemplate
            header="Faça um donativo e ajude-nos a fazer a diferença."
            value="doar"
        >
            <div className='w-full flex flex-col items-center gap-5 mt-5'>
                <p className='w-full text-center max-w-3xl'>O seu contributo ajuda-nos a continuar a nossa atividade. Cada euro doado permite que a AGIRAR ofereça apoio psicossocial, atividades de psicoeducação, e iniciativas de combate ao estigma para pessoas com psicose e suas famílias.</p>
                <div className='flex justify-evenly flex-wrap w-full '>
                    <Image className='m-3 rounded-xl' width={250} src={Donativo1} alt="foto de utentes"/>
                    <Image className='m-3 rounded-xl' width={250} src={Donativo2} alt="foto de utentes"/>
                    <Image className='m-3 rounded-xl' width={250} src={Donativo3} alt="foto de utentes"/>


                </div>
                
                <p className='max-w-3xl font-bold w-full'>Quais são as opções de pagamento?</p>
                <ul className='list-disc'>
                    <li><strong>MBWAY</strong> para o contacto telefónico <strong>912 353 788</strong></li>
                    <li>Transferência bancária para o <strong>IBAN {IBAN}</strong></li>
                </ul>
                <p className='max-w-3xl w-full'>A AGIRAR tem um compromisso com a transparência. Enviamos por mail recibo de todos os valores de donativos recebidos.</p>
                    <TestemunhosList list={testimonials}/>
                
                <p className='w-full text-center max-w-3xl text-3xl font-bold'>Doar é fácil e seguro. </p>
                

            </div>
        </TabContentTemplate>
        <TabContentTemplate
            header="Ao tornar-se voluntário, você ajuda a criar um ambiente inclusivo e acolhedor, onde as pessoas podem receber o apoio necessário para sua recuperação e inclusão."
            value="voluntario"
        >
            <div className='w-full flex flex-col items-center gap-5 mt-5'>
                <p className='w-full text-center max-w-3xl'>Há diversas formas de se envolver, o importante é através das competências que detém ajudar-nos a organizar atividades/workshops, participação em eventos e campanhas de conscientização; apoio logístico e administrativo, etc.</p>
                <p className='w-full text-center max-w-3xl'>Para se inscrever como voluntário, basta preencher o formulário infra com seus dados e interesses/competências.</p>
                <p className='w-full text-center max-w-3xl'>Após o envio, a nossa equipa entrará em contato consigo para informar sobre as oportunidades disponíveis e próximos passos.</p>
                <VoluntarioComponent
                    title='Junte-se à nossa família! 😍'
                    renderComponent={<Button size="sm" variant="outline" className='bg-blue-400 text-white'>Inscreva-se agora</Button>}
                />
                <p className='w-full text-center max-w-3xl text-2xl font-bold'>Contribua com o seu tempo/aptidões e venha colaborar connosco!</p>
            </div>
        </TabContentTemplate>
        <TabContentTemplate
            header="Ajude a AGIRAR a custo zero!"
            value="irs"
        >
            <div className='w-full flex flex-col items-center gap-5 mt-5'>
                <p className='w-full text-center max-w-3xl'>A consignação do IRS é um processo simples e gratuito.</p>
                <p className='w-full text-center max-w-3xl'>Esta contribuição ajuda a AGIRAR a manter e expandir suas atividades de apoio e inclusão para pessoas com psicose e seus familiares.</p>
                <p className='w-full text-center max-w-3xl'>Basta uma x (cruz) no campo 11 e colocar no nosso <strong>NIF - 510 678 360</strong></p>
                <p className='w-full max-w-3xl'>Esta medida está salvaguardada na lei portuguesa através do art.º 32.º, n.º 6 da Lei n.º 16/2001 de 22 Junho, que permite que todos os contribuintes possam doar 0,5% do seu IRS já liquidado a Instituições Particulares de Solidariedade Social ou Pessoas Coletivas de Utilidade Pública.</p>
                <p className='w-full max-w-3xl'><strong>É importante lembrar que a consignação é gratuita.</strong> Não gera custos adicionais para o contribuinte e não altera o valor final a pagar ou a receber. Caso não escolha nenhuma associação para doar, o Estado reembolsa esse dinheiro. <strong>Este valor nunca será devolvido ao contribuinte.</strong></p>
                <p className='w-full max-w-3xl'>Entre <strong>1 de janeiro e 31 de março</strong>, o Contribuinte pode comunicar a Instituição ou Associação a quem pretende consignar o seu IRS e/ou IVA no Portal das Finanças, mesmo antes da entrega da sua declaração de IRS.</p>
                <p className='max-w-3xl font-bold w-full'>Como consignar 0,5% do seu IRS para a AGIRAR?</p>
                <ul className='list-decimal pl-16'>
                    <li>Entre no <Link className='text-blue-400 font-bold' href="https://www.portaldasfinancas.gov.pt" target="_blank">Portal das Finanças</Link> usando as suas credenciais.</li>
                    <li>No menu, selecione “Entregar IRS” para aceder ao formulário de declaração de IRS.</li>
                    <li>Dentro do formulário da declaração de IRS (Modelo 3), vá até o <strong>Quadro 11</strong> – essa é a seção de consignação.</li>
                    <li>Escolha a Opção “Instituições Particulares de Solidariedade Social ou Pessoas Coletivas de Utilidade Pública”</li>
                    <li>Insira o <strong>NIF da AGIRAR - 510 678 360</strong></li>
                    <li>Após preencher todos os campos necessários da declaração, revise as informações e conclua a submissão.</li>
                </ul>

                <p className='w-full text-center max-w-2xl text-2xl font-bold'>Ao doar a sua Consignação do IRS, está a tornar-se uma parte ativa na nossa missão.</p>
            </div>
        </TabContentTemplate>
    </>
}

const TabContentTemplate = ({
    header,
    value,
    children
}:{
    header: string | React.ReactNode,
    value: TTab
    children: React.ReactNode
})=>{
    return <TabsContent value={value}>
        <Card>
            <CardHeader className='flex flex-row justify-center w-full'>
                {typeof header === "string" ? <CardTitle className='text-center max-w-3xl text-3xl'>{header}</CardTitle>: header}
            </CardHeader>
            <CardContent>
                {children}
            </CardContent>
        </Card>
    </TabsContent>
}

export default Apoiar