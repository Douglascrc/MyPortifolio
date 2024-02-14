import './Hero.css'

const Hero = () => {
    return (
        <section className='flex relative items-center'>
            <div className=' px-2 gap-2 flex-1'>
                <h1 className='font-bold text-5xl mb-4'> Software Developer</h1>
                <p className='text-base font-normal'>
                    Studying technologies for development
                </p>
            </div>

            <div className='flex flex-1 gap-2 items-center mt-20 flex-col'>
                <div className='flex gap-2 items-end'>
                    <div className='w-20 items-center justify-center flex text-center rounded-xl'>
                        <img src="../src/assets/react.svg" alt="" />
                    </div>
                    <div className='flex gap-2 items-end'>
                        <img className='h-96 rounded-full' src="../src/assets/pfl3.png" alt="" />
                    </div>
                </div>

                <div className='flex gap-2 items-end'>
                    <div className='w-20 flex'>
                       <img className='' src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nodejs/nodejs-original-wordmark.svg" alt='' />
          
                    </div>
                    <div>
                        <img className='w-20 items-center justify-center flex text-center rounded-xl' src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/css3/css3-original.svg" alt="" />
                    </div>
                    <div>
                        <img className='w-20 items-center justify-center flex text-center rounded-xl' src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg" alt="" />
                    </div>
                    <div>
                        <img className='w-20 items-center justify-center flex text-center rounded-xl' src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/html5/html5-original.svg" alt="" />
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Hero