import { FaRegCopyright } from 'react-icons/fa'
import CurrentYear from './CurrentYear'

const Web_Reserved = ({className}) => {
    return (
        <div className="py-[16px]">
            <div className={`flex justify-between items-center text-sm ${className}`}>
                <div className="flex items-center gap-2 relative">
                    <FaRegCopyright className="text-base" />
                    <span className="font-Inter font-normal text-[16px] leading-[36px] relative after:content-[''] after:w-[1px] after:h-5 after:bg-white after:mx-4 after:inline-block after:absolute after:top-1/2 after:translate-y-[-50%] after:right-[-1.5rem]">
                        Yoursitename <CurrentYear />
                    </span>
                    <span className="ml-[5px] font-Inter font-normal text-[16px] leading-[36px] ">All Rights Reserved</span>
                </div>
                <div className="flex gap-6 mt-2 md:mt-0 text-sm">
                    <FooterLink text="Terms & Condition" href="#" />
                    <FooterLink text="Privacy Policy" href="#" />
                    <FooterLink text="Contact Us" href="#" />
                </div>
            </div>
        </div>
    )
}

export default Web_Reserved

const FooterLink = ({ text, href }) => (
    <a
        href={href}
        className="hover:text-blue-400 transition duration-300 font-Inter font-normal text-[16px] leading-[36px] "
    >
        {text}
    </a>
);