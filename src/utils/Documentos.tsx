export type TRelatorio = {
    title: string,
    file: string
}

type TYearData = {
    [key: string]: TRelatorio[]
}

export const documentos:TYearData = {
   
    "2025":[
        {
            title: "Tomada de Posse",
            file: "/documentos/tomadaPosse2025.pdf"
        },
        {
            title: "Ata 22",
            file: "/documentos/ata22.pdf"
        },
     
    ]
}