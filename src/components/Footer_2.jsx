import { FaArrowRight, FaFacebookF, FaLinkedinIn, FaPhoneAlt, FaTwitter } from 'react-icons/fa'
import background from '../assets/Layer_2.png'
import Web_Reserved from './Web_Reserved'
import { MdEmail } from 'react-icons/md'
import { FaLocationDot } from 'react-icons/fa6'
import { IoLogoInstagram } from 'react-icons/io'

const Footer_2 = () => {
  return (
     <footer
      className="bg-[#f6f3fb]"
    >

      <div className="" />

      <div className="relative bg-no-repeat bg-cover  text-900"
        style={{ backgroundImage: `url(${background})` }}>
        <div className="container">
          <div className="pt-[136px] grid grid-cols-[300px_200px_202px_300px] gap-[100px] pb-[93px]">

            <div>
              <div className="mb-[13px]">
                <img src="Footer_Logo_1.png" alt="Logo" />
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

          <div className="relative after:content-[''] after:block after:h-[1px] after:w-full after:bg-[#4b5563] after:opacity-50 "></div>

          <Web_Reserved />
        </div>
      </div>
    </footer>
  )
}

export default Footer_2

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
    <div className="size-[40px] rounded-full flex justify-center items-center transition-all cursor-pointer border-[2px] border-white">
      <span className="text-900 hover:text-P  text-[16px]">{img}</span>
    </div>
  );
};