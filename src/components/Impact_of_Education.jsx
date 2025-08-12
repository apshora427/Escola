import { FaCalendarAlt, FaFolderOpen, FaUser } from 'react-icons/fa'
import img_1 from '../assets/Education_Image_1.png'
import img_2 from '../assets/Education_Image_2.png'
import vector from '../assets/vector.png'


const Impact_of_Education = () => {
    return (
        <section className=''>
            <div className=''>
                <div>

                    <div className='mb-[20px]'>
                        <img src={img_1} alt="Image" />
                        <div className="flex flex-wrap items-center text-[14px] text-gray-500 gap-[24px] mb-[8px] mt-[21px]">
                            <span className="flex items-center gap-2">
                                <FaUser className="text-[13px]" />
                                By admin
                            </span>
                            <span className="flex items-center gap-2">
                                <FaFolderOpen className="text-[13px]" />
                                Category
                            </span>
                            <span className="flex items-center gap-2">
                                <FaCalendarAlt className="text-[13px]" />
                                October 19, 2023
                            </span>
                        </div>
                    </div>
                    <div>
                        <h3 className='font-Inter font-bold text-[40px] text-900 mb-[20px]'>Exploring the Impact of Education: A Comprehensive Guide</h3>
                        <Paragraph text={"Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur,"} />
                        <Paragraph text={"Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem IpsumContrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock"} />
                    </div>


                    <div className='bg-[#f3f6fb] p-[30px] border-b border-b-[rgba(0,0,0,0.40)]'>
                        <div className='flex gap-[20px] '>
                            <div className='mt-[5px]'>
                                <img className='w-[100px]' src={vector} alt="Icon" />
                            </div>
                            <div>
                                <Paragraph text={"It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed "} />
                            </div>
                        </div>
                        <div className="flex items-center gap-3 ml-[60px]">
                            <span className="w-[72px] h-[2px] bg-P"></span>
                            <h3 className="text-[18px] font-bold text-900 font-Inter">
                                Jane Cooper
                                <span className="font-normal text-900">, CEO</span>
                            </h3>
                        </div>
                    </div>

                    <div>
                        <div className='mt-[30px]  mb-[50px]'>
                            <Paragraph text={"Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virgini"} />
                        </div>
                        <div className='grid grid-cols-2'>
                            <div>
                                <img src={img_2} alt="" />
                            </div>
                            <div>
                                <h3 className='font-Inter font-semibold text-[28px]  mb-[15px]'>Keep your free time free!</h3>
                                <Paragraph className={"w-[350px]"} text={"Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem"} />
                            </div>
                        </div>
                        <div className='mt-[30px] mb-[110px]'>
                            <Paragraph text={"Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem IpsumContrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock,"} />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Impact_of_Education

const Paragraph = ({ text, className }) => {
    return <p className={`font-Inter font-normal text-[17px] leading-[26px] text-900 mb-[20px] ${className}`}>{text}</p>
}