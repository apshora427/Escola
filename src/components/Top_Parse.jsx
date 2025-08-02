import { TiTick } from "react-icons/ti";
import Top_Parse from "../assets/Top_Parse.png"; 
import Layer_1 from "../assets/Layer_1.png";
import Heading from "../components/Heading";
import MainButton from "../components/MainButton";
import dancingImage from '../assets/DancingImage_3.png'
import dancingImage_1 from '../assets/DancingImage_4.png'
import { motion } from "framer-motion";

const Top_Parse_Section = () => {
    const items = [
        {
            key: 1,
            title: "Parse Optional",
            text: "The goal of ecology is to understand how organisms interact with each other and their environment",
        },
        {
            key: 2,
            title: "Unbranded",
            text: "Ecologists use a variety of methods, such as field observations, experiments, and modeling, to study the complex",
        },
        {
            key: 3,
            title: "Nulla Iste Commodi",
            text: "Ecologists use a variety of methods, such as field observations, experiments, and modeling, to study the complex",
        },
    ];

    return (
        <section className="bg-cover bg-no-repeat bg-center pt-[70px] pb-[440px] relative mt-[120px]"
            style={{ backgroundImage: `url(${Layer_1})` }}>
                 <div className='absolute -top-[100px] left-[0px] translate-1/2'>
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
                                    src={dancingImage}
                                    alt="Dancing"
                                    className="w-20 h-20 rounded-lg"
                                />
                            </motion.div>
                        </div>
                        <div className='absolute -top-[100px] right-[85px] translate-1/2'>
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
                                    src={dancingImage_1}
                                    alt="Dancing"
                                    className=""
                                />
                            </motion.div>
                        </div>
            <div className="container">
                <div className="grid grid-cols-[1fr_500px] gap-[200px] mb-[50px]">
                    <div>
                        <Heading
                            section={"Top Popular Course"}
                            heading={"Knowledge is power education is the key"}
                        />
                    </div>
                    <div>
                        <p className="font-Inter font-normal text-[17px] leading-[26px] mb-[24px]">
                            Education is the process of acquiring knowledge, skills, values, and attitudes through various methods such
                        </p>
                        <MainButton
                            bgColor="bg-white"
                            textColor="text-black"
                            hoverBgColor="bg-blue-500"
                            hoverTextColor="text-white"
                            className={"border-[2px] border-P"}
                            children={"Contact Us"}
                        />
                    </div>
                </div>
            </div>

            {/* Floating Box - positioned absolutely to break out */}
            <div className="absolute left-1/2 transform -translate-x-1/2 w-full max-w-[1400px] px-4">
                <div className="flex bg-white shadow-lg rounded-[24px] overflow-hidden">
                    {/* Image Section */}
                    <div className="w-1/2">
                        <img
                            src={Top_Parse}
                            alt="Top Parse"
                            className="w-full h-full object-cover"
                        />
                    </div>

                    {/* Content Section */}
                    <div className="w-1/2 p-[50px] space-y-[40px]">
                        {items.map((value) => (
                            <ListItems key={value.key} title={value.title} text={value.text} />
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Top_Parse_Section;

const ListItems = ({ title, text }) => {
    return (
        <div className="flex items-start gap-[16px]">
            <div className="w-[30px] h-[30px] rounded-full bg-blue-500 flex items-center justify-center text-white shrink-0">
                <TiTick className="text-[18px]" />
            </div>

            <div>
                <h4 className="text-gray-900 font-semibold text-[18px] mb-[4px]">
                    {title}
                </h4>
                <p className="text-[#6B7280] font-normal text-[16px] leading-[26px]">
                    {text}
                </p>
            </div>
        </div>
    );
};