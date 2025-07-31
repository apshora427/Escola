import { FaArrowRight } from 'react-icons/fa6'
import img_1 from '../assets/Future_Genaration_1.png'
import img_2 from '../assets/Future_Genaration_2.png'
import img_3 from '../assets/Future_Genaration_3.png'
import img_4 from '../assets/Future_Genaration_4.png'
import FutureGenarationCard from './FutureGenarationCard'
import Heading from './Heading'
import icon_1 from '../assets/service_img_1.png'
import icon_2 from '../assets/service_img_2.png'
import icon_3 from '../assets/service_img_3.png'
import icon_4 from '../assets/service_img_4.png'
import DancingImage from '../assets/DancingPattern_2.png'
import { motion } from 'framer-motion';

const card_items = [
    {
        id: 1,
        img: img_1,
        title: 'Enim Esse Nihil',
        desc: 'Ecology is crucial for our understanding of the natural world, and is becoming',
        bgColor: '#FFE6E1',
        iconBg: '#Fec8c0',
        icon: icon_1,
    },
    {
        id: 2,
        img: img_2,
        title: 'Adipisci Magni Ab',
        desc: 'Ecology is crucial for our understanding of the natural world, and is becoming',
        bgColor: '#DDF7FB',
        iconBg: '#bdeef4',
        icon: icon_2,
    },
    {
        id: 3,
        img: img_3,
        title: 'Praesentium Amet Rerum',
        desc: 'Ecology is crucial for our understanding of the natural world, and is becoming',
        bgColor: '#FFF9E6',
        iconBg: '#Fff2b8',
        icon: icon_3,
    },
    {
        id: 4,
        img: img_4,
        title: 'Tempore Laborum Animi',
        desc: 'Ecology is crucial for our understanding of the natural world, and is becoming',
        bgColor: '#F3EAFD',
        iconBg: '#eaccfc',
        icon: icon_4,
    },
]

const FutureGeneration = () => {
    return (
        <section id='future-generation' className='mt-[120px]'>
            <div className='container'>
                <div className='relative'>
                    <div className='flex justify-center mb-[65px]'>
                        <Heading section={"Future Generations"} heading={"Preserving the earth for future generations"} className={"text-center w-[650px]"} />
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-[40px]">
                        {card_items.map(item => (
                            <FutureGenarationCard
                                key={item.id}
                                img={item.img}
                                title={item.title}
                                desc={item.desc}
                                bgColor={item.bgColor}
                                iconBg={item.iconBg}
                                icon={item.icon}
                            />
                        ))}
                    </div>
                    <div className='absolute top-[0px] right-[0px] translate-1/2'>
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
                                src={DancingImage}
                                alt="Dancing"
                                className="w-20 h-20 rounded-lg"
                            />
                        </motion.div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default FutureGeneration