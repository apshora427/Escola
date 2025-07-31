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
    <div className="border rounded-md p-4 w-fit bg-white shadow-sm">
      <h2 className="text-lg font-semibold mb-2">Popular Tags</h2>
      <div className="h-0.5 w-16 bg-blue-500 mb-4 rounded"></div>
      <div className="flex flex-wrap gap-2">
        {tags.map((tag, index) => (
          <span
            key={index}
            className="bg-gray-100 text-gray-700 px-4 py-1 rounded-md text-sm font-medium"
          >
            {tag}
          </span>
        ))}
      </div>
    </div>
  );
};

export default PopularTags;
