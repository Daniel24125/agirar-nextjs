
export type TServicos = {
    id: string, 
    img: string[], 
    title: string, 
    desc: string,
    time: string, 
    day: string
}


export const servicosUtente: TServicos[] = [
    {
        id: Math.random().toString(16).slice(2),
        img: ["https://images.pexels.com/photos/1267697/pexels-photo-1267697.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"],
        title: "Fórum a Tema",
        desc: "Atividade em grupo que oferece aos utentes um espaço de diálogo e aprendizagem, promovendo a partilha do conhecimento e reflexão sobre várias temáticas. Os temas são previamente escolhidos pelos mesmos, garantindo assim, serem abordados assuntos do interesse de todos. Estes, podem variar entre questões do dia-a-dia, literacia em saúde mental, entre outros.",
        time: "14h – 15h",
        day: "Segunda-feira quinzenalmente"
    },
    {
        id: Math.random().toString(16).slice(2),
        img: ["https://images.pexels.com/photos/2897128/pexels-photo-2897128.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"],
        title: "Atelier de crochet",
        desc: "Psicoterapia individual para utentes a frequentar os ateliers",
        time: "14h – 15h",
        day: "Segunda-feira quinzenalmente"
    },
    {
        id: Math.random().toString(16).slice(2),
        img: ["https://images.pexels.com/photos/29484064/pexels-photo-29484064.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"],
        title: "Grupo terapêutico",
        desc: "Atividade em grupo onde são dinamizadas sessões de treino de competências sociais, sessões de reminiscências, comemoração de dias festivos (nacionais/mundiais). Este grupo promove ainda a reflexão coletiva e o fortalecimento de vínculos, ajuda os participantes a compreender e expressar as suas experiências desenvolvendo as suas competências de comunicação.",
        time: "15h30 – 16h30",
        day: "Segunda-feira"
    },
    {
        id: Math.random().toString(16).slice(2),
        img: ["https://images.pexels.com/photos/546819/pexels-photo-546819.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"],
        title: "Atelier de Informática ",
        desc: "Atividade em grupo, cujo objetivo é aumentar as competências digitais de utentes, promovendo a interação social dos envolvidos e fomentar a confiança na utilização de ferramentas digitais",
        time: "Terça-feira",
        day: "14h – 15h"
    },
    {
        id: Math.random().toString(16).slice(2),
        img: ["https://images.pexels.com/photos/6926681/pexels-photo-6926681.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"],
        title: "Atelier de Movimento e Expressão Corporal",
        desc: "Espaço criado para valorizar a comunicação não verbal, permitindo observar o modo como cada pessoa se relaciona com o seu corpo, com o seu espaço e com os restantes elementos do grupo. Processo criativo onde se trabalha com o corpo e com a sua linguagem própria",
        time: "14:30 - 15:45",
        day: "Qui."
    },
    {
        id: Math.random().toString(16).slice(2),
        img: ["https://images.pexels.com/photos/339619/pexels-photo-339619.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"],
        title: "Terapia Ocupacional em Manualidades",
        desc: "Atividade em grupo dirigida ao desenvolvimento de competências motoras finas como corte, colagem e pintura, utilizando atividades manuais baseadas nos princípios da terapia ocupacional. Esta abordagem visa ainda, melhorar a coordenação motora, estimular a criatividade e aumentar a autonomia dos utentes em atividades de vida diária.",
        time: "15h30 – 16h30",
        day: "Terça-feira"
    },
 
    {
        id: Math.random().toString(16).slice(2),
        img: ["https://images.pexels.com/photos/6926681/pexels-photo-6926681.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"],
        title: "Atelier de Movimento e Expressão Corporal",
        desc: "Atividade em grupo, cujo objetivo passa por valorizar a comunicação não verbal, permitindo observar o modo como cada pessoa se relaciona com o seu corpo, com o seu espaço e com os restantes elementos do grupo. Pretende-se ainda promover a atividade física, o equilíbrio, a mobilidade articular, a amplitude de movimento e a coordenação motora.",
        time: "15h30 – 16h30",
        day: "Quarta-feira"
    },
    {
        id: Math.random().toString(16).slice(2),
        img: ["https://images.pexels.com/photos/235990/pexels-photo-235990.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"],
        title: "Sessão de Relaxamento",
        desc: "Atividade em grupo onde através da técnica do Relaxamento Progressivo de Jacobson, potencia-se a diminuição das tensões corporais e a auto-consciencialização das várias partes do corpo. Tendo em conta tratar-se de um relaxamento muscular, os utentes tornam-se capazes de o realizar sozinhos, em situações de maior stress, no seu quotidiano.",
        time: "16h30 – 17h30",
        day: "Quarta-feira"
    },
    {
        id: Math.random().toString(16).slice(2),
        img: ["https://images.pexels.com/photos/1193743/pexels-photo-1193743.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"],
        title: "Atelier de Artes Plásticas e Lavores",
        desc: "Atividade em grupo que pretendem contribuir para um aumento da criatividade e imaginação, enquanto se utilizam técnicas de reaproveitamento, reutilização e reciclagem de materiais. Os produtos finais destinam-se aos próprios utentes, familiares ou então, para a realização de vendas solidárias de angariação de fundos para a Associação.",
        time: "14h30 – 16h",
        day: "Quinta-feira"
    },
    {
        id: Math.random().toString(16).slice(2),
        img: ["https://images.pexels.com/photos/3852577/pexels-photo-3852577.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"],
        title: "Atelier de Estimulação cognitiva",
        desc: "Atividade em grupo, cujo objetivo é preservar ou melhorar o desempenho ou as funções cognitivas dos utentes, nomeadamente a memória, a atenção, o raciocínio, a capacidade de resolução de problemas, entre outras.",
        time: "15h30 – 16h30",
        day: "Sexta-feira"
    },
    {
        id: Math.random().toString(16).slice(2),
        img: ["https://images.pexels.com/photos/1250346/pexels-photo-1250346.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"],
        title: "Clube Social",
        desc: "Espaço lúdico, de encontro, onde se promove uma melhor forma de gerir os tempos livres e de lazer organizando visitas na comunidade para melhor conhecer as estruturas culturais e recreativas existentes na área metropolitana do Porto, nomeadamente museus, jardins, teatros, etc. Estas atividades têm como principal objetivo promover a integração do grupo, combater a exclusão social e o estigma associado à patologia. ",
        time: "15h – 18h",
        day: "Sexta-feira, mensalmente"
    },
    {
        id: Math.random().toString(16).slice(2),
        img: ["https://images.pexels.com/photos/4101143/pexels-photo-4101143.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"],
        title: "Atendimento individual",
        desc: "Sessões individuais, cuja periodicidade para cada utente varia de acordo com as suas necessidades e objetivos individuais. Tome-se como exemplo a realização de atividades como a gestão e a realização de compras, a gestão do dinheiro, a utilização de transportes, partilha de estratégias de regulação, ajuda no processo de reintegração social e laboral, entre outras.",
        time: "16h30 – 17h30",
        day: "Segunda, Terça e Sexta-feira"
    },
]


export const servicosFamiliar: TServicos[] = [
    {
        id: Math.random().toString(16).slice(2),
        img: ["https://images.pexels.com/photos/1072824/pexels-photo-1072824.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"],
        title: "Espaço do Cuidador",
        desc: "Atendimento quinzenal, presencial e individualizado dirigido ao Associado/Cuidador. Pretende-se disponibilizar apoio a várias questões do dia-a-dia, dúvidas relacionadas com a doença, todas as temáticas que lhe estão associadas e respetivo encaminhamento para outras instituições/serviços, sempre que necessário. As entrevistas são com agendamento prévio e têm a duração de 30 minutos.",
        time: "15h – 16h30",
        day: "Segunda-feira, quinzenalmente"
    },
    {
        id: Math.random().toString(16).slice(2),
        img: ["https://images.pexels.com/photos/461049/pexels-photo-461049.jpeg?auto=compress&cs=tinysrgb&w=600"],
        title: "Grupo de Ajuda Mútua",
        desc: "Este grupo tem como principal objetivo promover a aproximação e partilha de experiências, conhecimentos e preocupações em relação à doença identificando estratégias que permitam ganhos de saúde e redução do stress associado ao cuidar de alguém com doença. O grupo é ainda um facilitador de interação social entre os vários participantes. Dirigido essencialmente para cuidadores de pessoas com Psicose.",
        time: "18h",
        day: "1ª segunda feira de cada mês"
    },
    {
        id: Math.random().toString(16).slice(2),
        img: ["https://images.pexels.com/photos/39691/family-pier-man-woman-39691.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"],
        title: "Atendimento às Famílias",
        desc: "Entrevistas a familiares de utentes inseridos nos vários ateliers, onde são transmitidas informações relativamente à sua participação e envolvimento nas atividades, bem como fornecidas e discutidas estratégias adequadas às dinâmicas familiares.",
        time: "17h30 – 19h",
        day: "Segunda, Terça e Sexta-feira"
    },
    
]