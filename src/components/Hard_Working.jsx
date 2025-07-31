const links = [
    "A Guide for Students",
    "Unlocking the Power of Education",
    "Aliquam eros justo, posuere loborti",
    "A Comprehensive Look",
    "Impact of Education: A Comprehensive Guide",
    "Giverra laoreet",
    "A Comprehensive Guide",
    "Guide for Students"
];

const Hard_Working = () => {
    return (
        <div className="mt-[60px]">
            <h4 className='font-Inter font-bold text-[26px] leading-[40px] text-900'>Hand working</h4>
            <p className="font-Inter font-normal text-[17px] leading-[26px] text-900 w-[790px]">
                Aliquam eros justo, posuere loborti vive rra laoreet matti ullamc orper posu ere viverra .Aliquam eros justo, posuer lobortis non, vive rra laoreet augue mattis fermentum ullamcorper viverra laoreet Aliquam es justo, posuere loborti viverra laoreet mat ullamcorper posue viverra .Aliquam eros justonon, viverra
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-2 gap-x-10 text-sm text-900 mt-[42px] mb-[24px]">
                {links.map((link, index) => (
                    <div key={index} className="flex items-center gap-2">
                        <span className="mt-1 h-1 w-1 bg-P rounded-full" />
                        <p className="text-[#0C0C0C] hover:text-blue-600 cursor-pointer">
                            {link}
                        </p>
                    </div>
                ))}
            </div>
            <p className="font-Inter font-normal text-[17px] leading-[26px] text-900 w-[790px]">
                Aliquam eros justo, posuere loborti viverra laoreet matti ullam corper posuere viverra .Aliquam eros justo, posuere lobortis  viverra laoreet augue mattis fermentum ullamcorper viverra laoreet Aliquas justo, posuere loborti viverra laoreet matti ullamcorper posuere viverra
            </p>
        </div>
    )
}

export default Hard_Working