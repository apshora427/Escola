import img_1 from '../assets/Top_Course_1.png'
import img_2 from '../assets/Top_Course_2.png'
import { TiTick } from 'react-icons/ti'
import Hard_Working from './Hard_Working'
import Hero from './Hero'

const items = [
    {
        key: 1,
        text: "Your Startup industry standard our service decesion loream saum solar sysem in the world."
    },
    {
        key: 2,
        text: "Knew About Fonts text the printing and solar minimum best service in our."
    },
    {
        key: 3,
        text: "Mistakes To Avoid to the dummy printing solar system is the main power service."
    },

]

const PowerOfEducation = () => {
    return (
        <div>
            <div>
                <div>
                    <h2 className='font-Inter font-bold sm:text-[32px] md:text-[42px] sm:leading-[40px] md:leading-[54px] text-900 mb-[25px]'>
                        Unlocking the Power of Education: A Comprehensive Look
                    </h2>
                    <p className='font-Inter font-normal text-[17px] leading-[26px] text-900 mb-[20px] w-[790px]'>
                        long established fact that a reader will be distracted by the readable content of a page when looking at its layout io The point of using Lorem Ipsum is that it has a more- or-less normal distribution of letters, as opposed to using It is the best service of every
                    </p>
                </div>
                <div>
                    <div className="mt-[32px] flex gap-[30px]">
                        <div>
                            <img className='w-[385px]' src={img_1} alt="Image" />
                        </div>
                        <div>
                            <img className='w-[385px]' src={img_2} alt="Image" />
                        </div>
                    </div>
                    <div className='flex flex-col gap-[10px] mt-[30px]'>
                        {items?.map((value) => (
                            <ListItems key={value.key} text={value.text} />
                        ))}
                    </div>
                </div>
            </div>
            <div>
                <Hard_Working/>
            </div>
        </div>
    )
}

export default PowerOfEducation

const ListItems = ({ text }) => {
    return (
        <div className='flex items-center gap-[10px]'>
            <div className='size-[20px] bg-P flex justify-center items-center text-white rounded-full'>
                <TiTick />
            </div>
            <div>
                <p className='font-Inter font-normal text-[17px] leading-[26px] text-900 '>{text}</p>
            </div>
        </div>
    )
}