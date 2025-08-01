import pattern from '../assets/Banner_Pattern.png'
import { NavLink } from 'react-router-dom'
import { MdKeyboardArrowRight } from 'react-icons/md'

const Hero = ({title, page}) => {
  return (
    <section className='bg-[#f3f6fb] relative pt-[167px] pb-[153px]'>
        <div className='absolute bottom-[0px] left-[0px]'>
            <img className='h-[400px]' src={pattern} alt="" />
        </div>
        <div className="container">
            <div className='absolute top-[40%] left-[42%]'>
                <div className='flex flex-col justify-center items-center'>
               <div>
                 <h2 className='font-Inter font-bold text-[36px] leading-[50px] text-900'>{title}</h2>
               </div>
               <div className='flex items-center gap-[20px]'>
                 <NavLink to={"/"} className='font-Inter font-bold text-[20px] leading-[30px] text-900 hover:text-P transition-all cursor-pointer'><h6>Home</h6></NavLink>
                 <span className='text-900'><MdKeyboardArrowRight /></span>
                 <h3 className='font-Inter font-bold text-[20px] leading-[30px] text-900'>{page}</h3>
               </div>
            </div>
            </div>
        </div>
    </section>
  )
}

export default Hero