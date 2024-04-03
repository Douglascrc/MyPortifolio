import './Hero.css'
import Profile from "../../assets/pfl3.png"

const Hero = () => {
    return (
        <section className='hero-container flex relative items-center ml-8 '>
            <div className='hero-content flex-1'>
                <h1 className='font-bold text-8xl mb-4'> Software Developer</h1>
                <p className='text-base text-center font-normal w-4/5'>
                    Studying technologies for development
                </p>
            </div>

            <div className='hero-img flex flex-1 flex-col items-center gap-8 mt-20'>

                <div className='flex gap-2 items-end'>
                    <div className='tech-icon w-24 h-24 items-center justify-center flex text-center border border-solid border-[#6852ba] rounded-xl' >                      
                        <img className='w-16 transition-all ease-in duration-300 hover:-translate-y-2' src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg" alt="" />
                    </div>
                    <div className='tech-icon w-24 h-24 items-center justify-center flex text-center border border-solid border-[#6852ba] rounded-xl'>
                       <img className='w-16 transition-all ease-in duration-300 hover:-translate-y-2' src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nodejs/nodejs-original-wordmark.svg" alt='' />
                    </div>
                    <img className='w-96 rounded-full transition-all ease-in duration-300 hover:-translate-y-2' src={Profile} alt="" />

                </div>

                <div className='flex gap-6 items-end justify-center'>
                    <div  className='tech-icon w-24 h-24 items-center justify-center flex text-center border border-solid border-[#6852ba] rounded-xl'>
                        <img className='w-16 transition-all ease-in duration-300 hover:-translate-y-2' src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/css3/css3-original.svg" alt="" />
                    </div>
                    <div  className='tech-icon w-24 h-24 items-center justify-center flex text-center border border-solid border-[#6852ba] rounded-xl'>
                        <img className='w-16 transition-all ease-in duration-300 hover:-translate-y-2' src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg" alt="" />
                    </div>
                    <div  className='tech-icon w-24 h-24 items-center justify-center flex text-center border border-solid border-[#6852ba] rounded-xl'>
                        <img className='w-16 transition-all ease-in duration-300 hover:-translate-y-2' src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/html5/html5-original.svg" alt="" />
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Hero