import React from 'react'
import { FaStar } from 'react-icons/fa'

const NavigateYourPath_Card = ({ img, category, title, reviews, students }) => {
    return (
        <div className='bg-white p-5 rounded-xl shadow-md w-[350px]'>
            <div className='flex items-center gap-2 mb-4'>
                <img
                    src="https://i.pravatar.cc/30"
                    alt="Instructor"
                    className='w-[35px] h-[35px] rounded-full'
                />
                <span className='text-[14px] font-medium text-gray-700'>By Angela</span>
                <span className='ml-auto text-sm text-indigo-600'>{students} Students</span>
            </div>

            <div className='relative'>
                <img src={img} alt={title} className='w-full h-[200px] object-cover rounded-md' />
                <span className='absolute bottom-3 left-3 bg-[#3C4EFF] text-white text-xs px-3 py-[6px] rounded-md'>{category}</span>
            </div>

            <div className='mt-5'>
                <div className='flex items-center gap-1 text-[#FFA534] text-[14px]'>
                    {[...Array(5)].map((_, idx) => (
                        <FaStar key={idx} />
                    ))}
                    <span className='text-gray-600 ml-2 text-[14px]'>({reviews} Reviews)</span>
                </div>
                <h3 className='text-lg font-semibold mt-3 mb-2 leading-6'>{title}</h3>
                <a href="#" className='text-[#3C4EFF] font-medium text-sm hover:underline'>Enroll Now →</a>
            </div>
        </div>
    )
}

export default NavigateYourPath_Card
