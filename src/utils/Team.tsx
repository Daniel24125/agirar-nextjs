export type TOrgaos = {
    "assembleia":{
        title: string, 
        membros: TMembro[]
    },
    "direcao":{
        title: string, 
        membros: TMembro[]
    },
    "conselho":{
        title: string, 
        membros: TMembro[]
    },
    "voluntarios":{
        title: string, 
        membros: TMembro[]
    }
}

export type TContact = {
    email?: string, 
    phone?: string, 
    linkedin?: string,
    github?: string,
    twitter?: string,
    facebook?: string,
}

export type TMembro = {
    id: string,
    name: string, 
    function: string, 
    photo?: string, 
    contact?: TContact
}

export const orgaos: TOrgaos = {
    "assembleia":{
        title: "Assembleia Geral",
        membros: [
            {
                id: "m1",
                name: "Maria José Figueiredo Pereira",
                function: "Presidente"
            },
            {
                id: "m2",
                name: "Maria Gabriela Magalhães Barros Mesquita Ramalho",
                function: "1º Secretário"
            },
            {
                id: "m3",
                name: "Manuel Fernando da Cunha de Sousa Castro",
                function: "2º Secretário"
            }
        ]
    },
    "direcao":{
        title: "Direção",
        membros: [
            {
                id: "m1",
                name: "Fernando Jorge da Silva Morais",
                function: "Presidente"
            },
            {
                id: "m2",
                name: "Fernanda da Conceição Borges de Castro",
                function: "Vice-Presidente"
            },
            {
                id: "m3",
                name: "Isabel Maria Carvalho Correia de Sousa",
                function: "Secretário"
            },
            {
                id: "m4",
                name: "Manuel António Fernandes Mendes",
                function: "Vogal"
            },
            {
                id: "m5",
                name: "Ema Pereira Lopes Ramos",
                function: "Tesoureiro"
            }
        ]
    },
    "conselho":{
        title: "Conselho Fiscal",
        membros: [
            {
                id: "m1",
                name: "Álvaro Augusto da Rocha Marques",
                function: "Presidente"
            },
            {
                id: "m2",
                name: "Maria Elisabete Oliveira Alves Ribeiro",
                function: "1º Vogal"
            },
            {
                id: "m3",
                name: "Maria Teresa de Magalhães Vaz Queirós",
                function: "2º Vogal"
            },
        ]
    },
    "voluntarios": {
        title: "Voluntários", 
        membros: [
            {
                id: "m1",
                name: "Daniel Madalena",
                function: "Web Developer",
                photo: "https://avatars.githubusercontent.com/u/22981795?s=100&u=2c718db3abec1a5c437c249c589b9b4167b6d044&v=4",
                contact: {
                    email: "danielmadalena@msn.com",
                    github: "https://github.com/Daniel24125",
                    linkedin: "https://www.linkedin.com/in/daniel-madalena-b3942b95/"
                }
            },
            {
                id: "m2",
                name: "Isabel Sobral",
                function: "Assistente Social",
                contact: {
                    linkedin: "https://www.linkedin.com/in/isabel-s-8637b690/"
                }
            },
            {
                id: "m3",
                name: "Lucas Lopes",
                function: "Médico Interno de Psiquiatria",
                contact: {
                    linkedin: "https://www.linkedin.com/in/lucas-lopes-254200b7/"
                }
            },
        ]
    }
}