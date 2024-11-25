
import React from 'react'
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from './ui/dialog'
import { Tabs, TabsContent, TabsList, TabsTrigger } from './ui/tabs'
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from './ui/card'
import { Button } from './ui/button'
import { Input } from './ui/input'
import { Label } from './ui/label'
import { ChevronLeft, ChevronRight } from 'lucide-react'
import moment from 'moment'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from './ui/select'
import { useToast } from "@/components/ui/use-toast"
import { IBAN, TMembroFrom, validateMembroFrom } from '@/utils/Utils'
import SubmitComponent from './SubmitComponent'
import { ToastAction } from './ui/toast'

const mensalidade = 2
const joia = 5

const MemberComponent = ({
    children,
    title,
    reason,
    pagamento
}:{
    children: React.ReactNode,
    title: string,
    reason: "unico" | "mensal" 
    pagamento: "transferencia" | "mbway"
}) => {
    const [open, setOpen] = React.useState(false);
    const [selectedTab, setSelectedTab] = React.useState("personal")
    const [submit, setSubmit] = React.useState(false)
    const { toast, dismiss } = useToast()
    const [form, setForm] = React.useState<TMembroFrom>({
        nome: "",
        email: "",
        telefone: "",
        dataNascimento: new Date().toJSON(),
        morada: "",
        codPostal: "",
        localidade: "",
        nif: "",
        tipo: reason,
        valor: "",
        freq: "mensal",
        modo: pagamento,
    })
    
    const {pagamentoDisabled, fiscalDisabled} = validateMembroFrom(form)

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>)=>{
        dismiss()
        setForm(prev=>{
            return {
                ...prev, 
                [e.target.id]: e.target.value
            }
        })
    }

    React.useEffect(()=>{
        setForm(prev=>{
            return {
                ...prev, 
                tipo: reason
            }
        })
    },[reason])

    React.useEffect(()=>{
        setForm(prev=>{
            return {
                ...prev, 
                modo: pagamento
            }
        })
    },[pagamento])

    const handleSubmit = ()=>{
        if(fiscalDisabled || pagamentoDisabled || (form.tipo === "unico" && form.valor === "")){
            toast({
                variant: "destructive",
                title: "Erro",
                description: "Por favor preencha o formulário sem deixar campos em branco.",
                action: <ToastAction altText="Fechar">Fechar</ToastAction>
            })
        }else{
            setSubmit(true)
        }
    }

    return <>
        <Dialog open={open} onOpenChange={setOpen}> 
            <DialogTrigger  asChild>{children}</DialogTrigger>
            <DialogContent>
                <DialogHeader>
                    <DialogTitle>{title}</DialogTitle>
                    <DialogDescription className='py-5'>
                        <Tabs defaultValue="personal" value={selectedTab} 
                            onValueChange={(val)=>{
                                setSelectedTab(val)
                            }}
                        >
                            <TabsList className=" flex-col justify-evenly w-full h-28 hidden sm:flex sm:h-auto  sm:flex-row">
                                <TabsTrigger  value="personal">Informação Pessoal</TabsTrigger>
                                <TabsTrigger 
                                    disabled={fiscalDisabled} 
                                    value="fiscal">Informação Fiscal</TabsTrigger>
                                <TabsTrigger 
                                    disabled={pagamentoDisabled} 
                                    value="payment">Pagamentos</TabsTrigger>
                            </TabsList>
                            <TabsContent value="personal">
                                <CardComponent 
                                    title="Informação Pessoal"
                                    desc="Esta informação é requisitada para lhe podermos passar recibo."
                                    footerComponent={<>
                                        <div className='flex w-full justify-end'>
                                            <Button 
                                                disabled={fiscalDisabled}
                                                variant="outline" size="icon" onClick={()=>setSelectedTab("fiscal")}><ChevronRight/></Button>
                                        </div>
                                    </>}
                                >
                                    <div className="space-y-1">
                                            <Label htmlFor="nome">Nome</Label>
                                            <Input id="nome" placeholder="Insira aqui o seu nome" defaultValue={form.nome} value={form.nome} onChange={handleChange}/>
                                        </div>
                                        <div className="space-y-1">
                                            <Label htmlFor="email">Email</Label>
                                            <Input type='email' id="email" placeholder="Insira aqui o seu email" defaultValue={form.email} value={form.email} onChange={handleChange}/>
                                        </div>
                                        <div className="space-y-1">
                                            <Label htmlFor="telefone">Contacto Telefónico</Label>
                                            <Input id="telefone" placeholder="Insira aqui o seu contacto telefónico" defaultValue={form.telefone} value={form.telefone} onChange={handleChange}/>
                                        </div>
                                        <div className="space-y-1 flex flex-col z-10">
                                            <Label htmlFor="dataNascimento">Data de Nascimento</Label>
                                            <Input id="dataNascimento" placeholder="DD/MM/YYYY" type="date"  value={moment(form.dataNascimento).format("YYYY-MM-DD")} onChange={(e)=>{
                                               //@ts-ignore
                                               const date = moment( e.target.value)
                                               const [day, month, year] = [date.date(), date.month(), date.year()]

                                                setForm(prev=>{
                                                    return {
                                                        ...prev, 
                                                        dataNascimento: date.toJSON()
                                                    }
                                                })
                                                e.target.value = `${day}/${month}/${year}`
                                            }}/>
                                            {/* <DateTimePicker
                                                className='relative'
                                                value={moment(form.dataNascimento)}
                                                format='DD/MM/YYYY'
                                                viewRenderers={{
                                                    hours: null,
                                                    minutes: null,
                                                    seconds: null,
                                                  }}
                                                onChange={(val)=>{
                                                    console.log(val)
                                                }}
                                            /> */}
                                        </div>
                                </CardComponent>
                            </TabsContent>
                            <TabsContent value="fiscal">
                            <CardComponent 
                                    title="Informação Fiscal"
                                    desc="Esta informação é requisitada para lhe podermos passar recibo."
                                    footerComponent={<>
                                        <Button  variant="outline" size="icon" onClick={()=>setSelectedTab("personal")}><ChevronLeft/></Button>
                                        <Button  
                                            disabled={pagamentoDisabled} variant="outline" size="icon" onClick={()=>setSelectedTab("payment")}><ChevronRight/></Button>
                                    </>}
                                >
                                    <div className="space-y-1">
                                        <Label htmlFor="morada">Morada</Label>
                                        <Input id="morada" placeholder="Insira aqui a sua Morada" defaultValue={form.morada} value={form.morada} onChange={handleChange}/>
                                    </div>
                                    <div className="space-y-1">
                                        <Label htmlFor="codPostal">Código Postal</Label>
                                        <Input id="codPostal" placeholder="Insira aqui o seu Código Postal (ex: 0000-000)" defaultValue={form.codPostal} value={form.codPostal} onChange={handleChange}/>
                                    </div>
                                    <div className="space-y-1">
                                        <Label htmlFor="localidade">Localidade</Label>
                                        <Input id="localidade" placeholder="Insira aqui a sua Localidade" defaultValue={form.localidade} value={form.localidade} onChange={handleChange}/>
                                    </div>
                                    <div className="space-y-1">
                                        <Label htmlFor="nif">NIF</Label>
                                        <Input id="nif" placeholder="Insira aqui o seu NIF" defaultValue={form.nif} value={form.nif} onChange={handleChange}/>
                                    </div>
                               </CardComponent>
                            </TabsContent>
                            <TabsContent value="payment">
                               <CardComponent 
                                    title="Pagamentos"
                                    desc="Pode escolher várias modalidades de contribuições: Pagamento único por transferência Bancária ou MBWay; Tornar-se sócio da Agirar e usufruir dos Ateliers"
                                    footerComponent={<>
                                        <Button  variant="outline" size="icon" onClick={()=>setSelectedTab("fiscal")}><ChevronLeft/></Button>
                                        {submit? <SubmitComponent 
                                            submitData={form}
                                            setSubmit={setSubmit}
                                            successFunc={()=>{
                                                setOpen(false)
                                            }}
                                            config={{
                                                url: "/api/member",
                                                method: "POST"
                                            }}
                                        /> : <Button  variant="outline" onClick={handleSubmit}>Submeter</Button>}
                                    </>}
                                >
                                    <div className="space-y-1">
                                        <Label>Tipo de Contribuição</Label>
                                        <Select value={form.tipo} onValueChange={(val)=>{
                                            //@ts-ignore
                                            setForm(prev=>{
                                                return {
                                                    ...prev, 
                                                    tipo: val
                                                }
                                            })
                                        }}>
                                            <SelectTrigger>
                                                <SelectValue placeholder="Contribuição"/>
                                            </SelectTrigger>
                                            <SelectContent>
                                                <SelectItem value="unico">Donativo</SelectItem>
                                                <SelectItem value="mensal">Tornar-se Associado</SelectItem>
                                            </SelectContent>
                                        </Select>
                                    </div>
                                    {form.tipo === "unico" &&  <div className="space-y-1">
                                        <Label htmlFor="valor">Donativo</Label>
                                        <Input id="valor" placeholder="Insira aqui o montante" defaultValue={form.valor} value={form.valor} onChange={handleChange}/>
                                    </div>}
                                    <div className="space-y-1">
                                        <Label>Modo de Pagamento</Label>
                                        <Select value={form.modo} onValueChange={(val)=>{
                                            //@ts-ignore
                                            setForm(prev=>{
                                                return {
                                                    ...prev, 
                                                    modo: val
                                                }
                                            })
                                        }}>
                                            <SelectTrigger>
                                                <SelectValue placeholder="Pagamento por"/>
                                            </SelectTrigger>
                                            <SelectContent>
                                                <SelectItem value="transferencia">Transferencia</SelectItem>
                                                <SelectItem value="mbway">MBWay</SelectItem>
                                            </SelectContent>
                                        </Select>
                                        <p className='text-xs text-slate-400'>
                                            {form.modo === "transferencia" ? `As transferências bancárias podem ser realizadas para o seguinte IBAN: ${IBAN}` : "Pagamentos por MBWay podem ser ralizados para o nº 912 353 788"}
                                        </p>
                                    </div>
                                    {form.tipo === "mensal" && <div className="space-y-1">
                                        <Label>Frequência de Pagamento</Label>
                                        <Select value={form.freq} onValueChange={(val)=>{
                                            //@ts-ignore
                                            setForm(prev=>{
                                                return {
                                                    ...prev, 
                                                    freq: val
                                                }
                                            })
                                        }}>
                                            <SelectTrigger>
                                                <SelectValue placeholder="Frequência"/>
                                            </SelectTrigger>
                                            <SelectContent>
                                                <SelectItem value="mensal">Mensalmente</SelectItem>
                                                <SelectItem value="trimestral">Trimestralmente</SelectItem>
                                                <SelectItem value="anualmente">Anualmente</SelectItem>
                                            </SelectContent>
                                        </Select>
                                        <p className='text-xs text-slate-400'>
                                            O primeiro pagamento deve ser realizado acompanhado de uma joia de {joia}€.
                                        </p>
                                        <p className='text-xs'>
                                            {form.freq === "mensal" && `Pagamento mensal no valor de ${mensalidade}€. Nota: o primerio pagamento irá ser no valor de ${mensalidade+joia}€ (mensalidade mais joia de 5€)` }
                                            {form.freq === "trimestral" && `Pagamento mensal no valor de ${mensalidade*3}€. Nota: o primerio pagamento irá ser no valor de ${mensalidade*3+joia}€ (trimestralidade mais joia de 5€)` }
                                            {form.freq === "anualmente" && `Pagamento mensal no valor de ${mensalidade*12}€. Nota: o primerio pagamento irá ser no valor de ${mensalidade*12+joia}€ (anualidade mais joia de 5€)` }
                                        </p>
                                    </div>}
                               </CardComponent>
                            </TabsContent>
                        </Tabs>
                    </DialogDescription>
                </DialogHeader>
            </DialogContent>
        </Dialog>
        
  </>

}


export const CardComponent = ({
    title, 
    desc, 
    footerComponent,
    children
}: {
    title: string, 
    desc: string, 
    footerComponent: React.ReactNode
    children: React.ReactNode,
})=>{
    return <Card className='w-[clamp(310px,90vw,470px)]'>
    <CardHeader>
        <CardTitle>{title}</CardTitle>
        <CardDescription>{desc}</CardDescription>
    </CardHeader>
    <CardContent className="space-y-2">
        {children}
    </CardContent>
    <CardFooter className='flex justify-between'>
        {footerComponent}
    </CardFooter>
</Card>
}


export default MemberComponent