import { NavLink } from "react-router-dom";
import { FaAngleDown } from "react-icons/fa";
import { useState } from "react";
import massage from "../assets/Massage.png";
import iconBg from "../assets/icon_Background.png";

const getActiveClass = ({ isActive }) =>
  isActive
    ? "text-[16px] leading-[24px] text-blue-500 font-semibold relative after:absolute after:bottom-[-4px] after:left-0 after:w-full after:h-[2px] after:bg-blue-500"
    : "text-[16px] leading-[24px] text-black hover:text-blue-400 font-medium relative after:absolute after:bottom-[-4px] after:left-0 after:w-0 hover:after:w-full after:h-[2px] after:bg-blue-400 after:transition-all after:duration-300";

const Navbar = () => {
  const [hoveredMenu, setHoveredMenu] = useState(null);
  const [showMobileMenu, setShowMobileMenu] = useState(false);

  const menuItems = [
    {
      label: "Home",
      to: "/",
      dropdown: [
        { label: "Home 01", to: "/home-01" },
        { label: "Home 02", to: "/home-02" },
        { label: "Home 03", to: "/home-03" },
        { label: "Home 04", to: "/home-04" },
        { label: "Home 05", to: "/home-05" },
      ],
    },
    { label: "About Us", to: "/about_us" },
    {
      label: "Service",
      to: "/service",
      dropdown: [
        { label: "Service", to: "/service" },
        { label: "Service 01", to: "/service_01" },
        { label: "Service 02", to: "/service_02" },
        { label: "Service Details", to: "/service_details" },
      ],
    },
    {
      label: "Pages",
      to: "/pages",
      megaMenu: true,
      columns: [
        {
          title: "Home",
          items: [
            { label: "Home 01", to: "/home-01" },
            { label: "Home 02", to: "/home-02" },
            { label: "Home 03", to: "/home-03" },
            { label: "Home 04", to: "/home-04" },
            { label: "Home 05", to: "/home-05" },
          ],
        },
        {
          title: "Service",
          items: [
            { label: "Service", to: "/service" },
            { label: "Service 01", to: "/service_01" },
            { label: "Service 02", to: "/service_02" },
            { label: "Service Details", to: "/service_details" },
          ],
        },
        {
          title: "About",
          items: [
            { label: "About Us", to: "/about_us" },
            { label: "Instructor", to: "/instructor" },
            { label: "Instructor 2", to: "/instructor-2" },
            { label: "Instructor Details", to: "/instructor-details" },
          ],
        },
        {
          title: "Blog",
          items: [
            { label: "Blog Classic", to: "/blog_classic" },
            { label: "Blog 01", to: "/blog-01" },
            { label: "Blog 02", to: "/blog-02" },
            { label: "Blog Details", to: "/blog_details" },
          ],
        },
      ],
    },
    {
      label: "Blog",
      to: "/blog",
      dropdown: [
        { label: "Blog Classic", to: "/blog_classic" },
        { label: "Blog 02", to: "/blog-02" },
        { label: "Blog 03", to: "/blog-03" },
        { label: "Blog Details", to: "/blog_details" },
      ],
    },
    { label: "Contact Us", to: "/contact_us" },
  ];

  return (
    <nav className="relative z-[100]">
      {/* Background Image */}
      <div className="absolute top-0">
        <img src={iconBg} alt="" />
      </div>

      {/* Mobile Header */}
      <div className="md:hidden flex justify-between items-center px-4 py-4 bg-white">
        <img src="/logo.png" alt="Logo" className="w-[120px]" />
        <button onClick={() => setShowMobileMenu(!showMobileMenu)}>
          <svg width="30" height="20" viewBox="0 0 24 14" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path
              d="M0.571289 0H23.4284V2.28571H0.571289V0ZM6.28557 5.71429H23.4284V8H6.28557V5.71429ZM13.4284 11.4286H23.4284V13.7143H13.4284V11.4286Z"
              fill="#252B42"
            />
          </svg>
        </button>
      </div>

      {/* Desktop Navbar */}
      <div className="hidden md:block pt-[22px] pb-[22px]">
        <div className="grid grid-cols-[200px_auto_1fr] items-center">
          {/* Logo */}
          <div className="relative">
            <div className="absolute top-[-25px] left-[45px]">
              <img src="/logo.png" alt="Logo" />
            </div>
          </div>

          {/* Menu */}
          <ul className="flex gap-[30px] items-center ml-[120px]">
            {menuItems.map((item, index) => (
              <li
                key={index}
                className="relative group"
                onMouseEnter={() => setHoveredMenu(index)}
                onMouseLeave={() => setHoveredMenu(null)}
              >
                <div className="flex items-center gap-1 cursor-pointer pb-[10px]">
                  <NavLink to={item.to} className={getActiveClass}>
                    {item.label}
                  </NavLink>
                  {(item.dropdown || item.megaMenu) && (
                    <FaAngleDown className="text-900 group-hover:text-P transition-all duration-300" />
                  )}
                </div>

                {/* Dropdown */}
                {item.dropdown && hoveredMenu === index && (
                  <ul className="absolute top-[25px] left-0 bg-white rounded-md overflow-hidden w-[180px] z-50 border border-gray-100">
                    {item.dropdown.map((dropItem, i) => (
                      <li key={i}>
                        <NavLink
                          to={dropItem.to}
                          className="block px-5 py-3 text-sm text-[#1F1F1F] transition-all duration-300 hover:bg-blue-500 hover:text-white hover:translate-x-1"
                        >
                          {dropItem.label}
                        </NavLink>
                      </li>
                    ))}
                  </ul>
                )}

                {/* Mega Menu */}
                {item.megaMenu && hoveredMenu === index && (
                  <div className="absolute left-[-100px] top-[25px] bg-white shadow-lg border border-gray-100 p-6 rounded-md grid grid-cols-4 gap-8 z-50 w-[600px]">
                    {item.columns.map((col, colIndex) => (
                      <div key={colIndex}>
                        <h4 className="text-sm font-semibold text-gray-800 mb-3 pb-2 border-b border-gray-200">
                          {col.title}
                        </h4>
                        {col.items.map((subItem, i) => (
                          <NavLink
                            key={i}
                            to={subItem.to}
                            className="block px-2 py-2 text-[14px] text-[#1F1F1F] hover:bg-blue-500 hover:text-white transition-all duration-300 hover:translate-x-1 rounded mb-1"
                          >
                            {subItem.label}
                          </NavLink>
                        ))}
                      </div>
                    ))}
                  </div>
                )}
              </li>
            ))}
          </ul>

          {/* Contact Info */}
          <div className="flex justify-end items-center mr-[40px]">
            <div className="flex gap-[17px] items-center">
              <img src={massage} alt="icon" />
              <div>
                <p className="text-[12px] leading-[18px] font-medium text-900">Need help?</p>
                <p className="text-[16px] leading-[24px] font-semibold text-900">(307) 555-0133</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {showMobileMenu && (
        <div className="md:hidden px-4 pb-4 bg-white">
          <ul className="flex flex-col gap-4 mt-4">
            {menuItems.map((item, index) => (
              <li key={index}>
                <NavLink
                  to={item.to}
                  onClick={() => setShowMobileMenu(false)}
                  className="text-black text-lg font-medium hover:text-blue-500"
                >
                  {item.label}
                </NavLink>
              </li>
            ))}
          </ul>

          {/* Mobile Contact */}
          <div className="mt-4 flex gap-3 items-center">
            <img src={massage} alt="icon" className="w-[30px]" />
            <div>
              <p className="text-sm font-medium text-900">Need help?</p>
              <p className="text-base font-semibold text-900">(307) 555-0133</p>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
