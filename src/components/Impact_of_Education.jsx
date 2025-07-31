import img_1 from '../assets/Education_Image_1.png'
import img_2 from '../assets/Education_Image_2.png'
import vector from '../assets/vector.png'


const Impact_of_Education = () => {
    return (
        <section>
            <div className="container">
                <div className=''>
                    <div>

                        <div className='mb-[20px]'>
                            <img src={img_1} alt="Image" />
                        </div>
                        <div>
                            <h3 className='font-Inter font-bold text-[30px] text-900 mb-[20px]'>Exploring the Impact of Education: A Comprehensive Guide</h3>
                            <Paragraph text={"Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur,"} />
                            <Paragraph text={"Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem IpsumContrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock"} />
                        </div>


                        <div className='bg-[#f3f6fb] p-[30px] border-b border-b-[rgba(0,0,0,0.40)]'>
                            <div className='flex gap-[20px] items-center'>
                                <div>
                                    <img src={vector} alt="Icon" />
                                </div>
                                <div>
                                    <Paragraph text={"It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed "} />
                                </div>
                            </div>
                        </div>

                        <div>
                            <div>
                                <Paragraph text={"Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virgini"} />
                            </div>
                            <div className='grid grid-cols-2'>
                                <div>
                                    <img src={img_2} alt="" />
                                </div>
                                <div>
                                    <h3 className='font-Inter font-semibold text-[28px]'>Keep your free time free!</h3>
                                    <Paragraph text={"Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem"} />
                                </div>
                            </div>
                            <Paragraph text={"Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem IpsumContrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock,"} />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Impact_of_Education

const Paragraph = ({ text }) => {
    return <p className='font-Inter font-normal text-[17px] leading-[26px] text-900 mb-[20px]'>{text}</p>
}