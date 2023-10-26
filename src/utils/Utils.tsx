import { NextApiResponse } from "next"
import axios from "axios"

export type TMembroFrom = {
    nome: string,
    email: string,
    telefone: string,
    dataNascimento: string,
    morada: string,
    codPostal: string,
    localidade: string,
    nif: string,
    tipo: "unico" | "mensal",
    valor: string,
    freq: "mensal" | "trimestral" | "anualmente",
    modo: "transferencia" | "mbway", 
}

export const validateMembroFrom = (form:TMembroFrom) =>{
    const fiscalDisabled = form.nome === "" || 
        !form.email.match(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/) || 
        form.telefone === "" || 
        form.telefone.length < 9
    const pagamentoDisabled = form.morada === "" || 
        form.codPostal === "" || 
        form.localidade === "" || 
        form.nif === "" || 
        form.nif.length < 9
    return {fiscalDisabled, pagamentoDisabled}
}

export type TAxiosMethod = "GET" | "POST" | "PATCH"| "DELETE" | "PUT"



type TAxiosConfig = {
    method: TAxiosMethod,
    url: string, 
    body: any,
    headers: any
}


export const fetcher = (config: TAxiosConfig)=> axios({
    method: config.method,
    url: config.url,
    data: config.body,
    headers: config.headers
}).then((res) => res.data)



// export const useFetchData = (path:string, 
//         method: TAxiosMethod="GET",
//         body: any=null, 
//         headers: any,
//         canFetch: boolean=true, 
//     )=>{

//     const { data, error, mutate, isValidating} = useSWR(canFetch ?{
//         url: path,
//         method,
//         body,
//         headers
//     }: null, fetcher, {
//         revalidateOnFocus: false,
//         // revalidateOnMount:true,
//         // refreshWhenOffline: false,
//         // refreshWhenHidden: false,
//     })   
//     return {data,error, isLoading: canFetch && !error && !Boolean(data), mutate, isValidating}
// }