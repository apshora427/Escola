import { useState } from "react";
import BlogClassicCard from "./BlogClassicCard";

import Blog_Classic_1 from "../assets/Blog_Classic_1.png";
import Blog_Classic_2 from "../assets/Blog_Classic_2.png";
import Blog_Classic_3 from "../assets/Blog_Classic_3.png";

const blog_items = [
  {
    id: 1,
    img: Blog_Classic_1,
    title: "Unleashing Your Inner Genius: A Guide to Achieving Your Ambitions",
    date: "October 19, 2023",
    description:
      "Aliquam eros justo, posuere loborti viverra lao ullamcorper posuere viverra...",
  },
  {
    id: 2,
    img: Blog_Classic_2,
    title: "Educating for Success: A Guide to Achieving Your Goals",
    date: "October 18, 2023",
    description:
      "Aliquam eros justo, posuere loborti viverra lao ullamcorper posuere viverra...",
  },
  {
    id: 3,
    img: Blog_Classic_3,
    title: "Unlocking Your Potential: A Guide to Achieving Your Dreams",
    date: "October 17, 2023",
    description:
      "Aliquam eros justo, posuere loborti viverra lao ullamcorper posuere viverra...",
  },
];

const BlogClassicList = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const totalPages = 4; 

  const goToPage = (page) => {
    if (page >= 1 && page <= totalPages) {
      setCurrentPage(page);
    }
  };

  return (
    <section id="BlogClassic" className="mb-[120px]">
      <div>
       
        <div className="flex flex-col gap-[30px]">
          {blog_items.map((item) => (
            <BlogClassicCard
              key={item.id}
              img={item.img}
              date={item.date}
              title={item.title}
              description={item.description}
            />
          ))}
        </div>

     
        <div className="flex items-center gap-2 justify-center mt-6">
      
          <button
            className="px-4 py-2 bg-gray-100 rounded disabled:opacity-50"
            onClick={() => goToPage(currentPage - 1)}
            disabled={currentPage === 1}
          >
            &lt;
          </button>

          {[...Array(totalPages)].map((_, index) => {
            const pageNum = index + 1;
            return (
              <button
                key={pageNum}
                onClick={() => goToPage(pageNum)}
                className={`w-10 h-10 rounded flex items-center justify-center ${
                  currentPage === pageNum
                    ? "bg-blue-600 text-white"
                    : "bg-gray-100 text-black"
                }`}
              >
                {pageNum}
              </button>
            );
          })}

          <button
            className="px-4 py-2 bg-gray-100 rounded disabled:opacity-50"
            onClick={() => goToPage(currentPage + 1)}
            disabled={currentPage === totalPages}
          >
            &gt;
          </button>
        </div>
      </div>
    </section>
  );
};

export default BlogClassicList;
