import { FaFacebookF, FaInstagram, FaPinterestP, FaTwitter } from 'react-icons/fa';
import Heading from '../components/Heading'

const icons = [
    { icon: <FaFacebookF />, link: "#" },
    { icon: <FaTwitter />, link: "#" },
    { icon: <FaInstagram />, link: "#" },
    { icon: <FaPinterestP />, link: "#" },
];

const Contact_Form = () => {
    return (
        <section className='mb-[120px]'>
            <div className="container">
                <div className='grid grid-cols-[410px_1fr] gap-[50px]'>
                    <div>
                        <div> <Heading section={"Contact us"} heading={"Do you have any question? "} className={""} />
                            <p className='text-900 font-Inter font-normal text-[17px] leading-[26px] mt-[37px]'>For your car we will do everything  advice, repairs and maintenance. We are the some preferred choice by many car owners because </p></div>

                        <div className="flex gap-[16px] mt-[30px]">
                            {icons.map((item, index) => (
                                <a
                                    key={index}
                                    href={item.link}
                                    className="w-12 h-12 flex items-center justify-center rounded-md bg-100 text-P text-xl transition-all duration-300 hover:bg-blue-600 hover:text-white"
                                >
                                    {item.icon}
                                </a>
                            ))}
                        </div>
                    </div>

                    <form action="">
                        <div className="max-w-5xl mx-auto">
                            <form className="space-y-4">

                                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                    <FormInput placeholder="Your Name" />
                                    <FormInput type="email" placeholder="Your Email" />
                                </div>

                                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                    <FormInput placeholder="Phone Number" />
                                    <FormInput placeholder="Subject" />
                                </div>

                                <FormInput placeholder="Service" />

                                <textarea
                                    rows="5"
                                    placeholder="Your Message"
                                    className="w-full p-4 bg-100 focus:outline-none rounded resize-none"
                                ></textarea>

                                <button
                                    type="submit"
                                    className="w-full bg-P text-white py-4 rounded cursor-pointer"
                                >
                                    Submit Now
                                </button>
                            </form>
                        </div>
                    </form>
                </div>
            </div>
        </section>
    )
}

export default Contact_Form

const FormInput = ({ type = "text", placeholder, className = "", ...rest }) => (
    <input
        type={type}
        placeholder={placeholder}
        className={`w-full p-4 bg-gray-100 focus:outline-none rounded ${className}`}
        {...rest}
    />
);