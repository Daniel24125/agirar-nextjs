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

type TTab = "associado" | "doar"| "voluntario"

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
        <PageTitle title={<p className='text-6xl text-center font-bold'>Como apoiar</p>} />
        <TabComponent/>
       
    </TabContextProvider.Provider>
}
const TabComponent = ()=>{
    const {selectedTab, setSelectedTab} = React.useContext(TabContextProvider)
    return <section className={`${getSectionClass} justify-center py-10`}>
        <div className={`${getMaxWidthClasses} flex flex-col gap-10`}>
            <Tabs defaultValue={selectedTab} value={selectedTab} onValueChange={(newVal)=>setSelectedTab!(newVal as TTab)}>
                <TabList/>
                <TabContent/>
            </Tabs>
        </div>
    </section>
}

const TabList = ()=>{
    return  <TabsList className="w-full">
    <TabsTrigger value="associado">Associado</TabsTrigger>
    <TabsTrigger  value="doar">Doar</TabsTrigger>
    <TabsTrigger value="voluntario">Voluntário</TabsTrigger>
    <TabsTrigger value="irs">Consignação do IRS</TabsTrigger>
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
                <p className='max-w-3xl font-bold w-full'>Benefícios de ser associado:</p>
                <div className='w-full flex justify-between mt-10 max-w-3xl gap-3'>
                    <ul className='list-decimal pl-10'>
                        <li>Participar de eventos exclusivos e atividades organizadas pela Associação;</li>
                        <li>Receber informações atualizadas sobre projetos e iniciativas da AGIRAR;</li>
                        <li>Ter voz nas decisões e desenvolvimento da Associação;</li>
                        <li>Acesso a um ambiente de apoio e troca de experiências com outros associados e com a equipa da AGIRAR;</li>
                        <li>Acesso a parcerias da AGIRAR e às suas condições.</li>
                    </ul>
                    <Image className='rounded-xl' src={Associados} width={300} alt="Foto de associados"/>
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
                    <li>Transferência bancária para o <strong>IBAN 0036 0051 99100351967 81</strong></li>
                </ul>
                <p className='max-w-3xl w-full'>Envie sempre o <strong>comprovativo de pagamento para o email agirar.2013mail.com.</strong> Mais tarde receberá o seu recibo via email.</p>
                <p className='w-full text-center max-w-3xl font-bold text-xl'>A sua adesão é fundamental para que a nossa Associação seja mais representativa. Ao associar-se, ajuda a permitir o apoio a pessoas com psicose e seus familiares tornando a sociedade mais inclusiva.</p>

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
                {typeof header === "string" ? <CardTitle className='text-center max-w-lg'>{header}</CardTitle>: header}
            </CardHeader>
            <CardContent>
                {children}
            </CardContent>
        </Card>
    </TabsContent>
}

export default Apoiar