import { FaFolderOpen, FaRegComments } from "react-icons/fa";

const Blog_Article_Card = ({ image, category, comments, title }) => {
  return (
    <div className="relative ">
     <div className="relative cursor-pointer group transition-all duration-300 hover:shadow-xl hover:scale-[1.02] rounded-lg overflow-hidden">
       <img src={image} alt={title} className="object-cover transition-transform duration-500 ease-in-out group-hover:scale-110 w-full" />
     </div>
      <div
        className="
          absolute left-[205px] transform -translate-x-1/2 -bottom-[80px]
          w-[350px] h-[165px] bg-white rounded-xl shadow-md
          px-5 py-4 
        "
      >
        <div className="flex items-center gap-[20px] mb-[34px]">
          <span className="flex items-center gap-1">
            <FaFolderOpen className="text-P" />
            {category}
          </span>
          <span className="flex items-center gap-1">
            <FaRegComments className="text-P" />
            Comments ({comments})
          </span>
        </div>

        <h3 className="font-Inter font-bold text-[21px] leading-[31px] text-900 hover:text-P transition-all w-[290px] cursor-pointer">
          {title}
        </h3>
      </div>
    </div>
  );
};

export default Blog_Article_Card;
