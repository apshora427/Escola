import { FaEnvelope, FaRegEnvelope } from "react-icons/fa";
import mail from '../assets/Mail.png'

const NewsletterSection = () => {
  return (
    <section className="mt-[120px]">
      <div className="container">
        <div className=" mx-auto flex items-center justify-between gap-[24px] bg-[#00D09C] py-[35px] px-[52px]">

          <div className="flex items-center gap-[16px] text-white">
            <img src={mail} alt="icon" />
            <div className="font-bold font-Inter text-[42px] leading-[54px]  w-[445px]">
              <p>Subscribe Your Email For Newsletter</p>  
            </div>
          </div>


          <form className="flex w-full md:w-auto items-center bg-white rounded-full overflow-hidden shadow-md py-[22px] px-[32px]">
            <input
              type="email"
              placeholder="Your e-mail address"
              className="px-6 py-3 text-gray-700 focus:outline-none w-full md:w-96"
            />
            <button className="flex items-center gap-2 px-6 py-3 bg-blue-600 text-white rounded-full shadow hover:bg-blue-700 transition duration-300">
              <FaEnvelope className="text-white text-[16px]" />
              <span className="text-[16px] font-medium">Subscribe</span>
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default NewsletterSection;
