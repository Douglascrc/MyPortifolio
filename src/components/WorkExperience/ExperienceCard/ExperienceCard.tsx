import "./ExperienceCard.css"

interface ExperienceDetails {
    title: string;
    date: string;
    responsibilities: string[];
}

const ExperienceCard = ({details}: {details:ExperienceDetails}) => {
    return ( 
        <div className="work-experience-card bg-[#130f2a] rounded-lg border border-[#6751b9] p-6 m-4">
            <h6 className="text-lg font-medium mb-2">{details.title}</h6>

            <div className="work-duration inline-block text-sm font-normal rounded-md p-2 mb-4 bg-[#6751B9]/50">{details.date}</div>

            <ul>
                {details.responsibilities.map((item) => (
                   <li className="relative list-none font-normal text-lg after:w-2  after:h-2 after:bg-[#6751b0] after:rounded-lg after:absolute after:top-3 after:ml-2 after:-left-5" key={item}>{item}</li> 
                ))}
            </ul>
        </div>
     );
}
 
export default ExperienceCard;