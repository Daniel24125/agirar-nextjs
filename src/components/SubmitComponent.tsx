import React from 'react'
import useSWR from 'swr'
import axios from 'axios'
import { TMembroFrom, TVolunteerFrom } from '@/utils/Utils'
import { Loader2 } from 'lucide-react'
import { useToast } from './ui/use-toast'
import { ToastAction } from '@radix-ui/react-toast'

const SubmitComponent = ({
    submitData,
    setSubmit,
    successFunc,
    config={
        url: "/api/member",
        method: "POST"
    }
}: {
    submitData: TMembroFrom | TVolunteerFrom,
    setSubmit: any,
    successFunc: any,
    config: {
        method: "GET" | "POST" | "DELETE" | "PATCH",
        url: string
    }
}) => {
    const { toast, dismiss } = useToast()
    const { data, error, isLoading}  = useSWR({
        url: config.url,
        method: config.method,
        data: submitData,
    }, axios)

    React.useEffect(()=>{
        if(!isLoading ){
            //@ts-ignore
            let hasError =!data || data.data.error || error
            toast({
                variant: hasError?"destructive": "default",
                title: hasError? "Erro": "Sucesso",
                //@ts-ignore
                description: data ? data.data.msg : "O endpoit que tentou aceder não está disponível.",
                action: <ToastAction altText="Fechar">Fechar</ToastAction>
            })
            if(!hasError) successFunc()
            setSubmit(false)
        }
    })
  return <Loader2 className=' animate-spin' />
}

export default SubmitComponent