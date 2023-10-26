import React from 'react'
import useSWR from 'swr'
import axios from 'axios'
import { TMembroFrom } from '@/utils/Utils'
import { Loader2 } from 'lucide-react'
import { useToast } from './ui/use-toast'
import { ToastAction } from '@radix-ui/react-toast'

const SubmitComponent = ({
    submitData,
    setSubmit,
    config={
        url: "/api/member",
        method: "POST"
    }
}: {
    submitData: TMembroFrom,
    setSubmit: any,
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
            console.log(hasError)
            toast({
                variant: hasError?"destructive": "default",
                title: hasError? "Erro": "Sucesso",
                //@ts-ignore
                description: data ? data.data.msg : "O endpoit que tentou aceder não está disponível.",
                action: <ToastAction altText="Fechar">Fechar</ToastAction>
            })
            setSubmit(false)
        }
    })
  return <Loader2 className=' animate-spin' />
}

export default SubmitComponent