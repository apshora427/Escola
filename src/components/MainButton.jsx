const MainButton = ({
  children,
  bgColor = "bg-blue-600",
  textColor = "text-white",
  hoverBgColor = "bg-white",
  hoverTextColor = "text-blue-600",
  className
}) => {
  return (
    <button
      className={`relative overflow-hidden px-[35px] py-[20px] rounded-md font-semibold
        transition-all duration-700 ease-out group cursor-pointer ${className}
        ${bgColor} ${textColor}`}
    >
     
      <span
        className={`relative z-10 transition-colors duration-700 ease-out group-hover:${hoverTextColor}`}
      >
        {children}
      </span>

     
      <span
        className={`
          absolute bottom-0 left-0 w-full h-full z-0 ${hoverBgColor}
          transform origin-bottom-left scale-x-0 scale-y-0 rotate-12
          transition-all duration-700 ease-out
          group-hover:scale-x-100 group-hover:scale-y-100 group-hover:rotate-0
        `}
      ></span>
    </button>
  );
};

export default MainButton;