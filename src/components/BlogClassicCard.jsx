import { FaUser, FaFolderOpen, FaCalendarAlt, FaArrowRight } from 'react-icons/fa'
import Side_Button from './Side_Button'
import { div } from 'framer-motion/client'

const BlogClassicCard = ({ img, date, title, description }) => {
  return (
    <div className="bg-white shadow-sm rounded-md overflow-hidden mb-6">
      <img
        src={img}
        alt="blog classic"
        className="w-full object-cover bg-gray-200"
      />
      <div className="p-6">
        <div className="flex flex-wrap items-center text-sm text-gray-500 gap-6 mb-2">
          <span className="flex items-center gap-2">
            <FaUser className="text-[13px]" />
            By admin
          </span>
          <span className="flex items-center gap-2">
            <FaFolderOpen className="text-[13px]" />
            Category
          </span>
          <span className="flex items-center gap-2">
            <FaCalendarAlt className="text-[13px]" />
            {date}
          </span>
        </div>
        <h3 className="font-Inter font-bold text-[36px] leading-[50px] text-900">
          {title}
        </h3>
        <p className="text-900 font-Inter font-normal text-[17px] leading-[26px]">{description}</p>
        <div className='mt-[33px]'>
          <Button />
        </div>
      </div>
    </div>
  )
}

export default BlogClassicCard

const Button = () => {
  return (
    <div className='group w-[172px]'>
      <button className='flex items-center gap-[8px] cursor-pointer bg-P px-[20px] py-[14px] rounded-[10px]  group-hover:bg-white transition-all'>
        <h4 className='font-Inter font-bold text-[18px] leading-[36px] text-white group-hover:text-P'>Read More</h4>
        <span className='text-white group-hover:text-P'><FaArrowRight /></span>
      </button>
    </div>
  )
}
