const Heading = ({section, heading, className}) => {
  return (
    <div className="flex flex-col gap-[10px]">
        <h2 className={`font-Inter font-bold text-[18px] leading-[31.5px] text-P ${className}`}>{section}</h2>
        <h1 className={`font-Inter font-bold sm:text-[32px] md:text-[42px] sm:leading-[40px] md:leading-[54px] text-900 ${className}`}>{heading}</h1>
    </div>
  )
}

export default Heading