import React from 'react'
import { FaStar } from 'react-icons/fa'
import Side_Button from './Side_Button'

const NavigateYourPath_Card = ({ img, category, title, reviews, students, profile }) => {
    return (
        <div className='bg-white p-5 rounded-xl shadow-md w-[350px]'>
            <div className='flex items-center gap-2 mb-4'>
              <div className='flex items-center gap-[10px]'>
                        <div className='size-[40px] rounded-full'>
                            <img src={profile} alt="" />
                        </div>
                        <h4 className='font-Inter text-[13px] leaidng-[21px]'>By Angela</h4>
                    </div>
                <span className='ml-auto text-sm text-P'>{students} Students</span>
            </div>

            <div className='relative cursor-pointer group transition-all duration-300 hover:shadow-xl hover:scale-[1.02] rounded-lg overflow-hidden'>
                <img 
                src={img} alt={title} 
                className=' h-[200px] rounded-md object-cover transition-transform duration-500 ease-in-out group-hover:scale-110 w-full' 
                />
               <div className='absolute bottom-[15px] right-[20px] py-[10px] px-[15px] bg-P rounded-[10px] w-[113px] flex justify-center items-center cursor-pointer'>
                 <span className=' font-Inter font-medium text-[13px] leading-[21px] text-white '>{category}</span>
               </div>
            </div>

            <div className='mt-5'>
                <div className='flex items-center gap-1 text-[#FFA534] text-[14px]'>
                    {[...Array(5)].map((_, id) => (
                        <FaStar key={id} />
                    ))}
                    <span className='font-Inter text-[13px] leaidng-[21px] text-900'>({reviews} Reviews)</span>
                </div>
                <h3 className='font-Inter font-bold text-[25px] leading-[35px] text-900 mt-[16px] mb-[14px]'>{title}</h3>
               <Side_Button button_text={"Enroll Now"} className={"text-P cursor-pointer"}/>
            </div>
        </div>
    )
}

export default NavigateYourPath_Card
