import { FaArrowRight, FaPhoneAlt } from "react-icons/fa";
import { FaFacebookF, FaLinkedinIn, FaLocationDot, FaTwitter } from "react-icons/fa6";
import { IoLogoInstagram } from "react-icons/io";
import { MdEmail } from "react-icons/md";
import Web_Reserved from "./Web_Reserved";
import background from '../assets/BACKGROUND.png';

const Footer = () => {
  return (
    <footer
        className="bg-[#192335]"
    >
     
      <div className="" />

      <div className="relative bg-no-repeat bg-cover  text-white"
        style={{ backgroundImage: `url(${background})` }}>
        <div className="container">
          <div className="pt-[186px] grid grid-cols-[300px_200px_202px_300px] gap-[100px] pb-[113px]">

            <div>
              <div className="mb-[13px]">
                <img src="Footer_Logo.png" alt="Logo" />
              </div>
              <p className="font-Inter font-normal text-[17px] leading-[26px] mb-[40px]">
                Melbourne is simply is dumiomy is text rinting Lorem Ips is simply dummy Lorem Ipsum is simply
              </p>
              <div className="flex items-center gap-[24px]">
                <Social_Side img={<FaFacebookF />} />
                <Social_Side img={<FaLinkedinIn />} />
                <Social_Side img={<IoLogoInstagram />} />
                <Social_Side img={<FaTwitter />} />
              </div>
            </div>

            <div>
              <h2 className="font-Inter font-bold text-[20px] leading-[30px] mb-[24px]">All Links</h2>
              <ul className="flex flex-col gap-[10px]">
                <Items text={"Credit industrys"} />
                <Items text={"Credit Consulting"} />
                <Items text={"Business Credit industry"} />
                <Items text={"Finance industry"} />
              </ul>
            </div>

           
            <div>
              <h2 className="font-Inter font-bold text-[20px] leading-[30px] mb-[24px]">More Service</h2>
              <ul className="flex flex-col gap-[10px]">
                <Items text={"Ui Design"} />
                <Items text={"Web design"} />
                <Items text={"Digital marketing"} />
                <Items text={"Video Editing"} />
                <Items text={"Pc Repairs"} />
              </ul>
            </div>

            <ul>
              <h2 className="font-Inter font-bold text-[20px] leading-[30px] mb-[24px]">Contact us</h2>
              <div className="flex items-center gap-[18px] group mb-3">
                <span className="text-P"><FaLocationDot /></span>
                <h2 className="font-Inter font-normal text-[17px] leading-[26px]">4517 Washington Ave. Manchester, Kentucky 39495</h2>
              </div>
              <div className="flex items-center gap-[18px] group mb-3">
                <span className="text-P"><MdEmail /></span>
                <h2 className="font-Inter font-normal text-[17px] leading-[26px]">infoname@mail.com</h2>
              </div>
              <div className="flex items-center gap-[18px] group">
                <span className="text-P"><FaPhoneAlt /></span>
                <h2 className="font-Inter font-normal text-[17px] leading-[26px]">(+888) 123 456 765</h2>
              </div>
            </ul>
          </div>

          <Web_Reserved />
        </div>
      </div>
    </footer>
  );
};

export default Footer;


const Items = ({ text }) => {
  return (
    <div className="flex items-center gap-[18px] group">
      <li className="group-hover:text-P transition-all"><FaArrowRight /></li>
      <li className="font-Inter font-normal text-[17px] leading-[26px] group-hover:text-P transition-all">
        <a href="#">{text}</a>
      </li>
    </div>
  );
};

const Social_Side = ({ img }) => {
  return (
    <div className="size-[40px] bg-[#242e3f] rounded-full flex justify-center items-center hover:bg-P transition-all cursor-pointer">
      <span className="text-white text-[16px]">{img}</span>
    </div>
  );
};
