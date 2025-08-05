import { FaArrowRight } from 'react-icons/fa';
import Brochure from '../assets/Brochure.png'

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
  { label: 'Download Brochure' },
  { label: 'Company Details' },
];

const CategoryBrochureSection = () => {
  return (
    <div className="flex flex-col gap-10">
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


      <div>
        <h2 className="text-xl font-bold mb-4">Brochure</h2>
        <div className="flex flex-col gap-2">
          {brochures.map((item, index) => (
            <div
              key={index}
              className="font-bold font-Inter text-[21px]  flex items-center gap-[20px] px-4 py-3 rounded-lg border bg-white text-900 hover:bg-P transition-all duration-300 cursor-pointer group"
            >
               <div className="">
               <img src={Brochure} alt="icon" />
              </div>
              <span className="font-medium text-black ">{item.label}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CategoryBrochureSection;
