import { SKILLS } from '../../util/data';
import './Skills.css'
import SkillCard from './SkillsCard/SkillsCard';

const Skills = () => {
    return ( 
        <section className='relative ml-16'>
            <h5 className='text-2xl font-semibold mb-14'>Technical Proficiency</h5>

            <div className='skills-content gap-12 items-start flex '>
                <div className='skills grid grid-cols-2 flex-1 gap-12 '>
                    {SKILLS.map((item) => (
                        <SkillCard
                        key={item.title}
                        iconUrl={item.icon}
                        title={item.title}            
                        isActive={false} onclick={function (): void {
                            throw new Error('Function not implemented.');
                        } }/>
                    ))}
                </div>
                <div className='skills-info flex-1'></div>
            </div>
        </section>
     );
}
 
export default Skills;