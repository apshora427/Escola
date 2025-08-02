import React, { useRef } from 'react'
import Slider from 'react-slick'
import NavigateYourPath_Card from './NavigateYourPath_Card'
import profile from '../assets/profile.png'
import Top_Course_1 from '../assets/Top_Course_1.png'
import Top_Course_2 from '../assets/Top_Course_2.png'
import Top_Course_3 from '../assets/Top_Course_3.png'
import Heading from './Heading'
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa'

const course_data = [
  {
    id: 1,
    img: Top_Course_1,
    category: 'Development',
    title: 'The Power of Personal Branding',
    reviews: 15,
    students: 50,
    profile: profile,
  },
  {
    id: 2,
    img: Top_Course_2,
    category: 'Design',
    title: 'Design of Personal Shape Our Your Path',
    reviews: 11,
    students: 20,
    profile: profile,
  },
  {
    id: 3,
    img: Top_Course_3,
    category: 'Python',
    title: 'Python for Data Science & Machine',
    reviews: 15,
    students: 30,
    profile: profile,
  },
]

const NavigateYourPath_Section = () => {
  const sliderRef = useRef(null)

  const settings = {
    dots: false,
    infinite: true,
    slidesToShow: 3.3,
    slidesToScroll: 1,
    autoplay: false,
    speed: 1000,
    arrows: false, 
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 640,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  }

  return (
    <section className="mt-[120px] ml-[130px]">
      <div className="">
        <div className="flex justify-between items-end mb-[40px]">
          <Heading
            section={'Services we’re offering'}
            heading={'Navigating your path to success'}
            className={'w-[434px]'}
          />

          <div className="flex gap-[12px] mr-[130px]">
            <button
              onClick={() => sliderRef.current?.slickPrev()}
              className="w-[40px] h-[40px] rounded-full border border-P text-P flex items-center justify-center hover:text-white hover:bg-P cursor-pointer transition-all"
            >
              <FaArrowLeft />
            </button>
            <button
              onClick={() => sliderRef.current?.slickNext()}
              className="w-[40px] h-[40px] rounded-full border border-P text-P flex items-center justify-center hover:text-white hover:bg-P cursor-pointer transition-all"
            >
              <FaArrowRight />
            </button>
          </div>
        </div>

        <Slider {...settings} ref={sliderRef}>
          {course_data.map((item) => (
            <NavigateYourPath_Card
              key={item.id}
              img={item.img}
              category={item.category}
              title={item.title}
              reviews={item.reviews}
              students={item.students}
              profile={item.profile}
            />
          ))}
        </Slider>
      </div>
    </section>
  )
}

export default NavigateYourPath_Section
