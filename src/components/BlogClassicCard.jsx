import { FaUser, FaFolderOpen, FaCalendarAlt } from 'react-icons/fa'

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
        <h3 className="text-xl font-bold text-gray-900 leading-snug mb-2">
          {title}
        </h3>
        <p className="text-sm text-gray-600 leading-relaxed mb-4">{description}</p>
        <button className="bg-blue-600 text-white px-4 py-2 text-sm rounded hover:bg-blue-700 transition">
          Read More →
        </button>
      </div>
    </div>
  )
}

export default BlogClassicCard
