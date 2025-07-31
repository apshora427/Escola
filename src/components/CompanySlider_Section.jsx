import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import company_logo_1 from "../assets/company_logo_1.png";
import company_logo_2 from "../assets/company_logo_2.png";
import company_logo_3 from "../assets/company_logo_3.png";
import company_logo_4 from "../assets/company_logo_4.png";
import company_logo_5 from "../assets/company_logo_5.png";

const logos = [
  company_logo_1,
  company_logo_2,
  company_logo_3,
  company_logo_4,
  company_logo_5,
];

const CompanySlider_Section = () => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    arrows: false,
    swipeToSlide: true,
    slidesToShow: 5,
    responsive: [
      {
        breakpoint: 1024,
        settings: { slidesToShow: 4 },
      },
      {
        breakpoint: 768,
        settings: { slidesToShow: 3 },
      },
      {
        breakpoint: 480,
        settings: { slidesToShow: 2 },
      },
    ],
  };

  return (
    <section className="py-[40px]">
      <div className="container">
        <div className=" bg-white">
          <Slider {...settings}>
            {logos.map((logo, index) => (
              <div key={index} className="!flex !items-center !justify-center px-[16px] h-[80px]">
                <img
                  src={logo}
                  alt='icon'
                  className="object-contain max-w-[130px] max-h-[50px] grayscale hover:grayscale-0 transition duration-300"
                />
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </section>
  );
};

export default CompanySlider_Section;