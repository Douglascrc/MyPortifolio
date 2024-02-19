import './SkillsCard.css'

const SkillCard = ({title,isActive,iconUrl,onclick}:{title:string, isActive:boolean, iconUrl:string, onclick: () => void}) => {
    return ( 
        <div
        className={`skill-card  ${isActive ? "active":""}`}
        onClick={() => onclick()}>

            <div className='skill-icon flex items-center justify-center bg-[#2a2252] rounded-lg border-[#6852ba] absolute -top-4 -left-4'>
                <img className='object-contain' src={iconUrl} alt={title} />
                
            </div>
            <span className='text-xl font-medium'>{title}</span>
        </div>
     );
}
 
export default SkillCard;