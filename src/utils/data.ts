import Frontend from "../assets/frontend.svg"
import Backend from "../assets/backend.svg"
import Tools from "../assets/tools.svg"
import Soft from "../assets/softskills.svg"

export const SKILLS  = [
    {
        title: "Frontend",
        icon: Frontend,
        skills: [
            {skill:"HTML5", percentagem: "100%"},
            {skill:"CSS3", percentagem:"100%"},
            {skill:"JavaScript", percentagem:"100%"},
            {skill:"ReactJS", percentagem:"80%"},
        ],
    },
    {
        title:"Backend",
        icon: Backend,
        skills: [
            {skill:"NodeJS", percentagem:"90%"},
            {skill:"ExpressJS", percentagem:"100%"},
            {skill:"Java", percentagem:"80%"},
        ],
    },
    {
        title: "Tools",
        icon: Tools,
        skills: [
            {skill:"Git & GitHub", percentagem:"100%"},
            {skill:"VSCODE", percentagem:"100%"},
            {skill:"Docker", percentagem:"80%"}
        ],
    },
    {
        title: "Soft Skills",
        icon: Soft,
        skills: [
            {skill:"Problem-solved", percentagem:"100%"},
            {skill:"Collaboration", percentagem:"100%"},
            {skill:"Communication", percentagem:"80%"},
        ],
    },
]

export const WORK_EXPERIENCE = [
    {
        title: "Engenheiro RIS/PACS",
        date: "outubro de 2023 - dezembro de 2024",
    responsibilities:[
        "Atuei como Jovem Aprendiz em desenvolvimento e sustentação de um produto de radiologia, utilizando métodos ágeis e práticas do ITIL",
        "Colaborei com diversas áreas, incluindo desenvolvimento, gestão de mudanças e sustentação, adquirindo uma visão holística do produto.",
        "Desenvolvi scripts em Python para automatizar consultas SQL.",
        "Acessei servidores via SSH para construir imagens Docker no ambiente Linux.",
        "Atualizei a documentação de troubleshooting do projeto utilizando Git.",
        "Criei e organizei o repositório para a transição de projetos RIS/PACS no Azure DevOps.",
        "Desenvolvi testes unitários com Jest no framework NestJS."
    ],
    },
    {
        title: "Barbearia",
        date: "Janeiro de 2024 - março de 2024",
        responsibilities:[
            "Desenvolvi uma solução para uma barbearia utilizando Next.js, centralizando todos os serviços em um site. A solução permitia que usuários autenticados agendassem seus serviços de forma prática. Para isso, utilizei plataformas em nuvem como o Google Cloud Platform (GCP) para autenticação e a Vercel para integração e entrega contínua (CI/CD).",
        ],
    },
    {
        title: "Loja de albuns (Bootcamp Sysmap)",
        date: "abril de 2024 - maio de 2024",
        responsibilities: [
            "Durante o bootcamp, desenvolvi uma aplicação full-stack utilizando Java com Spring Framework no back-end e React.js no front-end, integrando a API do Spotify para consumo de seus serviços. A documentação completa dos endpoints foi elaborada com Swagger. Inicialmente, o projeto foi implementado localmente e, após um mês de desenvolvimento intenso, migrei a aplicação para a AWS. Atualmente, ela está hospedada em uma instância EC2, com o banco de dados gerenciado pela Amazon RDS. O build do front-end foi realizado com Vite, e a aplicação utiliza containers Docker para facilitar o deploy e garantir escalabilidade."
        ],
    }

]