import { FaPaperPlane } from "react-icons/fa";

const NewsletterForm = () => {
  return (
    <section className="mt-[120px]">
      <div className="container">
        <div className=" mx-auto flex items-center justify-between  bg-P py-[35px] px-[52px]">

          <div className="flex items-center gap-[16px] text-white">

            <div className="flex flex-col gap-[15px]  w-[445px]">
              <p className=" font-bold font-Inter text-[42px] leading-[54px]">Newsletters</p>
              <p>Lorem Ipsum is simply dummy text of the printing</p>
            </div>
          </div>


          <form className="flex items-center justify-between overflow-hidden shadow-md py-[10px]  pl-[35px] pr-[10px] w-[700px] border-[1px] border-white ">
            <input
              type="email"
              placeholder="Enter Email Adress"
              className="text-white font-Inter font-normal text-[17px] leading-[26px]"
            />
            <button className="flex justify-between items-center  px-[35px] py-[17px]  text-white  transition duration-300 border-[1px] border-white ">
              <FaPaperPlane className="text-base" />
              <h3 className="font-Inter font-normal text-[17px] leading-[26px] w-[110px]">Browse More</h3>
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default NewsletterForm;
