import React, { useRef } from "react";
import Slider from "react-slick";
import GuideCard from './GuideCard';

import Guide from '../assets/Guide_1.png';
import Vector from '../assets/vector_1.png';
import World from '../assets/world.png'; 
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import Heading from "./Heading";

const guides = [
  {
    id: 1,
    img: Guide,
    name: 'Courtney Henry',
    role: 'Marketing specialist',
    icon: Vector,
    text: 'Architecto id sint aut est molestiae reiciendis. Minima quis illo. Accusamus repudiandae neque veniam. Quasi rerum sit consequuntur aut tenetur .',
  },
  {
    id: 2,
    img: Guide,
    name: 'Ralph Edwards',
    role: 'CEO specialist',
    icon: Vector,
    text: 'Blanditiis eius neque sed voluptatibus qui velit voluptatibus dolor reiciendis. Pariatur ex ipsam mollitia at. Iste temporibus labore nihil velit',
  },
  {
    id: 3,
    img: Guide,
    name: 'Ralph Edwards',
    role: 'CEO specialist',
    icon: Vector,
    text: 'Et recusandae consequatur voluptatibus quia occaecati sed velit. Recusandae ducimus voluptas illo sunt occaecati. Fugiat nihil sed reprehenderit',
  },
];

const GuideSection = () => {
  const sliderRef = useRef(null);

  const settings = {
    dots: false,
    arrows: false,
    infinite: true,
    speed: 600,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: { slidesToShow: 1 },
      },
    ],
  };

  return (
    <section
      id="Guides"
      className="py-[130px]  relative bg-no-repeat bg-cover bg-center"
      style={{ backgroundImage: `url(${World})` }}
    >

      <div className="container">
        <div className="relative z-10">
          <div className="grid grid-cols-2 items-center mb-[60px]">
            <Heading section={"Clients review"} heading={"Expert Guidance for Your Journey"} className={"w-[414px]"} />

            <div className="flex justify-end mb-[24px] gap-[12px]">
              <button
                onClick={() => sliderRef.current?.slickPrev()}
                className="w-[40px] h-[40px] rounded-full border border-P text-P flex items-center justify-center hover:bg-blue-600 hover:text-white transition-all cursor-pointer"
              >
                <FaArrowLeft />
              </button>
              <button
                onClick={() => sliderRef.current?.slickNext()}
                className="w-[40px] h-[40px] rounded-full border border-P text-P flex items-center justify-center hover:bg-blue-600 hover:text-white transition-all cursor-pointer"
              >
                <FaArrowRight />
              </button>
            </div>
          </div>


          <Slider {...settings} ref={sliderRef}>
            {guides.map((item) => (
              <div key={item.id} className="px-3">
                <GuideCard
                  img={item.img}
                  name={item.name}
                  role={item.role}
                  icon={item.icon}
                  text={item.text}
                />
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </section>
  );
};

export default GuideSection;
