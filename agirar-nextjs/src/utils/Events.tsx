
export type TEvent = {
    id: string, 
    title: string, 
    date: string, 
    img: string[], 
    href: string, 
    desc: string
}

export const getTheLastEvents = (num?:number|undefined) =>{
    const list: TEvent[] = [
        {
            id: "evt1",
            title: "Resumo dos nossos 10 anos",
            date: "09/07/2023", 
            img: ["/eventos/evt1.jpeg"], 
            href: "https://www.facebook.com/watch/?v=1328779111051533&extid=NS-UNK-UNK-UNK-IOS_GK0T-GK1C&ref=sharing&mibextid=WC7FNe", 
            desc: "Um pequeno resumo dos nossos 10 anos... Muito muito pequeno, pois temos tantas outras memórias, tantas outras histórias, tantas tantas..."
        },
        {
            id: "evt2",
            title: "Segunda atividade do nosso 10º aniversário",
            date: "11/03/2023", 
            img: ["/eventos/evt2.jpg"], 
            href: "https://m.facebook.com/story.php?story_fbid=pfbid0xA1oSZ7zW66935PzLvwoRkLCtBGjArUBoaVhoRr7VfGFrBKrAhsUP1CXpTvSLh6jl&id=100069330174307&mibextid=WC7FNe", 
            desc: "E hoje tivemos a nossa segunda atividade incluída nas comemorações do nosso 10 aniversário! Foi uma tarde de sorrisos, gargalhadas, mas acima de tudo de partilha! Obrigada a todos os presentes pelo apoio e por nos ajudarem a crescer! E muito obrigada à Mais Feliz Associação e ao Fernando Batista pela animação e pela mensagem! Muito importante percebemos que a forma como nos mexemos e comunicamos com o corpo influencia o outro, mas mais do que isso, influencia-nos, motiva-nos, empodera-nos! Sejamos mais sorridentes, mais felizes, mais positivos pela nossa saúde mental!"
        },
        {
            id: "evt3",
            title: "Passeio no Porto",
            date: "06/02/2023", 
            img: ["/eventos/evt3.jpg"], 
            href: "https://m.facebook.com/agirarassociacao/posts/pcb.502156792105322/?photo_id=502156535438681&mds=%2Fphotos%2Fviewer%2F%3Fphotoset_token%3Dpcb.502156792105322%26photo%3D502156535438681%26profileid%3D1463904108%26eav%3DAfb2jx5PnJ_UN0mJ_JD2UL4uDbO3ntubAZr1jEQmNbumSdxHldQ_dV031XFwFTUIhs0%26paipv%3D0%26source%3D48%26refid%3D52%26__tn__%3DEH-R%26cached_data%3Dfalse%26ftid%3D&mdp=1&mdf=1", 
            desc: "Na última sexta feira fomos passear... o ponto de encontro foi na torre dos Clérigos e de seguida realizámos uma caminhada até à Alfândega do Porto. Fomos assistir a um espetáculo imersivo: O “Porto Legends, the Underground Experience”. Tratou-se de uma experiência audiovisual 360º. Fomos admirar e conhecer mais da Invicta, através das suas histórias e lendas. As atividades na comunidade revestem-se de grande importância pois promovem as relações interpessoais e as competências sociais."
        },
        {
            id: "evt4",
            title: "Decoração Natalícia",
            date: "06/12/2022", 
            img: ["/eventos/evt4.jpg"], 
            href: "https://m.facebook.com/agirarassociacao/posts/pcb.458085006512501/?photo_id=458081096512892&mds=%2Fphotos%2Fviewer%2F%3Fphotoset_token%3Dpcb.458085006512501%26photo%3D458081096512892%26profileid%3D1463904108%26eav%3DAfax56Bp7I6W8r4zWqMFKVHp6QNuAjfrFs0lGH3zYSvT8uqS6vwWyN3c_m6u6aRuCTs%26paipv%3D0%26source%3D48%26refid%3D52%26__tn__%3DEH-R%26cached_data%3Dfalse%26ftid%3D&mdp=1&mdf=1", 
            desc: "A decoração natalícia na entrada das nossas instalações para dar as boas vindas a quem nos visita!"
        },
        {
            id: "evt5",
            title: "Caminhada - Prémio da equipa mais numerosa",
            date: "21/10/2022", 
            img: ["/eventos/evt5.jpg"], 
            href: "https://www.facebook.com/story.php?story_fbid=pfbid0nyiyekYTdcpNodtFpiSfE6Su8QR8Jnav4G6PEeKuEnhEZDQUKUZ4cMN4buhHLEfSl&id=100069330174307&mibextid=WC7FNe&paipv=0&eav=AfZp3TeQnF2vjAa-xDl0YejozCATF85fbT0XRWO8q94uwy39YoyV8lqG__moc80QJm8&_rdr", 
            desc: "Os nossos utentes e familiares participaram em equipa na Caminhada tendo escolhido o nome “ Os amigos da Agirar”. Foi-lhes atribuído o prémio da equipa mais numerosa! Muitos parabéns!"
        },
        {
            id: "evt6",
            title: "Ubuntu fest",
            date: "15/10/2022", 
            img: ["/eventos/evt6.jpg"], 
            href: "https://www.facebook.com/story.php?story_fbid=pfbid02EFDRWMLBRSRw8u6kQKMM88WFjuU3wWTFvKTe5LphdEQCpJiWKGjVxiMTL2YNSX2sl&id=100069330174307&mibextid=WC7FNe&paipv=0&eav=Afa1TAhLD93UrnPRP3P0fxqPbhrYRgEylWFstBFT30tD1rBSf38iR635QmzgzMzBr-0&_rdr", 
            desc: 'E na continuidade do espírito colaborativo, hoje participamos no Ubuntu fest, no seminário alusivo ao tema "Relaciono-me, logo cuido(me) - contributos Ubuntu para a promoção de bem estar e saúde mental nas escolas e cidades". A nossa vice presidente Fernanda Castro partilhou a nossa experiência com utentes, familiares e comunidade. Partilhando esperança e motivação com as colegas de mesa Dra. Helena Coutinho - Equipa Multidisciplinar para a Economia Social Dra. Silvia Campos - S¡M somos capazes! Porque juntos somos mais fortes! E só existimos na presença do outro! Ao serviço do outro!'
        },
        {
            id: "evt7",
            title: 'VI Caminhada "Um passo pela saúde mental" - Inscrições abertas',
            date: "26/09/2022", 
            img: ["/eventos/evt7.jpg"], 
            href: "https://www.facebook.com/story.php?story_fbid=pfbid02EXVDYYnbkH57dPwHT4KqgvLt3CboKHpbLf3WEkhp48rqviiVGHkLpzo9ePpEEW7Vl&id=592526237554451&mibextid=WC7FNe&paipv=0&eav=AfbW3LX9ZUoxZ4J_llb4K19AcjkRqqh4T0XnGz0Vo0LVGDkFoZGWtTbr3O8qvoSABbQ&_rdr", 
            desc: 'Abrimos então as inscrições para a nossa VI Caminhada "Um passo pela saúde mental". Inscreva-se, partilhe, convide um amigo! Não vão querer perder esta edição!!! Temos a novidade da participação em Equipas (com prémios)!! Venha participar e ajude-nos a crescer!! Inscreva-se aqui: https://forms.gle/mq9tGC79p8oM1nZf8  (antes de terminar a inscrição leia o regulamento e aceite o desafio de participar em Equipa).'
        },
        {
            id: "evt8",
            title: "Grupo de Ajuda Mútua",
            date: "02/05/2022", 
            img: ["/eventos/evt8.jpg"], 
            href: "https://www.facebook.com/story.php?story_fbid=pfbid035cNovvrgKoQ7qrAYL6qyPwaNNCiAwcLzK9WpU3XU5A7Gc5Rg2hRQbBb3m7nubaosl&id=592526237554451&mibextid=WC7FNe&paipv=0&eav=Afbpy6m6Y7WrH2-rRowBUbqm_jpJi9jWVKsXumlFf4XPy_wqhWjPGcbMJuIsj9DPFGQ&_rdr", 
            desc: 'Hoje decorreu nas nossas instalações mais um Grupo de Ajuda Mútua. Relembramos que este grupo é mensal. Se é associado venha estar connosco e partilhar a sua vivência com outros familiares!'
        },
        {
            id: "evt9",
            title: "Decoração Natalícia",
            date: "21/12/2021", 
            img: ["/eventos/evt9.jpg"], 
            href: "https://www.facebook.com/watch/?v=1067910190633173&extid=NS-UNK-UNK-UNK-IOS_GK0T-GK1C&ref=sharing&mibextid=WC7FNe", 
            desc: "Este ano os nossos utentes dedicaram várias horas a fazer pequenos enfeites para serem vendidos na feirinha de Natal. Contudo, a pandemia não permitiu a realização da mesma. Se quiser pode adquirir as peças e desta forma ajudar a associação! São valores simbólicos, para produtos que simbolizam muito mais. Simbolizam amor, dedicação e empenho na sua realização. Mas também solidariedade, estima e apoio com a sua aquisição! Ajude-nos a crescer!"
        },
        {
            id: "evt10",
            title: "Jornal O Gaiense",
            date: "24/10/2021", 
            img: ["/eventos/evt10.jpg"], 
            href: "https://www.facebook.com/story.php?story_fbid=pfbid04gkpUdSZXCgAehxTjmqAGqmLLtsgRxMDmyANQRqbfu7sNRyu36bhudFR7vNGWdSPl&id=592526237554451&mibextid=WC7FNe&paipv=0&eav=AfZ1VXb_XuXEN0_6bOxpS8cI7y34c87llHsi-VV1OUpLbaglyPWiymz5lQOJrBA6To0&_rdr", 
            desc: 'A edição de ontem do Jornal O Gaiense publicou um artigo sobre a Caminhada “Um Passo pela Saúde Mental “ e referiu os objetivos principais da AGIRAR. Obrigada aos participantes e a todos os que de algum modo contribuíram para que este evento fosse um sucesso.'
        },
        {
            id: "evt12",
            title: "V Caminhada",
            date: "17/10/2021", 
            img: ["/eventos/evt12.jpg"], 
            href: "https://www.facebook.com/watch/?v=1706112992919939&extid=NS-UNK-UNK-UNK-IOS_GK0T-GK1C&ref=sharing&mibextid=WC7FNe", 
            desc: "E retomamos a nossa caminhada após a pandemia que atravessamos! E uma coisa constatamos: as saudades que tínhamos de estar juntos! Queremos agradecer a todos a participação e o apoio! Ultrapassamos as 120 inscrições!!! Quer isto dizer que para o ano temos que superar!!! Contamos convosco?"
        },
        {
            id: "evt11",
            title: "Visita da Vereadora Dra Marina Mendes",
            date: "10/05/2021", 
            img: ["/eventos/evt11.jpg"], 
            href: "https://www.facebook.com/story.php?story_fbid=pfbid0fpwjm24RgUiru1mnT3PTbtnvccU6cEP2kB1E7ZcJb5a7KTZ8aiZCU1cnKCAWFXtCl&id=592526237554451&mibextid=WC7FNe&paipv=0&eav=AfZlgPx0GUiRRkIPLkgag0QUpz6VLjI5CjM_JsOENIUoUR8Sz9lSOdxZqGvgWGZlh4Y&_rdr", 
            desc: "A Vereadora Dra Marina Mendes veio fazer uma visita à AGIRAR: Acordo de colaboração - Fundo de emergência Covid-19 -Apoio às Associações locais IPSS’S do Concelho. O NOSSO OBRIGADA"
        },
        {
            id: "evt13",
            title: "Dia Mundial da Saúde Mental",
            date: "10/10/2020", 
            img: ["/eventos/evt13.jpg"], 
            href: "https://www.facebook.com/story.php?story_fbid=pfbid02uJn7nhJpSsMT1gM92vT6t8DraG5ZBhYjQ41qvkEdR744E1PmxQbBRHKJobzxjch5l&id=592526237554451&mibextid=WC7FNe&paipv=0&eav=AfZBs8EpjXU9ycI_gxUieMvR3m8AqpUHxmyR6igTepd_DSpgJKg0N7RD3yfXq0V--mo&_rdr", 
            desc: "10 de Outubro 2020 - Dia Mundial da Saúde Mental Este ano o mote é mais investimento e melhor acesso aos cuidados de saude mental! Os nossos utentes foram visitar o Zoo... e foi mais uma iniciativa de promoção da saúde mental."
        },
        {
            id: "evt14",
            title: "Feirinha de Natal",
            date: "14/12/2019", 
            img: ["/eventos/evt14.jpg"], 
            href: "https://www.facebook.com/story.php?story_fbid=pfbid024LmdPZ4k34cwRHSNdXZj49ULX3Zje9f83mAmUJpMci96E5LKojdRMN6sYtN7PqhCl&id=592526237554451&mibextid=WC7FNe&paipv=0&eav=Afb_ruDknp2MPB9k2Nof2ev66LfYaq5NYRc12pO5E90gF6stTP6E4dZ-zIdg942F8mU&_rdr", 
            desc: "Vamos mais uma vez estar mais perto de si neste Natal! Pode visitar-nos e fazer aquela compra que quer oferecer a algum amigo! Estamos até ao dia 20 de Dezembro na Consulta  Externa do Serviço de Psiquiatria do Centro Hospitalar de Vila Nova de Gaia/Espinho. Venha fazer compras Solidárias!"
        },
        {
            id: "evt15",
            title: "IV Caminhada",
            date: "28/10/2019", 
            img: ["/eventos/evt15.jpg"], 
            href: "https://www.facebook.com/story.php?story_fbid=pfbid02ZahBXYhprBCnPjtE8mL9NEaCWTXEDZChBTP77TuyrkBhMBW3oZ14HyXmGY5kJETCl&id=592526237554451&mibextid=WC7FNe&paipv=0&eav=AfYjkFaozEU2Py1VWP6cS0fF1zLwYUPxoXhERU5Z_HackdA2CYqO1q6ikXOf9B19Oe4&_rdr", 
            desc: "Este ano demos mais “ Um Passo pela Saúde Mental”! IV Caminhada - se não conseguiu participar inscreva-se para o ano e venha caminhar connosco!"
        },
        {
            id: "evt16",
            title: "III Caminhada - Um Passo pela Saúde Mental",
            date: "19/10/2018", 
            img: ["/eventos/evt16.jpg"], 
            href: "https://www.facebook.com/story.php?story_fbid=pfbid02PEhBqKq8E7W8uFGwg2TJvfZcuXtpAwDy2BnnuMQ5hHumQ6Be3nPzsCdhTrXRepFPl&id=592526237554451&mibextid=WC7FNe&paipv=0&eav=Afali5a0542gjFXSeSIUpExz5niUC75vpJeC3Y09kGjMM822DstbQau5PJunveNxOWo&_rdr", 
            desc: "Queremos agradecer a todos os utentes, familiares e amigos da Associação AGIRAR pela sua participação  no último sábado, dia 13 de Outubro. Um agradecimento especial ao Marco Ramos, Luis Fernandes e Diogo Magano que mais uma vez animaram a nossa Caminhada com música e muito movimento! A todos o que de algum modo contribuíram para que este evento se realizasse o nosso Obrigada."
        },
        {
            id: "evt17",
            title: 'II Caminhada AGIRAR - "Um Passo pela Saúde Mental"',
            date: "17/11/2017", 
            img: ["/eventos/evt17.jpg"], 
            href: "https://www.facebook.com/watch/?v=1033479963459074&extid=NS-UNK-UNK-UNK-IOS_GK0T-GK1C&ref=sharing&mibextid=WC7FNe", 
            desc: 'No dia 14 de Outubro realizou-se a II Caminhada AGIRAR - "Um Passo pela Saúde Mental" onde contamos com a presença de muitos Associados, Utentes, Familiares e Amigos. O seguinte vídeo foi realizado pelos utentes que frequentam o atelier de informática, sendo Francisco Elias o principal responsável, não só pela edição de vídeo como pela gravação das imagens. Agradecemos mais uma vez a vossa presença e desfrutem deste vídeo.'
        },
        {
            id: "evt22",
            title: "Concerto Solidário a favor da AGIRAR",
            date: "01/11/2017", 
            img: ["/eventos/evt22.jpg"], 
            href: "https://www.facebook.com/story.php?story_fbid=pfbid02nWri1fyjpQWn8XiNXCWvTEqkPuQu89Neha4bdVxwjBriBdkg8U1n7rYRb9op1LsHl&id=592526237554451&mibextid=WC7FNe&paipv=0&eav=AfaTcy31YE6FeLIvsVoe5nShpYk7NvcPtJpG50DvWJYjY72lgCaXKsBC6ZhNnkmE-t4&_rdr", 
            desc: "Decorreu a 29 de Outubro o Concerto Solidário a favor da AGIRAR! Os artistas participantes - Coro Juvenil de Gaia, Pianista Nuno Caçote, Tuna Feminina de Medicina do Porto, Coro ECCOS - Ensemble Vocal e Alta Mentes proporcionaram-nos uma tarde musical inesquecível! A solidariedade de todos fez a diferença!  O nosso Muito Obrigado."
        },   
        {
            id: "evt18",
            title: "Dia Mundial da Saúde Mental",
            date: "10/10/2017", 
            img: ["/eventos/evt18.jpg"], 
            href: "https://www.facebook.com/story.php?story_fbid=pfbid0vTBN195xL7PZZnGoqNNx3hm115rqg5gqJkEuXqZEFm2NwuFmLhipkqHRwaGeookDl&id=592526237554451&mibextid=WC7FNe&paipv=0&eav=Afbn_qo-HpbNlTUoUSDe8lqkSVTkbSInOMoKgRUYYy8RmrAIwxTRn0ElUxGjHiVs6nc&_rdr", 
            desc: "Hoje, dia 10 de Outubro comemora-se o Dia Mundial da Saúde Mental. E os utentes do Atelier de Artes Plásticas realizaram este trabalho para participarem na exposição organizada pelo Serviço de Psiquiatria e Saúde Mental do Centro Hospitalar de Vila Nova de Gaia."
        },
        {
            id: "evt19",
            title: 'Caminhada "Um Passo pela Saúde Mental"',
            date: "17/09/2017", 
            img: ["/eventos/evt19.jpg"], 
            href: "https://www.facebook.com/agirarassociacao/photos/a.651721554968252/1002579703215767/?type=3&mibextid=WC7FNe", 
            desc: 'Integrado nas Comemorações do Dia Mundial de Saúde Mental vai decorrer este ano novamente a Caminhada " Um Passo pela Saúde Mental". Participe e traga um amigo! Inscreva-se!'
        },
        {
            id: "evt20",
            title: "4ª Edição do Torneio de Futsal Inclusivo pela Saúde Mental",
            date: "27/05/2017", 
            img: ["/eventos/evt20.jpg"], 
            href: "https://www.facebook.com/story.php?story_fbid=pfbid02PJWroBc8sx8P6NS3aWFDdDN2hSG3ygC5Vfm1CziAkg6W3HYehwWsH2TNg3RGnhMbl&id=592526237554451&mibextid=WC7FNe&paipv=0&eav=AfbUIXyNZT82l2Smgn3hk0r1LtvX1IKOFikecr6vKClsbIPVkDL_hqu-6Ahn8Bzbx5o&_rdr", 
            desc: 'Decorreu hoje a 4ª Edição do Torneio de Futsal Inclusivo pela Saúde Mental - "Fintar o Estigma" organizado pela Associação Nova Aurora. A AGIRAR participou levando uma equipa constituída por utentes, associados e equipa técnica. Passamos um dia muito agradável e até o sol nos veio dar as boas vindas!'
        },
        {
            id: "evt21",
            title: 'Caminhada "Um Passo pela Saúde Mental"',
            date: "31/10/2016", 
            img: ["/eventos/evt21.jpg"], 
            href: "https://www.facebook.com/agirarassociacao/photos/a.592535407553534/812045528935853/?type=3&mibextid=WC7FNe", 
            desc: "O sorteio da refeição no valor de 30 € já se realizou e o contemplado foi o Sr Bernardino, inscrição n. 75! Deve reclamar o seu prémio durante o mês Novembro, de contrário o mesmo irá para o 2° sorteado."
        },
         
    ]
    return num? list.slice(0, num): list 
}