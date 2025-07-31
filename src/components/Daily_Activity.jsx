import { TiTick } from 'react-icons/ti'
import img_1 from '../assets/Activity_Img.png'
import Heading from './Heading'
import StatCard from './StatCard'
import icon_1 from '../assets/count_icon_1.png'
import icon_2 from '../assets/count_icon_2.png'

const items = [
    {
        key: 1,
        title: 'Smart Scholars',
        text: 'Education is the process of acquiring knowledge, skills, values, and attitudes through various methods such as teaching, training'
    },
    {
        key: 2,
        title: 'Knowledge Hub',
        text: 'Ecologists use a variety of methods, such as field observa tions, experiments'
    }
]

const Daily_Activity = () => {
    return (
        <section className='mt-[120px]'>
            <div className="container">
                <div className='grid grid-cols-[770px_1fr] gap-[80px]'>
                    <div>
                        <div className='relative'>
                            <img className='h-[370px] w-[770px]' src={img_1} alt="Image" />
                            <div className='w-[268px] h-[85px] absolute top-[20px] left-[20px] p-[12px] bg-white flex items-center gap-[15px]'>
                                <div className='bg-[#eaeefd] size-[63px] rounded-full flex justify-center items-center'>
                                    <img src="Group (1).png" alt="icon" />
                                </div>
                                <div className=''>
                                    <h4 className='font-Inter font-bold text-[21px] leading-[31px]'>Daily Activity</h4>
                                    <p className='font-Inter font-normal text-[17px] leading-[26px]'>Loream is ispam</p>
                                </div>
                            </div>
                            <div className="py-12 flex gap-6 flex-wrap">
                                <StatCard icon={icon_1} number="200+" label="Courses" />
                                <StatCard icon={icon_2} number="10k+" label="Subjects" />
                            </div>
                        </div>
                    </div>
                    <div>
                        <div>
                            <Heading section={"Top Popular Course"} heading={"Knowledge is power  education is the key"} />
                            <p className='font-Inter font-normal text-[17px] leading-[26px] text-900 mt-[17px]'>Education is the process of acquiring knowledge, skills, values, and attitudes through various methods such as teaching, training</p>
                        </div>
                        <div className='flex flex-col gap-[38px] mt-[43px]'>
                            {items?.map((values) => (
                                <List key={values.key} title={values.title} text={values.text} />
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Daily_Activity

const List = ({ title, text }) => {
    return (
        <div className='flex flex-col gap-[12px]'>
            <div className='flex items-center gap-[20px]'>
                <div className='size-[30px] bg-P text-white flex justify-center items-center rounded-full'>
                    <TiTick />
                </div>
                <h5 className='font-Inter font-bold text-[21px] leading-[31px]'>{title}</h5>
            </div>
            <div>
                <p>{text}</p>
            </div>
        </div>
    )
} 