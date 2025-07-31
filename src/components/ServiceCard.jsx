
import { motion } from 'framer-motion';

const ServiceCard = ({  title, desc, bgColor }) => {
  return (
    <motion.div
      whileHover={{ scale: 1.05 }}
      className="bg-white p-6 rounded-xl shadow-md flex flex-col items-center text-center transition-all duration-300 group"
    >
      <div
        className={`w-16 h-16 rounded-md flex items-center justify-center transition-all duration-300 group-hover:rotate-180 ${bgColor}`}
      >
       
      </div>
      <h3 className="font-semibold text-lg text-[#0F172A] mt-4">{title}</h3>
      <p className="text-sm text-[#334155] mt-2 leading-relaxed">
        {desc}
      </p>
    </motion.div>
  );
};

export default ServiceCard;
