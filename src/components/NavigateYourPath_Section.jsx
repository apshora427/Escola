import React from 'react'
import Slider from 'react-slick'
import NavigateYourPath_Card from './NavigateYourPath_Card'

import Top_Course_1 from '../assets/Top_Course_1.png'
import Top_Course_2 from '../assets/Top_Course_2.png'
import Top_Course_3 from '../assets/Top_Course_3.png'

const course_data = [
    {
        id: 1,
        img: Top_Course_1,
        category: 'Development',
        title: 'The Power of Personal Branding',
        reviews: 15,
        students: 50,
    },
    {
        id: 2,
        img: Top_Course_2,
        category: 'Design',
        title: 'Design of Personal Shape Our Your Path',
        reviews: 11,
        students: 20,
    },
    {
        id: 3,
        img: Top_Course_3,
        category: 'Python',
        title: 'Python for Data Science & Machine',
        reviews: 15,
        students: 30,
    },
]

const NavigateYourPath_Section = () => {
    const settings = {
        dots: false,
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: false,
        speed: 1000,
        arrows: true,
        nextArrow: <SampleNextArrow />,
        prevArrow: <SamplePrevArrow />,
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
        <section className='py-16' id="NavigatePath">
            <div className="container mx-auto px-5">
                <h2 className='text-4xl font-bold mb-10'>Navigating Your Path To Success</h2>
                <Slider {...settings}>
                    {course_data.map((item) => (
                        <NavigateYourPath_Card
                            key={item.id}
                            img={item.img}
                            category={item.category}
                            title={item.title}
                            reviews={item.reviews}
                            students={item.students}
                        />
                    ))}
                </Slider>
            </div>
        </section>
    )
}

export default NavigateYourPath_Section

const SampleNextArrow = (props) => {
    const { onClick } = props
    return (
        <div
            onClick={onClick}
            className='absolute top-[40%] -right-6 z-10 bg-[#3C4EFF] text-white w-[35px] h-[35px] rounded-full flex items-center justify-center cursor-pointer'
        >
            ➜
        </div>
    )
}

const SamplePrevArrow = (props) => {
    const { onClick } = props
    return (
        <div
            onClick={onClick}
            className='absolute top-[40%] -left-6 z-10 bg-[#3C4EFF] text-white w-[35px] h-[35px] rounded-full flex items-center justify-center cursor-pointer'
        >
            ←
        </div>
    )
}
