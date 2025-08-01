import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import img from "../assets/From_2_Image.png";
import ContactForm from "./ContactForm";

const Form_2 = () => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.3,
  });

  return (
    <section ref={ref} className="py-[80px]">
      <div className="container">
        <div className="grid grid-cols-1 md:grid-cols-2 items-center gap-10">
       
          <motion.div
            initial={{ x: -100, opacity: 0 }}
            animate={inView ? { x: 0, opacity: 1 } : {}}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="mt-[40px]"
          >
            <img src={img} alt="contact" />
          </motion.div>

          <motion.div
            initial={{ x: 100, opacity: 0 }}
            animate={inView ? { x: 0, opacity: 1 } : {}}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
          >
            <ContactForm />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Form_2;
