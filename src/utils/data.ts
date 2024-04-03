import Frontend from "../assets/frontend.svg"
import Backend from "../assets/backend.svg"
import Tools from "../assets/tools.svg"
import Soft from "../assets/softskills.svg"

export const SKILLS  = [
    {
        title: "Frontend",
        icon: Frontend,
        skills: [
            {skill:"HTML5", percentagem: "90%"},
            {skill:"CSS3", percentagem:"80%"},
            {skill:"JavaScript", percentagem:"80%"},
            {skill:"ReactJS", percentagem:"60%"},
        ],
    },
    {
        title:"Backend",
        icon: Backend,
        skills: [
            {skill:"NodeJS", percentagem:"70%"},
            {skill:"ExpressJS", percentagem:"60%"},
            {skill:"Java", percentagem:"60%"},
        ],
    },
    {
        title: "Tools",
        icon: Tools,
        skills: [
            {skill:"Git & GitHub", percentagem:"50%"},
            {skill:"VSCODE", percentagem:"60%"},
            {skill:"Docker", percentagem:"60%"}
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
        title: "RIS/PACS systems developer apprentice at Rede D'or",
        date: "October 2023 - Present",
        responsibilities:[
            "Training on the RIS/PACS system and tools such as Docker, updating documentation for Troubleshooting and monitoring RDMs",
        ],
    },
    {
        title: "Barbearia",
        date: "January 2024 - March 2024",
        responsibilities:[
            "Website that offers several different barbershop services, the user is authenticated using OAuth, Google's API, so they can book their service.",
        ],
    },
]