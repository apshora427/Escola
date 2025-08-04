import Banner_Image_1 from "../assets/Banner_Image_1.png";
import Banner_Image_2 from "../assets/Banner_Image_2.png";
import MainButton from '../components/MainButton.jsx'

const Banner = () => {
    return (
        <section className="relative w-full overflow-hidden">

           
            <div 
                className="absolute inset-0 bg-cover bg-center bg-no-repeat z-0"
                style={{ backgroundImage: `url(${Banner_Image_1})` }}
            >
            </div>

           
            <div className="relative z-10 grid grid-cols-[760px_1fr] items-center min-h-[600px]">
                <div className="ml-[230px]">
                    <h2 className="font-Inter font-bold text-[18px] leading-[31.5px] text-[#4ADA85]">
                        Click Learn Thrive
                    </h2>
                    <h1 className="font-Inter font-bold text-[60px] leading-[71px] text-white mt-[10px] mb-[10px] ">
                        Unlock your potential through education
                    </h1>
                    <p className="font-Inter font-normal text-[17px] leading-[26px] text-white mb-[30px]">Magnis viverra nisl rhoncus egestas rhoncus elit at. Massa volutpat eleifend pellentesque vivamus nulla</p>
                    <MainButton 
                    children={"Contact us"}
                    bgColor="bg-[#F8BC26]"
                    textColor="text-black"
                    hoverBgColor="bg-900"
                    hoverTextColor="text-white"
                    />
                </div>
                <div className="flex justify-end">
                    <img src={Banner_Image_2} alt="Banner Visual" className="max-w-full h-auto" />
                </div>
            </div>

        </section>
    );
};

export default Banner;
