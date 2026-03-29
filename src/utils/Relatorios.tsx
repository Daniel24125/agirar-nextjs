export type TRelatorio = {
    title: string,
    file: string
}

type TYearData = {
    [key: string]: TRelatorio[]
}

export const relatorios: TYearData = {
    "2023": [
        {
            title: "Plano de ação 2023",
            file: "/relatorios/plano2023.pdf"
        },

        {
            title: "Relatório de atividades 2023",
            file: "/relatorios/atividades2023.pdf"
        },
        {
            title: "Relatório de contas 2023",
            file: "/relatorios/contas2023.pdf"
        },

    ],
    "2024": [
        {
            title: "Plano de ação 2024",
            file: "/relatorios/plano2024.pdf"
        },
        {
            title: "Relatório de atividades 2024",
            file: "/relatorios/atividades2024.pdf"
        },
        {
            title: "Demonstração Financeira 2024",
            file: "/relatorios/demonstracaoFinanceira2024.pdf"
        },
    ],
    "2025": [
        {
            title: "Plano de ação 2025",
            file: "/relatorios/plano2025.pdf"
        },
        {
            title: "Relatório de atividades 2025",
            file: "/relatorios/atividades2025.pdf"
        },
        {
            title: "Demonstração Financeira 2025",
            file: "/relatorios/demonstracaoFinanceira2025.pdf"
        },
        {
            title: "Anexo da Demonstração Financeira 2025",
            file: "/relatorios/anexoDemonstracaoFinanceira2025.pdf"
        },
    ],
    "2026": [
        {
            title: "Plano de ação 2026",
            file: "/relatorios/plano2026.pdf"
        },
    ]
}