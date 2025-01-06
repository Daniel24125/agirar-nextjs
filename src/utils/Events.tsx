
export type TEvent = {
    id: string, 
    title: string, 
    date: string, 
    img: string[], 
    href: string, 
    abstract?: string,
    desc: string
}


export const getTheLastEvents = (num?:number|undefined) =>{
    const list: TEvent[] = [
        {
            id: Math.random().toString(16).slice(2),
            title: "Bem-vindo, 2025",
            date: "01/01/2025", 
            img: ["/eventos/01_01_2025/main.jpg"], 
            href: "https://www.facebook.com/agirarassociacao/posts/pfbid0gmniFvzkGYqEb9wz2HeEh42sCkTa7ucpPJUKSQXcZsMqg86Z8ucxdcwXrRMtg1L3l", 
            abstract: "Na AGIRAR, seguimos juntos, fortalecendo a nossa missão de apoio, inclusão e combate ao estigma.",
            desc: "Bem-vindo, 2025! Na AGIRAR, seguimos juntos, fortalecendo a nossa missão de apoio, inclusão e combate ao estigma. Que 2025 seja um ano repleto de progresso, de passos seguros e conquistas para cada um de nós e de muita saúde mental! Estamos prontos para mais um ano ao vosso lado "
        },
        {
            id: Math.random().toString(16).slice(2),
            title: "Assembleia Geral extraordinária",
            date: "30/12/2024", 
            img: ["/eventos/30_12_2024/main.jpg"], 
            href: "https://www.facebook.com/agirarassociacao/posts/pfbid0wzCwKVFjVbddf3UNstmvtea3HaU7iVt9niJDW1wwxaWggTCgfe8wH37ph65dZE6kl", 
            abstract: "Convidamos todos os associados a participar na Assembleia Geral",
            desc: "Convidamos todos os associados a participar na Assembleia Geral, que tem como objetivo a eleição dos corpos sociais para o quadriénio 2025/2028. A reunião será realizada no dia 18 de janeiro de 2025, às 16h, na nossa sede."
        },
        {
            id: Math.random().toString(16).slice(2),
            title: "Mensagem de Natal",
            date: "22/12/2024", 
            img: ["https://images.pexels.com/photos/29904638/pexels-photo-29904638.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"], 
            href: "https://www.facebook.com/reel/27832337996409683", 
            abstract: "Para todos vocês @seguidores, um Feliz Natal!",
            desc: "Para todos vocês @seguidores, um Feliz Natal!"
        },
        {
            id: Math.random().toString(16).slice(2),
            title: "Jantar de Natal",
            date: "14/12/2024", 
            img: ["/eventos/14_12_2024/main.jpg", "/eventos/14_12_2024/1.jpg", "/eventos/14_12_2024/2.jpg"], 
            href: "https://www.facebook.com/agirarassociacao/posts/pfbid095zZ9yAQiJV7bFWJaHg9aTqmGHcQUpZSAeMSRWRf2QCeiftuFLiP5iTdVE5E3KEJl", 
            abstract: "O nosso jantar de Natal reuniu utentes, famílias, voluntários. Foi uma noite para agradecer e recordar o ano de 2024, com muitas conversas, sorrisos e aquele espírito natalício que aquece os corações.",
            desc: "Ontem foi noite de celebração na AGIRAR! O nosso jantar de Natal reuniu utentes, famílias, voluntários. Foi uma noite para agradecer e recordar o ano de 2024, com muitas conversas, sorrisos e aquele espírito natalício que aquece os corações. Estes momentos são a prova de que juntos somos mais fortes, e estamos prontos para abraçar 2025 com a mesma energia e propósito. Obrigado a todos que fizeram parte desta noite tão especial. "
        },
        {
            id: Math.random().toString(16).slice(2),
            title: "Dia histórico para a AGIRAR",
            date: "29/11/2024", 
            img: ["/eventos/29_11_2024/main.jpg", "/eventos/29_11_2024/1.jpg", "/eventos/29_11_2024/2.jpg"], 
            href: "https://www.facebook.com/story.php?story_fbid=906164181704579&id=100069330174307&mibextid=WC7FNe&rdid=lolZM3CpssadNut5#", 
            abstract: "Assinatura do contrato de comodato para a cedência de um imóvel para a nova sede da Associação",
            desc: "Hoje é um dia histórico para a AGIRAR! A partir de hoje, temos oficialmente um imóvel para ser a tão sonhada sede da Associação. Este espaço será o coração da nossa Associação: um lugar acolhedor para receber utentes, famílias e amigos, que há tanto tempo idealizamos. A entrega da chave foi um momento de grande emoção e realização para todos os associados e para a Direção. Gostaríamos de expressar um especial agradecimento ao Município de Vila Nova de Gaia, que tornou possível a celebração deste contrato de comodato.Mas ainda há muito trabalho pela frente. Há um espaço para renovar para que fique pronto para vos receber! Fiquem atentos às nossas redes sociais, pois vamos partilhar todas as novidades desta jornada com vocês."
        },
        {
            id: Math.random().toString(16).slice(2),
            title: "8ª Caminhada “Passo pela Saúde Mental”",
            date: "09/10/2024", 
            img: ["/eventos/09_10_2024/main.jpg"], 
            href: "https://www.facebook.com/agirarassociacao/posts/pfbid02aao24VDepwkywvvTWui18mqGqSdAkS9V46QPhUmVMAJEqpoPwBzrCDmWn9y2N61Bl", 
            abstract: "A 8ª edição da caminhada decorreu ao longo da Praia das Pedras Amarelas",
            desc: "A nossa caminhada é já este sábado, dia 12! Quando chegar, dirija-se à nossa mesa de apoio para dar o seu nome e receber o seu kit. De seguida teremos um aquecimento em conjunto, proporcionado pelos nossos parceiros, o ginásio LifeClub. Depois de aquecidos, iremos caminhar sensivelmente 4kms ao longo da linha marítima. Para terminar, faremos uns alongamentos. Vai ser uma manhã em cheio! Não perca a oportunidade de contribuir para a nossa causa, ao mesmo tempo que faz exercício à beira mar. Já fez a sua inscrição?"
        },
        {
            id: Math.random().toString(16).slice(2),
            title: "Projeto “Apenas um clique”",
            date: "05/04/2024", 
            img: ["/eventos/05_04_2024/main.jpg"], 
            href: "https://www.facebook.com/agirarassociacao/posts/pfbid0nb7sj9wwP99TD8Z5gyAUqLt7c1oja7soSy6jvitTMS7B3sfw88q8BUBZLBaGtJNql", 
            abstract: "Cerimónia de entrega de dois computadores, cedidos pela Unidade Local de Saúde de Gaia e Espinho",
            desc: "Hoje fomos á Unidade Local de Saúde Gaia e Espinho receber os computadores do projeto “Segunda vida para equipamentos informáticos”   a qual nos tínhamos candidatado com o projeto “Apenas um clique “. Obrigada por esta iniciativa e certamente iremos optimizar os recursos agora obtidos."        
        },
        {
            id: Math.random().toString(16).slice(2),
            title: "Clube social - Bowling",
            date: "24/01/2024", 
            img: ["/eventos/24_01_2024/main.jpg"], 
            href: "https://www.facebook.com/agirarassociacao/posts/pfbid02MydfcrudENnJQZcTjPYRxfs7GsTNWzTKU2hS47Zd4qHANDkfDWYPjUznPFwRZrmUl", 
            desc: "Na passada terça feira tivemos mais uma atividade num local da comunidade. Os nossos utentes partilharam uma atmosfera acolhedora e divertida, risos ecoaram nas pistas … A prática do bowling para além de ser uma atividade recreativa promove também a socialização e fortalece os laços entre os participantes. Foi um dia simples, mas significativo, desafiando estigmas e construindo uma comunidade unida."        
        },
        {
            id: Math.random().toString(16).slice(2),
            title: "Jantar de Reis 2024",
            date: "06/01/2024", 
            img: ["/eventos/06_01_2024/main.jpg"], 
            href: "https://www.facebook.com/agirarassociacao/posts/pfbid02ej4EEMdqErc3a1hZTiKL9sqw5UggPdXdu2RS8k5v6ksBkcqyGbddXfiDK2ZQkdevl", 
            desc: "E hoje festejamos o nosso Jantar de Reis onde sorteamos mais um cabaz pelos nossos associados e amigos! Mais um momento de partilha e convívio! E que venham mais momentos assim! Um bom ano a todos os nossos amigos, familiares e utentes!"        
        },
        {
            id: Math.random().toString(16).slice(2),
            title: "Noticia sobre a 7ª edição da caminhada",
            date: "14/10/2023", 
            img: ["/eventos/14_10_2023/main.jpg"], 
            href: "https://www.facebook.com/agirarassociacao/posts/pfbid02M1HCf3ppMPKm6ouJZpdTQnz6Sh6Cz8GQUfaSjGMxcRa46vizhbWz7nX2ZdNYw9CLl", 
            desc: 'E hoje aconteceu a nossa VII Caminhada "Um passo pela saúde mental"! Mais uma vez inserida na Semana da Saúde Mental organizada pela Câmara Municipal de Gaia e o CHVNG/E. Foi uma manhã muito divertida, animada, calorosa e bem exercitada! Contamos com a presença e participação da sr.ª Vereadora Marina Mendes, do sr. Vereador Dário Silva e ainda da Dr.ª Patrícia Lopes, adjunta do Presidente da CMG. Agradecemos também a presença dos nossos parceiros da Gaiurb, na pessoa da Dr.ª Joana Azevedo, e da Code, na pessoa do Dr. Celso Barbosa. Não podemos deixar de referir o nosso professor jorge dias, do nosso parceiro LifeClub, que nos brindou com dois momentos muito animados, no aquecimento e alongamentos finais, que culminaram nos sorrisos gigantes com que os participantes abandonaram o recinto. Muito muito obrigada a tod@s, pois conseguimos uma vez mais o nosso propósito: dar mais um passo pela saúde mental, com um momento de gargalhadas, convívio, natureza, mar e exercício físico. Os melhores ingredientes sem dúvida, e que foram bem misturados com a presença dos nossos padrinhos Pedro Guedes e Kelly Baron, que nos brindaram com a sua alegria e inspiração motivacional durante toda a caminhada! Obrigada uma vez mais pela vossa presença! Para o ano há mais!!!'        
        },
        {
            id: Math.random().toString(16).slice(2),
            title: "Resumo dos nossos 10 anos",
            date: "09/07/2023", 
            img: ["/eventos/evt1.jpeg"], 
            href: "https://www.facebook.com/watch/?v=1328779111051533&extid=NS-UNK-UNK-UNK-IOS_GK0T-GK1C&ref=sharing&mibextid=WC7FNe", 
            desc: "Um pequeno resumo dos nossos 10 anos... Muito muito pequeno, pois temos tantas outras memórias, tantas outras histórias, tantas tantas..."
        },
        {
            id: Math.random().toString(16).slice(2),
            title: "Clube social - Visita ao espetáculo Spiritus",
            date: "18/04/2023", 
            img: ["/eventos/18_04_2023/main.jpg"], 
            href: "https://www.facebook.com/agirarassociacao/posts/pfbid0a6Hrcp8dx9VqSxMJKeLptU5AxSYGtLXTf3AE3UgCFsXqfsoK3eFSDmbVVgHXkL3nl", 
            desc: 'Spiritus é um espetáculo imersivo na Igreja dos Clérigos na cidade do Porto. E mais uma vez os nossos utentes foram vivenciar esta experiência única com jogo de luz, música, lasers e efeitos visuais que nos transporta numa viagem sensorial ….'        
        },
        {
            id: Math.random().toString(16).slice(2),
            title: "Segunda atividade do nosso 10º aniversário",
            date: "11/03/2023", 
            img: ["/eventos/evt2.jpg"], 
            href: "https://m.facebook.com/story.php?story_fbid=pfbid0xA1oSZ7zW66935PzLvwoRkLCtBGjArUBoaVhoRr7VfGFrBKrAhsUP1CXpTvSLh6jl&id=100069330174307&mibextid=WC7FNe", 
            desc: "E hoje tivemos a nossa segunda atividade incluída nas comemorações do nosso 10 aniversário! Foi uma tarde de sorrisos, gargalhadas, mas acima de tudo de partilha! Obrigada a todos os presentes pelo apoio e por nos ajudarem a crescer! E muito obrigada à Mais Feliz Associação e ao Fernando Batista pela animação e pela mensagem! Muito importante percebemos que a forma como nos mexemos e comunicamos com o corpo influencia o outro, mas mais do que isso, influencia-nos, motiva-nos, empodera-nos! Sejamos mais sorridentes, mais felizes, mais positivos pela nossa saúde mental!"
        },
        {
            id: Math.random().toString(16).slice(2),
            title: "Passeio no Porto",
            date: "06/02/2023", 
            img: ["/eventos/evt3.jpg"], 
            href: "https://www.facebook.com/agirarassociacao/posts/pfbid0MW7Wd1caiJe1yW2fz9jWhpf2n9Vjmr2PDuRKdBSsAzSMPBD1jnpMHBVX2osqrHY3l", 
            desc: "Na última sexta feira fomos passear... o ponto de encontro foi na torre dos Clérigos e de seguida realizámos uma caminhada até à Alfândega do Porto. Fomos assistir a um espetáculo imersivo: O “Porto Legends, the Underground Experience”. Tratou-se de uma experiência audiovisual 360º. Fomos admirar e conhecer mais da Invicta, através das suas histórias e lendas. As atividades na comunidade revestem-se de grande importância pois promovem as relações interpessoais e as competências sociais."
        },
        {
            id: Math.random().toString(16).slice(2),
            title: "Jantar de Reis 2023 ",
            date: "06/01/2023", 
            img: ["/eventos/06_01_2023/main.jpg"], 
            href: "https://www.facebook.com/agirarassociacao/posts/pfbid0MfBDxbcmvuCxBzzQH55R5DtTQGCcj1VfFuu2245wga3d7E88PKEG8S9HosL15sMul", 
            desc: "Um jantar recheado de sorrisos, comida e boa companhia"
        },
        {
            id: Math.random().toString(16).slice(2),
            title: "Clube social – Visita ao Mercado do Bolhão",
            date: "29/11/2022", 
            img: ["/eventos/29_11_2022/main.jpg"], 
            href: "https://www.facebook.com/agirarassociacao/posts/pfbid02QGDNLuA2Gd8ZhdYusx6ApNHbQzYFem9VzLyYDSXBnFrBbAHXWYG8KYKF7aKbeT2jl", 
            desc: "Fomos visitar o Mercado do Bolhão e ainda tivemos tempo para conhecer mais um pouco da cidade do Porto. Aproveitámos a bela tarde de Outono e não nos esquecemos de comer umas boas castanhas."
        },
        {
            id: Math.random().toString(16).slice(2),
            title: "Participação nas Jornadas de Saúde Mental",
            date: "14/10/2022", 
            img: ["/eventos/14_10_2022/main.jpg"], 
            href: "https://www.facebook.com/agirarassociacao/posts/pfbid0MnpeC266ke3zBF8HGjn8hf8ekzW5XkCQzzuJ3SQngPd4BNxbUuJhEac5bS7dunKCl", 
            desc: 'E hoje participamos nas I Jornadas de Saúde Mental, que decorreram no Auditório do Parque Biológico de Gaia. A nossa Vice Presidente Fernanda Castro dividiu o painel "Saúde Mental - Que futuro? Respostas na comunidade"! com entidades que partilham connosco o trabalho, a experiência, os sonhos, as angústias e as pequenas vitórias!'
        },
        {
            id: Math.random().toString(16).slice(2),
            title: "Caminhada - Prémio da equipa mais numerosa",
            date: "21/10/2022", 
            img: ["/eventos/evt5.jpg"], 
            href: "https://www.facebook.com/story.php?story_fbid=pfbid0nyiyekYTdcpNodtFpiSfE6Su8QR8Jnav4G6PEeKuEnhEZDQUKUZ4cMN4buhHLEfSl&id=100069330174307&mibextid=WC7FNe&paipv=0&eav=AfZp3TeQnF2vjAa-xDl0YejozCATF85fbT0XRWO8q94uwy39YoyV8lqG__moc80QJm8&_rdr", 
            desc: "Os nossos utentes e familiares participaram em equipa na Caminhada tendo escolhido o nome “ Os amigos da Agirar”. Foi-lhes atribuído o prémio da equipa mais numerosa! Muitos parabéns!"
        },
        {
            id: Math.random().toString(16).slice(2),
            title: "Ubuntu fest",
            date: "15/10/2022", 
            img: ["/eventos/evt6.jpg"], 
            href: "https://www.facebook.com/story.php?story_fbid=pfbid02EFDRWMLBRSRw8u6kQKMM88WFjuU3wWTFvKTe5LphdEQCpJiWKGjVxiMTL2YNSX2sl&id=100069330174307&mibextid=WC7FNe&paipv=0&eav=Afa1TAhLD93UrnPRP3P0fxqPbhrYRgEylWFstBFT30tD1rBSf38iR635QmzgzMzBr-0&_rdr", 
            desc: 'E na continuidade do espírito colaborativo, hoje participamos no Ubuntu fest, no seminário alusivo ao tema "Relaciono-me, logo cuido(me) - contributos Ubuntu para a promoção de bem estar e saúde mental nas escolas e cidades". A nossa vice presidente Fernanda Castro partilhou a nossa experiência com utentes, familiares e comunidade. Partilhando esperança e motivação com as colegas de mesa Dra. Helena Coutinho - Equipa Multidisciplinar para a Economia Social Dra. Silvia Campos - S¡M somos capazes! Porque juntos somos mais fortes! E só existimos na presença do outro! Ao serviço do outro!'
        },
        {
            id: Math.random().toString(16).slice(2),
            title: 'VI Caminhada "Um passo pela saúde mental" - Inscrições abertas',
            date: "26/09/2022", 
            img: ["/eventos/evt7.jpg"], 
            href: "https://www.facebook.com/story.php?story_fbid=pfbid02EXVDYYnbkH57dPwHT4KqgvLt3CboKHpbLf3WEkhp48rqviiVGHkLpzo9ePpEEW7Vl&id=592526237554451&mibextid=WC7FNe&paipv=0&eav=AfbW3LX9ZUoxZ4J_llb4K19AcjkRqqh4T0XnGz0Vo0LVGDkFoZGWtTbr3O8qvoSABbQ&_rdr", 
            desc: 'Abrimos então as inscrições para a nossa VI Caminhada "Um passo pela saúde mental". Inscreva-se, partilhe, convide um amigo! Não vão querer perder esta edição!!! Temos a novidade da participação em Equipas (com prémios)!! Venha participar e ajude-nos a crescer!! Inscreva-se aqui: https://forms.gle/mq9tGC79p8oM1nZf8  (antes de terminar a inscrição leia o regulamento e aceite o desafio de participar em Equipa).'
        },
        {
            id: Math.random().toString(16).slice(2),
            title: "Clube Social – Passeio na praia",
            date: "09/05/2022", 
            img: ["/eventos/09_05_2022/main.jpg"], 
            href: "https://www.facebook.com/agirarassociacao/posts/pfbid02DzoPHxLkoVH5CtPgg6UV91j4b5VTPgKerjkj23Yy8sfVWRVYhRZ4qawCBHnSDePal", 
            desc: 'Hoje a tarde foi diferente … um passeio muito agradável '
        },
        {
            id: Math.random().toString(16).slice(2),
            title: "Grupo de Ajuda Mútua",
            date: "02/05/2022", 
            img: ["/eventos/evt8.jpg"], 
            href: "https://www.facebook.com/story.php?story_fbid=pfbid035cNovvrgKoQ7qrAYL6qyPwaNNCiAwcLzK9WpU3XU5A7Gc5Rg2hRQbBb3m7nubaosl&id=592526237554451&mibextid=WC7FNe&paipv=0&eav=Afbpy6m6Y7WrH2-rRowBUbqm_jpJi9jWVKsXumlFf4XPy_wqhWjPGcbMJuIsj9DPFGQ&_rdr", 
            desc: 'Hoje decorreu nas nossas instalações mais um Grupo de Ajuda Mútua. Relembramos que este grupo é mensal. Se é associado venha estar connosco e partilhar a sua vivência com outros familiares!'
        },
        {
            id: Math.random().toString(16).slice(2),
            title: "Decoração Natalícia",
            date: "21/12/2021", 
            img: ["/eventos/evt9.jpg"], 
            href: "https://www.facebook.com/watch/?v=1067910190633173&extid=NS-UNK-UNK-UNK-IOS_GK0T-GK1C&ref=sharing&mibextid=WC7FNe", 
            desc: "Este ano os nossos utentes dedicaram várias horas a fazer pequenos enfeites para serem vendidos na feirinha de Natal. Contudo, a pandemia não permitiu a realização da mesma. Se quiser pode adquirir as peças e desta forma ajudar a associação! São valores simbólicos, para produtos que simbolizam muito mais. Simbolizam amor, dedicação e empenho na sua realização. Mas também solidariedade, estima e apoio com a sua aquisição! Ajude-nos a crescer!"
        },
        {
            id: Math.random().toString(16).slice(2),
            title: "Jornal O Gaiense",
            date: "24/10/2021", 
            img: ["/eventos/evt10.jpg"], 
            href: "https://www.facebook.com/story.php?story_fbid=pfbid04gkpUdSZXCgAehxTjmqAGqmLLtsgRxMDmyANQRqbfu7sNRyu36bhudFR7vNGWdSPl&id=592526237554451&mibextid=WC7FNe&paipv=0&eav=AfZ1VXb_XuXEN0_6bOxpS8cI7y34c87llHsi-VV1OUpLbaglyPWiymz5lQOJrBA6To0&_rdr", 
            desc: 'A edição de ontem do Jornal O Gaiense publicou um artigo sobre a Caminhada “Um Passo pela Saúde Mental “ e referiu os objetivos principais da AGIRAR. Obrigada aos participantes e a todos os que de algum modo contribuíram para que este evento fosse um sucesso.'
        },
        {
            id: Math.random().toString(16).slice(2),
            title: "V Caminhada",
            date: "17/10/2021", 
            img: ["/eventos/evt12.jpg"], 
            href: "https://www.facebook.com/watch/?v=1706112992919939&extid=NS-UNK-UNK-UNK-IOS_GK0T-GK1C&ref=sharing&mibextid=WC7FNe", 
            desc: "E retomamos a nossa caminhada após a pandemia que atravessamos! E uma coisa constatamos: as saudades que tínhamos de estar juntos! Queremos agradecer a todos a participação e o apoio! Ultrapassamos as 120 inscrições!!! Quer isto dizer que para o ano temos que superar!!! Contamos convosco?"
        },
        {
            id: Math.random().toString(16).slice(2),
            title: "Visita da Vereadora Dra Marina Mendes",
            date: "10/05/2021", 
            img: ["/eventos/evt11.jpg"], 
            href: "https://www.facebook.com/story.php?story_fbid=pfbid0fpwjm24RgUiru1mnT3PTbtnvccU6cEP2kB1E7ZcJb5a7KTZ8aiZCU1cnKCAWFXtCl&id=592526237554451&mibextid=WC7FNe&paipv=0&eav=AfZlgPx0GUiRRkIPLkgag0QUpz6VLjI5CjM_JsOENIUoUR8Sz9lSOdxZqGvgWGZlh4Y&_rdr", 
            desc: "A Vereadora Dra Marina Mendes veio fazer uma visita à AGIRAR: Acordo de colaboração - Fundo de emergência Covid-19 -Apoio às Associações locais IPSS’S do Concelho. O NOSSO OBRIGADA"
        },
        {
            id: Math.random().toString(16).slice(2),
            title: "Dia Mundial da Saúde Mental",
            date: "10/10/2020", 
            img: ["/eventos/evt13.jpg"], 
            href: "https://www.facebook.com/story.php?story_fbid=pfbid02uJn7nhJpSsMT1gM92vT6t8DraG5ZBhYjQ41qvkEdR744E1PmxQbBRHKJobzxjch5l&id=592526237554451&mibextid=WC7FNe&paipv=0&eav=AfZBs8EpjXU9ycI_gxUieMvR3m8AqpUHxmyR6igTepd_DSpgJKg0N7RD3yfXq0V--mo&_rdr", 
            desc: "10 de Outubro 2020 - Dia Mundial da Saúde Mental Este ano o mote é mais investimento e melhor acesso aos cuidados de saude mental! Os nossos utentes foram visitar o Zoo... e foi mais uma iniciativa de promoção da saúde mental."
        },
        {
            id: Math.random().toString(16).slice(2),
            title: "Feirinha de Natal",
            date: "14/12/2019", 
            img: ["/eventos/evt14.jpg"], 
            href: "https://www.facebook.com/story.php?story_fbid=pfbid024LmdPZ4k34cwRHSNdXZj49ULX3Zje9f83mAmUJpMci96E5LKojdRMN6sYtN7PqhCl&id=592526237554451&mibextid=WC7FNe&paipv=0&eav=Afb_ruDknp2MPB9k2Nof2ev66LfYaq5NYRc12pO5E90gF6stTP6E4dZ-zIdg942F8mU&_rdr", 
            desc: "Vamos mais uma vez estar mais perto de si neste Natal! Pode visitar-nos e fazer aquela compra que quer oferecer a algum amigo! Estamos até ao dia 20 de Dezembro na Consulta  Externa do Serviço de Psiquiatria do Centro Hospitalar de Vila Nova de Gaia/Espinho. Venha fazer compras Solidárias!"
        },
        {
            id: Math.random().toString(16).slice(2),
            title: "IV Caminhada",
            date: "28/10/2019", 
            img: ["/eventos/evt15.jpg"], 
            href: "https://www.facebook.com/story.php?story_fbid=pfbid02ZahBXYhprBCnPjtE8mL9NEaCWTXEDZChBTP77TuyrkBhMBW3oZ14HyXmGY5kJETCl&id=592526237554451&mibextid=WC7FNe&paipv=0&eav=AfYjkFaozEU2Py1VWP6cS0fF1zLwYUPxoXhERU5Z_HackdA2CYqO1q6ikXOf9B19Oe4&_rdr", 
            desc: "Este ano demos mais “ Um Passo pela Saúde Mental”! IV Caminhada - se não conseguiu participar inscreva-se para o ano e venha caminhar connosco!"
        },
        {
            id: Math.random().toString(16).slice(2),
            title: "III Caminhada - Um Passo pela Saúde Mental",
            date: "19/10/2018", 
            img: ["/eventos/evt16.jpg"], 
            href: "https://www.facebook.com/story.php?story_fbid=pfbid02PEhBqKq8E7W8uFGwg2TJvfZcuXtpAwDy2BnnuMQ5hHumQ6Be3nPzsCdhTrXRepFPl&id=592526237554451&mibextid=WC7FNe&paipv=0&eav=Afali5a0542gjFXSeSIUpExz5niUC75vpJeC3Y09kGjMM822DstbQau5PJunveNxOWo&_rdr", 
            desc: "Queremos agradecer a todos os utentes, familiares e amigos da Associação AGIRAR pela sua participação  no último sábado, dia 13 de Outubro. Um agradecimento especial ao Marco Ramos, Luis Fernandes e Diogo Magano que mais uma vez animaram a nossa Caminhada com música e muito movimento! A todos o que de algum modo contribuíram para que este evento se realizasse o nosso Obrigada."
        },
        {
            id: Math.random().toString(16).slice(2),
            title: 'II Caminhada AGIRAR - "Um Passo pela Saúde Mental"',
            date: "17/11/2017", 
            img: ["/eventos/evt17.jpg"], 
            href: "https://www.facebook.com/watch/?v=1033479963459074&extid=NS-UNK-UNK-UNK-IOS_GK0T-GK1C&ref=sharing&mibextid=WC7FNe", 
            desc: 'No dia 14 de Outubro realizou-se a II Caminhada AGIRAR - "Um Passo pela Saúde Mental" onde contamos com a presença de muitos Associados, Utentes, Familiares e Amigos. O seguinte vídeo foi realizado pelos utentes que frequentam o atelier de informática, sendo Francisco Elias o principal responsável, não só pela edição de vídeo como pela gravação das imagens. Agradecemos mais uma vez a vossa presença e desfrutem deste vídeo.'
        },
        {
            id: Math.random().toString(16).slice(2),
            title: "Concerto Solidário a favor da AGIRAR",
            date: "01/11/2017", 
            img: ["/eventos/evt22.jpg"], 
            href: "https://www.facebook.com/story.php?story_fbid=pfbid02nWri1fyjpQWn8XiNXCWvTEqkPuQu89Neha4bdVxwjBriBdkg8U1n7rYRb9op1LsHl&id=592526237554451&mibextid=WC7FNe&paipv=0&eav=AfaTcy31YE6FeLIvsVoe5nShpYk7NvcPtJpG50DvWJYjY72lgCaXKsBC6ZhNnkmE-t4&_rdr", 
            desc: "Decorreu a 29 de Outubro o Concerto Solidário a favor da AGIRAR! Os artistas participantes - Coro Juvenil de Gaia, Pianista Nuno Caçote, Tuna Feminina de Medicina do Porto, Coro ECCOS - Ensemble Vocal e Alta Mentes proporcionaram-nos uma tarde musical inesquecível! A solidariedade de todos fez a diferença!  O nosso Muito Obrigado."
        },   
        {
            id: Math.random().toString(16).slice(2),
            title: "Dia Mundial da Saúde Mental",
            date: "10/10/2017", 
            img: ["/eventos/evt18.jpg"], 
            href: "https://www.facebook.com/story.php?story_fbid=pfbid0vTBN195xL7PZZnGoqNNx3hm115rqg5gqJkEuXqZEFm2NwuFmLhipkqHRwaGeookDl&id=592526237554451&mibextid=WC7FNe&paipv=0&eav=Afbn_qo-HpbNlTUoUSDe8lqkSVTkbSInOMoKgRUYYy8RmrAIwxTRn0ElUxGjHiVs6nc&_rdr", 
            desc: "Hoje, dia 10 de Outubro comemora-se o Dia Mundial da Saúde Mental. E os utentes do Atelier de Artes Plásticas realizaram este trabalho para participarem na exposição organizada pelo Serviço de Psiquiatria e Saúde Mental do Centro Hospitalar de Vila Nova de Gaia."
        },
        {
            id: Math.random().toString(16).slice(2),
            title: 'Caminhada "Um Passo pela Saúde Mental"',
            date: "17/09/2017", 
            img: ["/eventos/evt19.jpg"], 
            href: "https://www.facebook.com/agirarassociacao/photos/a.651721554968252/1002579703215767/?type=3&mibextid=WC7FNe", 
            desc: 'Integrado nas Comemorações do Dia Mundial de Saúde Mental vai decorrer este ano novamente a Caminhada " Um Passo pela Saúde Mental". Participe e traga um amigo! Inscreva-se!'
        },
        {
            id: Math.random().toString(16).slice(2),
            title: "4ª Edição do Torneio de Futsal Inclusivo pela Saúde Mental",
            date: "27/05/2017", 
            img: ["/eventos/evt20.jpg"], 
            href: "https://www.facebook.com/story.php?story_fbid=pfbid02PJWroBc8sx8P6NS3aWFDdDN2hSG3ygC5Vfm1CziAkg6W3HYehwWsH2TNg3RGnhMbl&id=592526237554451&mibextid=WC7FNe&paipv=0&eav=AfbUIXyNZT82l2Smgn3hk0r1LtvX1IKOFikecr6vKClsbIPVkDL_hqu-6Ahn8Bzbx5o&_rdr", 
            desc: 'Decorreu hoje a 4ª Edição do Torneio de Futsal Inclusivo pela Saúde Mental - "Fintar o Estigma" organizado pela Associação Nova Aurora. A AGIRAR participou levando uma equipa constituída por utentes, associados e equipa técnica. Passamos um dia muito agradável e até o sol nos veio dar as boas vindas!'
        },
        {
            id: Math.random().toString(16).slice(2),
            title: 'Caminhada "Um Passo pela Saúde Mental"',
            date: "31/10/2016", 
            img: ["/eventos/evt21.jpg"], 
            href: "https://www.facebook.com/agirarassociacao/photos/a.592535407553534/812045528935853/?type=3&mibextid=WC7FNe", 
            desc: "O sorteio da refeição no valor de 30 € já se realizou e o contemplado foi o Sr Bernardino, inscrição n. 75! Deve reclamar o seu prémio durante o mês Novembro, de contrário o mesmo irá para o 2° sorteado."
        },
         
    ]
    return num? list.slice(0, num): list 
}