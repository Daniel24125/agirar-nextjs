
export type TEvent = {
    id: string, 
    title: string, 
    date: string, 
    img: string, 
    href: string, 
    desc: string
}

export const getTheLastEvents = (num?:number|undefined) =>{
    const list: TEvent[] = [
        {
            id: "evt1",
            title: "Praça da Alegria",
            date: "03/06/2020", 
            img: "/agirar_praca.jpg", 
            href: "https://media.rtp.pt/praca/videos/associacao-familiares-amigos-pessoas-psicose/?fbclid=IwAR1uoAQcLg_EwZzK4gjsYU1LEmpNe6w0kDOYaZ1U5VZQU9Wy371PBJPwc8c", 
            desc: "A AGIRAR foi convidada para amanhã às 11,15h estar presente na rubrica Consultório de Saúde Mental no Programa Praça da Alegria. O tema a abordar será A Psicose e irá estar presente o Psiquiatra Dr Jorge Bouça e a Enfermeira Fernanda Castro em representação da AGIRAR. Vamos dar Voz à Saúde Mental e ao papel importante que a AGiRAR tem vindo a desenvolver na comunidade onde está inserida."
        },
        {
            id: "evt2",
            title: "Praça da Alegria 2",
            date: "03/06/2020", 
            img: "/agirar_praca.jpg", 
            href: "https://media.rtp.pt/praca/videos/associacao-familiares-amigos-pessoas-psicose/?fbclid=IwAR1uoAQcLg_EwZzK4gjsYU1LEmpNe6w0kDOYaZ1U5VZQU9Wy371PBJPwc8c", 
            desc: "A AGIRAR foi convidada para amanhã às 11,15h estar presente na rubrica Consultório de Saúde Mental no Programa Praça da Alegria. O tema a abordar será A Psicose e irá estar presente o Psiquiatra Dr Jorge Bouça e a Enfermeira Fernanda Castro em representação da AGIRAR. Vamos dar Voz à Saúde Mental e ao papel importante que a AGiRAR tem vindo a desenvolver na comunidade onde está inserida."
        },
        {
            id: "evt3",
            title: "Praça da Alegria 3",
            date: "03/06/2020", 
            img: "/agirar_praca.jpg", 
            href: "https://media.rtp.pt/praca/videos/associacao-familiares-amigos-pessoas-psicose/?fbclid=IwAR1uoAQcLg_EwZzK4gjsYU1LEmpNe6w0kDOYaZ1U5VZQU9Wy371PBJPwc8c", 
            desc: "A AGIRAR foi convidada para amanhã às 11,15h estar presente na rubrica Consultório de Saúde Mental no Programa Praça da Alegria. O tema a abordar será A Psicose e irá estar presente o Psiquiatra Dr Jorge Bouça e a Enfermeira Fernanda Castro em representação da AGIRAR. Vamos dar Voz à Saúde Mental e ao papel importante que a AGiRAR tem vindo a desenvolver na comunidade onde está inserida."
        },
        {
            id: "evt4",
            title: "Praça da Alegria 4",
            date: "03/06/2020", 
            img: "/agirar_praca.jpg", 
            href: "https://media.rtp.pt/praca/videos/associacao-familiares-amigos-pessoas-psicose/?fbclid=IwAR1uoAQcLg_EwZzK4gjsYU1LEmpNe6w0kDOYaZ1U5VZQU9Wy371PBJPwc8c", 
            desc: "A AGIRAR foi convidada para amanhã às 11,15h estar presente na rubrica Consultório de Saúde Mental no Programa Praça da Alegria. O tema a abordar será A Psicose e irá estar presente o Psiquiatra Dr Jorge Bouça e a Enfermeira Fernanda Castro em representação da AGIRAR. Vamos dar Voz à Saúde Mental e ao papel importante que a AGiRAR tem vindo a desenvolver na comunidade onde está inserida."
        },
        {
            id: "evt5",
            title: "Praça da Alegria 5",
            date: "03/06/2020", 
            img: "/agirar_praca.jpg", 
            href: "https://media.rtp.pt/praca/videos/associacao-familiares-amigos-pessoas-psicose/?fbclid=IwAR1uoAQcLg_EwZzK4gjsYU1LEmpNe6w0kDOYaZ1U5VZQU9Wy371PBJPwc8c", 
            desc: "A AGIRAR foi convidada para amanhã às 11,15h estar presente na rubrica Consultório de Saúde Mental no Programa Praça da Alegria. O tema a abordar será A Psicose e irá estar presente o Psiquiatra Dr Jorge Bouça e a Enfermeira Fernanda Castro em representação da AGIRAR. Vamos dar Voz à Saúde Mental e ao papel importante que a AGiRAR tem vindo a desenvolver na comunidade onde está inserida."
        },
        {
            id: "evt6",
            title: "Praça da Alegria 6",
            date: "03/06/2020", 
            img: "/agirar_praca.jpg", 
            href: "https://media.rtp.pt/praca/videos/associacao-familiares-amigos-pessoas-psicose/?fbclid=IwAR1uoAQcLg_EwZzK4gjsYU1LEmpNe6w0kDOYaZ1U5VZQU9Wy371PBJPwc8c", 
            desc: "A AGIRAR foi convidada para amanhã às 11,15h estar presente na rubrica Consultório de Saúde Mental no Programa Praça da Alegria. O tema a abordar será A Psicose e irá estar presente o Psiquiatra Dr Jorge Bouça e a Enfermeira Fernanda Castro em representação da AGIRAR. Vamos dar Voz à Saúde Mental e ao papel importante que a AGiRAR tem vindo a desenvolver na comunidade onde está inserida."
        },
        {
            id: "evt7",
            title: "Praça da Alegria",
            date: "03/06/2020", 
            img: "/agirar_praca.jpg", 
            href: "https://media.rtp.pt/praca/videos/associacao-familiares-amigos-pessoas-psicose/?fbclid=IwAR1uoAQcLg_EwZzK4gjsYU1LEmpNe6w0kDOYaZ1U5VZQU9Wy371PBJPwc8c", 
            desc: "A AGIRAR foi convidada para amanhã às 11,15h estar presente na rubrica Consultório de Saúde Mental no Programa Praça da Alegria. O tema a abordar será A Psicose e irá estar presente o Psiquiatra Dr Jorge Bouça e a Enfermeira Fernanda Castro em representação da AGIRAR. Vamos dar Voz à Saúde Mental e ao papel importante que a AGiRAR tem vindo a desenvolver na comunidade onde está inserida."
        },
        {
            id: "evt8",
            title: "Praça da Alegria",
            date: "03/06/2020", 
            img: "/agirar_praca.jpg", 
            href: "https://media.rtp.pt/praca/videos/associacao-familiares-amigos-pessoas-psicose/?fbclid=IwAR1uoAQcLg_EwZzK4gjsYU1LEmpNe6w0kDOYaZ1U5VZQU9Wy371PBJPwc8c", 
            desc: "A AGIRAR foi convidada para amanhã às 11,15h estar presente na rubrica Consultório de Saúde Mental no Programa Praça da Alegria. O tema a abordar será A Psicose e irá estar presente o Psiquiatra Dr Jorge Bouça e a Enfermeira Fernanda Castro em representação da AGIRAR. Vamos dar Voz à Saúde Mental e ao papel importante que a AGiRAR tem vindo a desenvolver na comunidade onde está inserida."
        }
    ]
    return num? list.slice(0, num): list 
}