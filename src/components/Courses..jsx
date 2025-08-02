
import Heading from './Heading'
import img_1 from '../assets/Top_Course_1.png'
import img_2 from '../assets/Top_Course_2.png'
import img_3 from '../assets/Top_Course_3.png'
import profile from '../assets/profile.png'
import DancingPattern_1 from '../assets/DancingPattern_1.png'
import { motion } from "framer-motion";
import CoursesCard from './CoursesCard';

const card_items = [
    {
        id: 1,
        img: img_1,
        courseName: "Development",
        studentsNumber: "50 students",
        rate: "(15)",
        aboutCourse: "The Power of Personal Branding",
        profile: profile
    },
    {
        id: 2,
        img: img_2,
        courseName: "Design",
        studentsNumber: "30 students",
        rate: "(11)",
        aboutCourse: "Design of Personal Shape Our Your Path",
        profile: profile
    },
    {
        id: 3,
        img: img_3,
        courseName: "Python",
        studentsNumber: "20 students",
        rate: "(12)",
        aboutCourse: "Python for Data Science & Machine",
        profile: profile
    },

]

const Courses = () => {
    return (
        <section className='bg-[#fafafa] pt-[122px] pb-[90px]'>
            <div className="container">
                <div>
                    <div className='flex justify-center items-center'>
                        <Heading section={"Top Popular Course"} heading={"Building a better tomorrow"} className={"text-center"} />
                    </div>
                    <div className='grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-[30px] justify-center items-center relative mt-[60px]'>
                        {
                            card_items?.map((item, index) => {
                                return (
                                    <div key={index} className=''>
                                        <CoursesCard
                                            img={item.img}
                                            courseName={item.courseName}
                                            studentsNumber={item.studentsNumber}
                                            rate={item.rate}
                                            aboutCourse={item.aboutCourse}
                                            profile={item.profile}
                                        />
                                    </div>
                                )
                            })
                        }

                        <div className='absolute top-[450px] right-[0px] translate-1/2'>
                            <motion.div
                                animate={{
                                    y: [0, -15, 0],
                                }}
                                transition={{
                                    duration: 2,
                                    repeat: Infinity,
                                    ease: "easeInOut"
                                }}
                                className="inline-block"
                            >
                                <img
                                    src={DancingPattern_1}
                                    alt="Dancing"
                                    className="w-20 h-20 rounded-lg"
                                />
                            </motion.div>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    )
}

export default Courses  
