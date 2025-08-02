import React from "react";
import { FaFacebookF, FaTwitter, FaInstagram } from "react-icons/fa";

const ExpertCard = ({ image, name, department }) => {
  return (
    <div className="group bg-white p-4 rounded-2xl shadow-md transition-transform duration-300 hover:-translate-y-2 cursor-pointer">
      <div className="relative overflow-hidden rounded-2xl">
        <img
          src={image}
          alt={name}
          className="w-full h-auto rounded-2xl object-cover"
        />
        <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-all duration-300 flex gap-3 bg-white px-4 py-2 rounded-full shadow-md">
          <a href="#" className="text-gray-500 hover:text-blue-500 transition-colors">
            <FaFacebookF />
          </a>
          <a href="#" className="text-gray-500 hover:text-blue-500 transition-colors">
            <FaTwitter />
          </a>
          <a href="#" className="text-gray-500 hover:text-blue-500 transition-colors">
            <FaInstagram />
          </a>
        </div>
      </div>
      <div className="text-center mt-4">
        <h3 className="text-lg font-bold text-gray-900">{name}</h3>
        <p className="text-gray-500 text-sm mt-1">{department}</p>
      </div>
    </div>
  );
};

export default ExpertCard;
