import { FaArrowRight } from "react-icons/fa"
import Side_Button from "./Side_Button"

const FutureGenarationCard = ({ img, title, desc, bgColor, iconBg, icon }) => {
    return (
        <div className="grid grid-cols-2 items-center gap-[24px] p-[36px] rounded-[10px] relative" style={{ backgroundColor: bgColor }}>
            <div className="flex-1">
                <div className="w-[80px] flex items-center justify-center rounded-[10px] mb-[16px] p-[18px]" style={{ backgroundColor: iconBg }}>
                    <img src={icon} alt="" />
                </div>
               <div className="w-[240px]">
                 <h3 className="text-[20px] font-semibold mb-[8px]">{title}</h3>
                <p className="text-[15px] text-900 mb-[16px]">{desc}</p>
                <Side_Button button_text={"Read More"} className={"text-900 hover:text-P transition-all"}/>
               </div>
            </div>
            <div className="absolute bottom-0 right-[15px] ">
                <img  src={img} alt={title} className="h-[300px]" />
            </div>
        </div>
    )
}
export default FutureGenarationCard