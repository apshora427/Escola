import { FaArrowRight } from 'react-icons/fa'

const Side_Button = ({button_text, className, }) => {
  return (
   <button className={`flex items-center gap-[8px] cursor-pointer group-hover:${className}`}>
        <h4 className={`font-Inter font-bold text-[18px] leading-[36px]`}>{button_text}</h4>
        <span className={``}><FaArrowRight /></span>
    </button>
  )
}

export default Side_Button