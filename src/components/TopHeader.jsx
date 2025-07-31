import React from "react";
import { FaEnvelope, FaMapMarkerAlt, FaFacebookF, FaInstagram, FaTwitter, FaLinkedinIn } from "react-icons/fa";

const TopHeader = () => {
  return (
    <div className="bg-white border-b border-gray-200 py-2 px-4 md:px-10 flex justify-between items-center text-sm">
      {/* Left - Contact Info */}
      <div className="flex flex-wrap items-center gap-4 text-gray-700">
        <div className="flex items-center gap-2">
          <FaEnvelope className="text-blue-600" />
          <span>info@example.com</span>
        </div>
        <div className="flex items-center gap-2">
          <FaMapMarkerAlt className="text-blue-600" />
          <span>6391 Elgin St. Celina, 10299</span>
        </div>
      </div>

      {/* Right - Social Icons */}
      <div className="flex gap-4 text-gray-800">
        {[FaFacebookF, FaInstagram, FaTwitter, FaLinkedinIn].map((Icon, index) => (
          <a
            key={index}
            href="#"
            className="hover:text-blue-600 transition-colors duration-200"
          >
            <Icon />
          </a>
        ))}
      </div>
    </div>
  );
};

export default TopHeader;
