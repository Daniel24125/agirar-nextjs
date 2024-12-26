
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



export type TVolunteerFrom = {
    nome: string,
    email: string,
    telefone: string,
    desc: string,
    funcao: string
}

export const validatePersonalInfo = (form:TMembroFrom | TVolunteerFrom) => form.nome === "" || 
!form.email.match(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/) || 
form.telefone === "" || 
form.telefone.length < 9

export const validateMembroFrom = (form:TMembroFrom) =>{
    const fiscalDisabled = validatePersonalInfo(form)
    const pagamentoDisabled = form.morada === "" || 
        form.codPostal === "" || 
        form.localidade === "" || 
        form.nif === "" || 
        form.nif.length < 9
    return {fiscalDisabled, pagamentoDisabled}
}


export const IBAN = "PT50 0010 0000 6297 9440 0011 0"
