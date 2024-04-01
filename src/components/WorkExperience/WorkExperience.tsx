import { useRef } from "react"
import { WORK_EXPERIENCE } from "../../utils/data.ts"
import ExperienceCard from "./ExperienceCard/ExperienceCard.tsx"
import Slider from "react-slick"
import '@mui/icons-material'

const WorkExperience = () => {
    const sliderRef = useRef<Slider>(null)

    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 2,
        slidesToScroll: 1,
        arrows: false,
        responsive: [
            {
                breakpoint: 760,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                },
            },
        ],
    }

    const slideRight = () => {
        if (sliderRef.current) {
            sliderRef.current.slickNext()
        }
    }

    const slideLeft = () => {
        if (sliderRef.current) {
            sliderRef.current.slickPrev()
        }
    }

    return ( 
        <section className="experience-container relative mx-16 my-16">
            <h5 className="font-semibold text-2xl mb-12">Work Experience</h5>

            <div className="experience-content">

                <div className="arrow-right w-8 h-8 flex items-center justify-center text-[#6751b9]  border-[#6751b9] border-2 rounded-xl bg-[#130f2a] absolute top-[55%] z-[2] cursor-pointer -right-8">
                    <span  onClick={slideRight} className="material-icons text-3xl font-medium">chevron_right</span>
                    
                </div>
                <div className="arrow-left w-8 h-8 flex items-center justify-center  text-[#6751b9] border-[#6751b9] rounded-xl border-2 absolute top-[55%] z-[2] bg-[#130f2a] cursor-pointer -left-8">
                    <span onClick={slideLeft} className="material-icons text-3xl font-medium">chevron_left</span>
                </div>
                <Slider ref={sliderRef} {...settings}>
                    {WORK_EXPERIENCE.map((item) => (
                        <ExperienceCard key={item.title} details={item}    />
                    ))}
                </Slider>
            </div>
        </section>
     );
}
 
export default WorkExperience;