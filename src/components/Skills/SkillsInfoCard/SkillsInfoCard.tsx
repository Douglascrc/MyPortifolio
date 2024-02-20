import "./SkillsInfoCard.css"
import React from "react";

const SkillInfoCard = ({heading,skills}: {heading:string, skills:{ skill: string, percentagem: string }[]}) => {
    return ( <div className="min-h-72 rounded-xl border border-[#6751b9] bg-[#16112f65]  backdrop-blur-sm">
        <h6 className="text-base font-medium py-2 px-8 bg-gradient-to-br from-[#ac96ff] to-[#7c5fe6] bg-clip-text text-transparent border-b-2 border-[#6751b9]" >{heading}</h6>

        <div className="skill-info-content p-8">
            {skills.map((item,index) => (
                <React.Fragment key={`skill_${index}`}>
                    <div className="skill-info flex justify-between">
                        <p className="font-medium text-base">{item.skill}</p>
                        <p className="font-medium text-base text-[#dd8cfa]">{item.percentagem}</p>
                    </div>

                    <div className="skill-progress-bg w-full h-2 rounded-lg bg-[#382e68] my-4 ">
                        <div className="w-0 h-2  rounded-lg bg-gradient-to-br from-[#aa94fe] to-[#7d60e6] transition-all ease-in-out duration-500" style={{width:item.percentagem}}/>
                    </div>
                </React.Fragment>
            ))}
        </div>
    </div> );
}
 
export default SkillInfoCard;