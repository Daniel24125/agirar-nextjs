
import React from 'react'
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from './ui/dialog'
import { Tabs, TabsContent, TabsList, TabsTrigger } from './ui/tabs'
import { Button } from './ui/button'
import { Input } from './ui/input'
import { Label } from './ui/label'
import { ChevronLeft, ChevronRight } from 'lucide-react'
import { useToast } from "@/components/ui/use-toast"
import { TVolunteerFrom, validatePersonalInfo } from '@/utils/Utils'
import SubmitComponent from './SubmitComponent'
import { ToastAction } from './ui/toast'
import { CardComponent } from './MemberComponent'
import { Textarea } from './ui/textarea'



const VoluntarioComponent = ({
    renderComponent,
    title,
}:{
    renderComponent: React.ReactNode,
    title: string,
}) => {
    const [open, setOpen] = React.useState(false);
    const [selectedTab, setSelectedTab] = React.useState("personal")
    const [submit, setSubmit] = React.useState(false)
    const { toast, dismiss } = useToast()
    const [form, setForm] = React.useState<TVolunteerFrom>({
        nome: "",
        email: "",
        telefone: "",
        desc: "",
        funcao: ""
    })
    
    const descDisabled = validatePersonalInfo(form)

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>)=>{
        dismiss()
        setForm(prev=>{
            return {
                ...prev, 
                [e.target.id]: e.target.value
            }
        })
    }

    const handleSubmit = ()=>{
        if(descDisabled){
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
            <DialogTrigger  asChild>{renderComponent}</DialogTrigger>
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
                                    disabled={descDisabled} 
                                    value="desc">Descrição</TabsTrigger>
                               
                            </TabsList>
                            <TabsContent value="personal">
                                <CardComponent
                                    title="Informação Pessoal"
                                    desc="Deixe-nos conhecer-lo(a) um pouco melhor!"
                                    footerComponent={<>
                                        <div className='flex w-full justify-end'>
                                            <Button 
                                                disabled={descDisabled}
                                                variant="outline" size="icon" onClick={()=>setSelectedTab("desc")}><ChevronRight/></Button>
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
                                </CardComponent>
                            </TabsContent>
                            <TabsContent value="desc">
                            <CardComponent 
                                    title="Descrição"
                                    desc="Se quiser, pode falar um pouco das suas motivações assim com omencionar em que área se gostaria de voluntariar"
                                    footerComponent={<>
                                        <Button  variant="outline" size="icon" onClick={()=>setSelectedTab("personal")}><ChevronLeft/></Button>
                                        {submit? <SubmitComponent 
                                            submitData={form}
                                            setSubmit={setSubmit}
                                            successFunc={()=>{
                                                setOpen(false)
                                            }}
                                            config={{
                                                url: "/api/voluntario",
                                                method: "POST"
                                            }}
                                        /> : <Button  variant="outline" onClick={handleSubmit}>Submeter</Button>}
                                    </>}
                                >
                                    <div className="space-y-1">
                                        <Label htmlFor="desc">Descrição</Label>
                                        {/* @ts-ignore */}
                                        <Textarea id="desc" placeholder="Faça uma pequena descrição sobre a suas motivações" defaultValue={form.desc} value={form.desc} onChange={handleChange}/>
                                    </div>
                                    <div className="space-y-1">
                                        <Label htmlFor="funcao">Função</Label>
                                        <Input id="funcao" placeholder="Que função gostaria de desempenhar na Agirar" defaultValue={form.funcao} value={form.funcao} onChange={handleChange}/>
                                    </div>
                                    
                               </CardComponent>
                            </TabsContent>
                        </Tabs>
                    </DialogDescription>
                </DialogHeader>
            </DialogContent>
        </Dialog>
        
  </>

}





export default VoluntarioComponent