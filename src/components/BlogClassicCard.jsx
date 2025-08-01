import { FaUser, FaFolderOpen, FaCalendarAlt } from 'react-icons/fa'
import Side_Button from './Side_Button'

const BlogClassicCard = ({ img, date, title, description }) => {
  return (
    <div className="bg-white shadow-sm rounded-md overflow-hidden mb-6">
      <img
        src={img}
        alt="blog classic"
        className="w-full h-[250px] object-cover bg-gray-200"
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
       <Side_Button button_text={"Read more"} className={"text-white bg-P py-[8px] px-[8px] rounded-[10px]"}/>
      </div>
    </div>
  )
}

export default BlogClassicCard
