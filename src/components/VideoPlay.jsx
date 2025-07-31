import { useState } from "react";
import Modal from "react-modal";
import { FaPlay } from "react-icons/fa";
import image from "../assets/Passion_Img.png";
import MovingImage from "../assets/MovingImage_1.png";
import { motion } from "framer-motion";

Modal.setAppElement("#root"); 

const VideoPlay = () => {
  const [isOpen, setIsOpen] = useState(false);

  const openModal = () => setIsOpen(true);
  const closeModal = () => setIsOpen(false);

  return (
    <section className="py-[25px]">
      <div className="container mx-auto px-4">
        <div className="relative rounded-xl overflow-hidden h-[350px]">
          <div
            className="absolute inset-0 bg-cover bg-center"
            style={{ backgroundImage: `url(${image})` }}
          />
          <div className="absolute inset-0 bg-P opacity-90" />

          <motion.div
            animate={{ x: [-60, 60] }}
            transition={{
              duration: 4,
              repeat: Infinity,
              repeatType: "reverse",
              ease: "easeInOut",
            }}
            className="absolute bottom-0 right-0  z-20"
          >
            <img
              src={MovingImage}
              alt="Moving element"
              className="w-auto h-[350px] mix-blend-multiply"
            />
          </motion.div>

          <div className="relative z-10 flex flex-col justify-center h-full text-white px-6 md:px-12">
            <div className="max-w-2xl space-y-6">
              <h2 className="text-3xl md:text-5xl font-bold leading-tight">
                We Made Passion Our Raw
                <br /> Material
              </h2>

              <div className="flex items-center gap-4 mt-[57px]">
                <button
                  onClick={openModal}
                  className="w-12 h-12 rounded-full bg-yellow-400 flex items-center justify-center text-white text-lg hover:scale-110 transition duration-300 shadow-lg"
                  aria-label="Play Video"
                >
                  <FaPlay />
                </button>
                <div className="text-left">
                  <p className="text-sm">Call us now</p>
                  <p className="text-lg font-bold">+44 7700 900217</p>
                </div>
              </div>
            </div>
          </div>
        </div>

  
        <Modal
          isOpen={isOpen}
          onRequestClose={closeModal}
          contentLabel="Video Modal"
          className="w-[90%] max-w-3xl mx-auto mt-24 rounded-xl overflow-hidden shadow-2xl outline-none"
          overlayClassName="fixed inset-0 bg-black bg-opacity-70 flex justify-center items-center z-50"
        >
          <div className="relative pt-[56.25%]"> 
            <iframe
              className="absolute top-0 left-0 w-full h-full"
              src="https://www.youtube.com/embed/dQw4w9WgXcQ?autoplay=1"
              title="Video"
              allow="autoplay; fullscreen"
              allowFullScreen
            />
          </div>
        </Modal>
      </div>
    </section>
  );
};

export default VideoPlay;
