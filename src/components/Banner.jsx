import Banner_Image_1 from "../assets/Banner_Image_1.png";
import Banner_Image_2 from "../assets/Banner_Image_2.png";

const Banner = () => {
    return (
        <section className="relative w-full h-screen overflow-hidden">
            {/* Background Image with Overlay */}
            <div 
                className="absolute inset-0 bg-cover bg-center bg-no-repeat"
                style={{ backgroundImage: `url(${Banner_Image_1})` }}
            >
                {/* Dark overlay on background */}
                <div  className="absolute inset-0 bg-900"></div>
            </div>

            {/* Right Side Complete Image */}
            <div className="absolute top-0 right-0 w-[60%] h-full">
                <img
                    src={Banner_Image_2}
                    alt="Students learning with diagonal design"
                    className="w-full h-full object-cover"
                />
            </div>

            {/* Content Container */}
            <div className="relative z-20 container mx-auto px-6 h-full">
                <div className="grid grid-cols-1 lg:grid-cols-2 items-center h-full gap-10">
                    
                    {/* Left Text Content - positioned to avoid image overlap */}
                    <div className="text-white space-y-6 pr-8">
                        <p className="font-semibold text-lg text-green-400 tracking-wide">
                            Click Learn Thrive
                        </p>
                        
                        <h1 className="font-bold text-5xl xl:text-6xl leading-tight">
                            Unlock Your Potential <br />
                            <span className="text-white">Through Education</span>
                        </h1>
                        
                        <p className="text-gray-300 text-lg leading-relaxed max-w-lg">
                            Magnis viverra nisl rhoncus egestas rhoncus elit at. Massa 
                            volutpat eleifend pellentesque vivamus nulla
                        </p>
                        
                        <div className="pt-4">
                            <button className="bg-yellow-400 hover:bg-yellow-500 text-black px-8 py-4 font-semibold rounded-lg shadow-lg transition-all duration-300 transform hover:scale-105">
                                Contact Us
                            </button>
                        </div>
                    </div>

                    {/* Empty div for grid structure - image is positioned absolutely */}
                    <div></div>
                </div>
            </div>

            {/* Additional decorative elements */}
            <div className="absolute bottom-10 left-10 space-y-2 opacity-30">
                <div className="w-2 h-2 bg-white rounded-full"></div>
                <div className="w-2 h-2 bg-white rounded-full"></div>
                <div className="w-2 h-2 bg-white rounded-full"></div>
            </div>
        </section>
    );
};

export default Banner;