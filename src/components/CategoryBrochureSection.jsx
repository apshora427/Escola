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
  { label: 'Company Profile', isActive: false },
  { label: 'Zip File Download', isActive: true },
];

const CategoryBrochureSection = () => {
  return (
    <div className="flex flex-col gap-10">
      {/* Category Section */}
      <div>
        <h2 className="text-xl font-bold mb-4">Category</h2>
        <div className="flex flex-col gap-2">
          {categories.map((item, index) => {
            const isActive = index === 5;
            return (
              <div
                key={index}
                className={`flex items-center justify-between px-4 py-3 rounded-lg border transition-colors duration-300 cursor-pointer ${
                  isActive ? 'bg-P text-white' : 'bg-white hover:bg-blue-50 text-900'
                }`}
              >
                <div className={`flex items-center gap-3 font-medium ${
                  isActive ? 'text-white' : 'text-black'
                }`}>
                  <div className={`w-6 h-6 flex items-center justify-center rounded-full border ${
                    isActive ? 'bg-white text-P' : 'bg-white border text-P'
                  }`}>
                    <FaArrowRight size={10} />
                  </div>
                  <span>{item}</span>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Brochure Section */}
      <div>
        <h2 className="text-xl font-bold mb-4">Brochure</h2>
        <div className="flex flex-col gap-2">
          {brochures.map((item, index) => (
            <div
              key={index}
              className={`flex items-center justify-between px-4 py-3 rounded-lg border transition-colors duration-300 cursor-pointer ${
                item.isActive ? 'bg-white text-P hover:bg-blue-50' : 'bg-white text-900 hover:bg-blue-50'
              }`}
            >
              <span className={`font-medium ${
                item.isActive ? 'text-P' : 'text-900'
              }`}>{item.label}</span>
              <div className={`w-7 h-7 flex items-center justify-center rounded-full ${
                item.isActive ? 'bg-P text-white' : 'bg-blue-100 text-P'
              }`}>
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
