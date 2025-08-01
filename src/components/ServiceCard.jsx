
import { motion } from 'framer-motion';

const ServiceCard = ({  title, desc, bgColor, icon, className }) => {
  return (
    <motion.div
      whileHover={{ scale: 1.05 }}
      className={`bg-white p-6 rounded-xl shadow-md flex flex-col items-center text-center transition-all duration-300 group ${className} h-[298px] cursor-pointer`}
    >
      <div
        className={`w-[64px] h-[64px] rounded-md flex items-center justify-center transition-all duration-300 group-hover:rotate-180 ${bgColor}`}
      >
       <img src={icon} alt="icon" />
      </div>
      <h3 className="font-Inter font-bold text-[21px] leading-[31px] mt-[20px] mb-[15px]">{title}</h3>
      <p className="font-Inter font-normal text-[17px] leading-[26px] text-900 w-[210px]">
        {desc}
      </p>
    </motion.div>
  );
};

export default ServiceCard;
