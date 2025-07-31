import { FaRegUser, FaStar } from "react-icons/fa"
import Side_Button from "./Side_Button"

const CoursesCard = ({ img, courseName, studentsNumber, rate, aboutCourse, profile }) => {
    return (

        <div className='bg-[#fff] w-[410px] '>
            <div className='relative cursor-pointer group transition-all duration-300 hover:shadow-xl hover:scale-[1.02] rounded-lg overflow-hidden'>
                <div>
                    <img className=' object-cover transition-transform duration-500 ease-in-out group-hover:scale-110 w-full'
                        src={img}
                        alt="" />
                </div>
                <div className='absolute top-[20px] left-[20px] bg-P text-white py-[12px] px-[17px] rounded-[8px] '>
                    <h4 className=''>{courseName}</h4>
                </div>
            </div>
            <div className='p-[40px]'>
                <div className='flex justify-between gap-[80px]'>
                    <div className='flex items-center gap-[5px]'>
                        <span className='text-P'><FaRegUser /></span>
                        <h6 className='font-Inter font-normal text-[13px] leading-[15px]'>{`${studentsNumber}`}</h6>
                    </div>
                    <div className="flex items-center gap-[8px]">
                        <ul className="flex">
                            {[...Array(5)].map((_, i) => (
                                <li key={i} className={`text-yellow-300`}><FaStar /></li>
                            ))}
                        </ul>
                        <h6 className="font-Poppins font-medium text-[16px] leading-[24px] text-gray-500">{rate}</h6>
                    </div>
                </div>
                <div className='mt-[15px]'>
                    <h2 className='font-Inter font-bold text-[25px] leading-[32px] text-900 hover:text-P transition-all w-[330px] cursor-pointer'>{aboutCourse}</h2>
                </div>
                <div className='flex justify-between mt-[20px]'>
                    <div className='flex items-center gap-[10px]'>
                        <div className='size-[40px] rounded-full'>
                            <img src={profile} alt="" />
                        </div>
                        <h4 className='font-Inter text-[13px] leaidng-[21px]'>By Angela</h4>
                    </div>
                    <div>
                        <Side_Button button_text={'Enroll Now'} />
                    </div>
                </div>
            </div>
        </div>

    )
}
export default CoursesCard