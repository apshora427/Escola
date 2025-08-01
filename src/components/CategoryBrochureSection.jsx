// CategoryBrochureSection.jsx
import React from 'react';
import { FaArrowRight } from 'react-icons/fa';

const categories = [
  'The Benefits',
  'Impact of Education',
  'Comprehensive Look',
  'Benefits of Education',
  'Impact of Education',
  'Comprehensive Look',
  'Guide for Students',
];

const brochures = [
  { label: 'Company Profile' },
  { label: 'Zip File Download' },
];

const CategoryBrochureSection = () => {
  return (
    <div className="flex flex-col gap-10">
      {/* Category Section */}
      <div>
        <h2 className="text-xl font-bold mb-4">Category</h2>
        <div className="flex flex-col gap-2">
          {categories.map((item, index) => (
            <div
              key={index}
              className="flex items-center justify-between px-4 py-3 rounded-lg border bg-white hover:bg-P text-black hover:text-white transition-all duration-300 cursor-pointer group"
            >
              <div className="flex items-center gap-3 font-medium text-black group-hover:text-white">
                <div className="w-6 h-6 flex items-center justify-center rounded-full border bg-white text-P transition-all duration-300 group-hover:bg-P group-hover:text-white">
                  <FaArrowRight size={10} />
                </div>
                <span>{item}</span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Brochure Section */}
      <div>
        <h2 className="text-xl font-bold mb-4">Brochure</h2>
        <div className="flex flex-col gap-2">
          {brochures.map((item, index) => (
            <div
              key={index}
              className="flex items-center justify-between px-4 py-3 rounded-lg border bg-white text-black hover:bg-P transition-all duration-300 cursor-pointer group"
            >
              <span className="font-medium text-black group-hover:text-white">{item.label}</span>
              <div className="w-7 h-7 flex items-center justify-center rounded-full bg-blue-100 text-P transition-all duration-300 group-hover:bg-P group-hover:text-white">
                <FaArrowRight size={12} />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CategoryBrochureSection;
