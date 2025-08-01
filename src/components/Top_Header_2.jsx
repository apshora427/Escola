import { FaEnvelope, FaMapMarkerAlt, FaFacebookF, FaInstagram, FaTwitter, FaLinkedinIn } from "react-icons/fa";

const Top_Header_2 = () => {
  return (
   <div className="bg-white border-b border-gray-200 px-4 md:px-10 flex justify-between items-center text-sm py-[12px]">
   
         <div className="flex flex-wrap items-center gap-4 text-gray-700">
           <div className="flex items-center gap-2">
             <FaEnvelope className="text-P" />
             <span>info@example.com</span>
           </div>
           <div className="flex items-center gap-2">
             <FaMapMarkerAlt className="text-p" />
             <span>6391 Elgin St. Celina, 10299</span>
           </div>
         </div>
   
   
         <div className="">
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
       </div>
  )
}

export default Top_Header_2