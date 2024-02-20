import { useState } from 'react';
import { SKILLS } from '../../util/data';
import './Skills.css'
import SkillInfoCard from './SkillsInfoCard/SkillsInfoCard';
import SkillCard from './SkillsCard/SkillsCard';

const Skills = () => {
    const [selectedSkills, setSelectedSkills] = useState(SKILLS[0])

    const handleSkillsClick = (data: {title:string, icon:string,skills:{skill:string, percentagem:string}[]}) => {
        setSelectedSkills(data)
    }

    return ( 
        <section className='skills-container relative ml-16'>
            <h5 className='text-2xl font-semibold mb-14'>Technical Proficiency</h5>

            <div className='skills-content gap-12 items-start flex '>
                <div className='skills grid grid-cols-2 flex-1 gap-12 '>
                    {SKILLS.map((item) => (
                        <SkillCard
                        key={item.title}
                        iconUrl={item.icon}
                        title={item.title}            
                        isActive={selectedSkills.title === item.title} onclick={ () => {
                            handleSkillsClick(item) }}/>
                    ))}
                </div>
                <div className='skills-info flex-1'>
                    <SkillInfoCard heading={selectedSkills.title} skills={selectedSkills.skills}/>
                </div>
            </div>
        </section>
     );
}
 
export default Skills;