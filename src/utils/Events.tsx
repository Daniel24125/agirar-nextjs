
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
            title: "Resumo dos nossos 10 anos",
            date: "09/07/2023", 
            img: "https://images.pexels.com/photos/3357268/pexels-photo-3357268.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1", 
            href: "https://www.facebook.com/watch/?v=1328779111051533&extid=NS-UNK-UNK-UNK-IOS_GK0T-GK1C&ref=sharing&mibextid=WC7FNe", 
            desc: "Um pequeno resumo dos nossos 10 anos... Muito muito pequeno, pois temos tantas outras memórias, tantas outras histórias, tantas tantas..."
        },
        {
            id: "evt2",
            title: "Segunda atividade do nosso 10º aniversário",
            date: "11/03/2023", 
            img: "/evt2.jpg", 
            href: "https://m.facebook.com/story.php?story_fbid=pfbid0xA1oSZ7zW66935PzLvwoRkLCtBGjArUBoaVhoRr7VfGFrBKrAhsUP1CXpTvSLh6jl&id=100069330174307&mibextid=WC7FNe", 
            desc: "E hoje tivemos a nossa segunda atividade incluída nas comemorações do nosso 10 aniversário! Foi uma tarde de sorrisos, gargalhadas, mas acima de tudo de partilha! Obrigada a todos os presentes pelo apoio e por nos ajudarem a crescer! E muito obrigada à Mais Feliz Associação e ao Fernando Batista pela animação e pela mensagem! Muito importante percebemos que a forma como nos mexemos e comunicamos com o corpo influencia o outro, mas mais do que isso, influencia-nos, motiva-nos, empodera-nos! Sejamos mais sorridentes, mais felizes, mais positivos pela nossa saúde mental!"
        },
        {
            id: "evt3",
            title: "Passeio no Porto",
            date: "06/02/2023", 
            img: "/evt3.jpg", 
            href: "https://m.facebook.com/agirarassociacao/posts/pcb.502156792105322/?photo_id=502156535438681&mds=%2Fphotos%2Fviewer%2F%3Fphotoset_token%3Dpcb.502156792105322%26photo%3D502156535438681%26profileid%3D1463904108%26eav%3DAfb2jx5PnJ_UN0mJ_JD2UL4uDbO3ntubAZr1jEQmNbumSdxHldQ_dV031XFwFTUIhs0%26paipv%3D0%26source%3D48%26refid%3D52%26__tn__%3DEH-R%26cached_data%3Dfalse%26ftid%3D&mdp=1&mdf=1", 
            desc: "Na última sexta feira fomos passear... o ponto de encontro foi na torre dos Clérigos e de seguida realizámos uma caminhada até à Alfândega do Porto. Fomos assistir a um espetáculo imersivo: O “Porto Legends, the Underground Experience”. Tratou-se de uma experiência audiovisual 360º. Fomos admirar e conhecer mais da Invicta, através das suas histórias e lendas. As atividades na comunidade revestem-se de grande importância pois promovem as relações interpessoais e as competências sociais."
        },
        {
            id: "evt4",
            title: "Decoração Natalícia",
            date: "06/12/2022", 
            img: "/evt4.jpg", 
            href: "https://m.facebook.com/agirarassociacao/posts/pcb.458085006512501/?photo_id=458081096512892&mds=%2Fphotos%2Fviewer%2F%3Fphotoset_token%3Dpcb.458085006512501%26photo%3D458081096512892%26profileid%3D1463904108%26eav%3DAfax56Bp7I6W8r4zWqMFKVHp6QNuAjfrFs0lGH3zYSvT8uqS6vwWyN3c_m6u6aRuCTs%26paipv%3D0%26source%3D48%26refid%3D52%26__tn__%3DEH-R%26cached_data%3Dfalse%26ftid%3D&mdp=1&mdf=1", 
            desc: "A decoração natalícia na entrada das nossas instalações para dar as boas vindas a quem nos visita!"
        },
        
    ]
    return num? list.slice(0, num): list 
}