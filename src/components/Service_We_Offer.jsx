import Heading from './Heading';
import { TiTick } from 'react-icons/ti';
import { motion } from 'framer-motion';
import MovingPattern from '../assets/Moving_Pattern.png';
import Image from '../assets/Offer.png';
import MainButton from './MainButton';
import movingImg from '../assets/MovingImage.png'

const items = [
  { key: 1, text: 'Education is the key' },
  { key: 2, text: 'A Whole Lot of Digital Love for Less' },
  { key: 3, text: 'Know what your target market wants and' },
  { key: 4, text: 'A Whole Lot of Digital Love for Less' },
];

const Service_We_Offer = () => {
  return (
    <section className='mt-[86px] relative'>
      <div className="container mx-auto px-[16px]">
        <div className='grid grid-cols-[1fr_500px] gap-[200px]'>
          <div>
            <Heading
              section={'Services we’re offering'}
              heading={'Knowledge Is power Is The Key Education'}
            />
          </div>
          <div>
            <p className='font-Inter font-normal text-[17px] leading-[26px] mb-[24px]'>
              Education is the process of acquiring knowledge, skills, values, and attitudes through various methods such as
            </p>
            <MainButton
              bgColor='bg-white'
              textColor='text-black'
              hoverBgColor='bg-blue-500'
              hoverTextColor='text-white'
              className={"border-[2px] border-P"}
              children={"Contact Us"}
            />
          </div>
        </div>

        <div className="grid lg:grid-cols-2 gap-[30px] mt-10">
          {/* Left Box */}
          <div className="flex flex-col gap-[10px] bg-[#FCCC44] py-[45px] px-[40px] rounded-[20px]">
            <h2 className="font-Inter font-bold text-[21px] leading-[31px] text-900">
              Education is the key
            </h2>
            {items.map((value) => (
              <ListItems key={value.key} text={value.text} />
            ))}
          </div>


          <div className="relative w-full h-full">

            <motion.img
              src={MovingPattern}
              alt="Moving pattern"
              className="absolute -top-[30px] right-[-20px] w-[320px]  mix-blend-multiply z-0"
              animate={{ x: [-15, 15] }}
              transition={{
                duration: 3,
                repeat: Infinity,
                repeatType: 'reverse',
                ease: 'easeInOut',
              }}
            />
            <div className='relative'>
              <img
                src={Image}
                alt="Offer"
                className="w-full h-auto rounded-[20px] z-0"
              />

              {/* Dancing floating image on top of the main image */}
              <motion.div
                animate={{
                  y: [0, -15, 0],
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
                className="absolute bottom-[-25px] right-[-30px] z-20"
              >
                <img
                  src={movingImg}
                  alt="Dancing"
                  className=""
                />
              </motion.div>
            </div>


          </div>

        </div>
      </div>
    </section>
  );
};

export default Service_We_Offer;

const ListItems = ({ text }) => {
  return (
    <div className="flex items-center gap-[10px]">
      <div className="size-[20px] bg-P flex justify-center items-center text-white rounded-full">
        <TiTick />
      </div>
      <p className="font-Inter font-normal text-[17px] leading-[26px] text-900">
        {text}
      </p>
    </div>
  );
};
