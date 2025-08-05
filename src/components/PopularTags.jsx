import React from "react";

const PopularTags = () => {
  const tags = [
    "Facilities",
    "Children",
    "Policy",
    "Vote",
    "Medical",
    "Education",
    "Meeting",
  ];

  return (
    <div className=" border-[3px] border-[#F9FAFB] rounded-[10px] p-[30px] bg-white shadow-sm">
      <h2 className="text-lg font-semibold mb-2">Popular Tags</h2>
      <div className="h-[2px] w-16 bg-blue-500 mb-4 rounded"></div>
      <div className="flex flex-wrap gap-[20px]">
        {tags.map((tag, index) => (
          <span
            key={index}
            className="bg-gray-100 font-Inter font-normal text-[17px] leading-[26px] py-[5px] px-[20px]"
          >
            {tag}
          </span>
        ))}
      </div>
    </div>
  );
};

export default PopularTags;
