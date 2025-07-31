import { FaStar } from 'react-icons/fa'

const GuideCard = ({ img, name, role, icon, text }) => {
  return (
    <div className="bg-white px-[50px] py-[52px] rounded-lg shadow-sm w-full max-w-sm">
      <div className="flex justify-between items-center mb-[40px]">
        <div className="flex gap-1 text-yellow-400">
          {[...Array(5)].map((_, i) => (
            <FaStar key={i} className="text-[16px]" />
          ))}
        </div>
        <div className='size-[50px] bg-P rounded-full flex justify-center items-center shrink-0'>
          <img src={icon} alt="quote icon" className="w-8 h-8" />
        </div>
      </div>

      <p className="text-900 text-[16px] mb-[40px] w-[290px]">
        {text}
      </p>

      <div className="flex items-center gap-4">
        <img src={img} alt={name} className="size-[60px]" />
        <div className='flex flex-col gap-[5px]'>
          <h4 className="font-semibold text-sm text-900">{name}</h4>
          <p className="text-gray-500 text-xs">{role}</p>
        </div>
      </div>
    </div>
  )
}

export default GuideCard
