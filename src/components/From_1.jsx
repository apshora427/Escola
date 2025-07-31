import { useInView } from "react-intersection-observer";
import { motion } from "framer-motion";
import background from '../assets/contact.png';
import contactImg from '../assets/contact_1.png';
import MainButton from './MainButton';

const From_1 = () => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.3, 
  });

  return (
    <section
      ref={ref}
      className="py-[130px] relative bg-no-repeat bg-cover bg-center"
      style={{ backgroundImage: `url(${background})` }}
    >
      <div className="container">
        <div className="text-center">
          <p className="font-Inter font-bold text-[18px] leading-[31.5px] text-P">Clients Review</p>
          <h2 className="font-Inter font-bold sm:text-[32px] md:text-[42px] sm:leading-[40px] md:leading-[54px] text-white mt-[8px] mb-[20px]">
            Bringing your <span className="text-blue-500">vision</span> to life
          </h2>
          <p className="text-white max-w-xl mx-auto text-sm md:text-base">
            For your car we will do everything — advice, design, repairs, and maintenance. We are the preferred choice for some.
          </p>
        </div>

        <div className="grid grid-cols-2 relative">
        
          <motion.div
            initial={{ x: -100, opacity: 0 }}
            animate={inView ? { x: 0, opacity: 1 } : {}}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="flex justify-center items-center"
          >
            <img className="" src={contactImg} alt="Contact" />
          </motion.div>

          
          <motion.div
            initial={{ x: 100, opacity: 0 }}
            animate={inView ? { x: 0, opacity: 1 } : {}}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
          >
            <form className="p-6 rounded-lg max-w-3xl mx-auto space-y-6 mt-[80px]">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <InputField placeholder="Your Name" />
                <InputField type="email" placeholder="Your Email" />
                <InputField placeholder="Phone Number" />
                <InputField placeholder="Subject" />
              </div>

              <textarea
                rows="5"
                placeholder="Message"
                className="w-full bg-transparent border border-gray-600 p-3 rounded-md text-white placeholder:text-gray-400"
              ></textarea>

              <MainButton
                textColor="text-white"
                children="Submit Now"
                hoverBgColor="bg-[#192235]"
                hoverTextColor="text-white"
              />
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default From_1;

const InputField = ({ type = "text", placeholder }) => (
  <input
    type={type}
    placeholder={placeholder}
    className="bg-transparent border border-gray-600 p-3 rounded-md text-white placeholder:text-gray-400 w-full"
  />
);
