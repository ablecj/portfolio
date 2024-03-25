import React from 'react'
import { Profile } from '../assets'
import {FaUserAlt} from 'react-icons/fa'
import {BsWhatsapp} from 'react-icons/bs'
import { MdOutlineAlternateEmail } from 'react-icons/md'

const About = () => {
  return (
    <div className='w-full flex flex-col 
      lg:flex-row px-8 md:px:-10 gap-10 lg:gap-20 lg:py-20'>
       <div className='w-full md:h-[290px]
        lg:w-1/3 flex flex-col 
         items-center border border-gray-500 
         dark:bg-transparent rounded-md'>
        <img
          src={Profile}
          className='h-[290px] p-1  rounded-md ease-in-out 
          duration-300 hover:scale-125'
          alt='profile-pic'
        />
      </div>

      <div className='w-full flex flex-col'>
        <p className='text-3xl font-bold text-black 
           dark:text-white'>
            About Me
        </p>
          
        <p className='text-lg text-black dark:text-gray-400
          leading-10'>
          Full-Stack Web Developer with ability to learn and collaborate in
          rapidly changing environments and compositions. Worked through hours
          of bootcamp structure, learning JavaScript, NodeJs, ReactJs and MongoDB. Eager to tackle web development/design challenges to
          achieve lasting impacts on user experience. My journey in web development has equipped me with the skills to architect scalable and efficient solutions, 
          from designing intuitive user interfaces using React to building robust server-side logic with Node.js. I have a keen eye for detail and a commitment to delivering high-quality,
          maintainable code. Let's collaborate to transform your digital vision into a reality.
        </p>

        <div className='mt-5 2xl:mt-10 flex flex-wrap gap-5'
         data-aos='fade-up'
         data-aos-offset='200'
         data-aos-delay='50'
         data-aos-duration='1000'
         data-aos-easing='ease-in-out'
        >
            <p className='flex gap-3 items-center justify-center
             rounded-full shadow-lg py-2 px-4 bg-[#030a1c] text-white
              cursor-pointer'>
                <FaUserAlt  size={14}/> Able C J
            </p>

            <p
            className='flex gap-3 items-center justify-center
              rounded-full shadow-lg py-2 px-4 bg-[#030a1c] text-white
              cursor-pointer'>
                <MdOutlineAlternateEmail  size={14}/> gracyebin7@gmail.com
            </p>

            <a href='https://wa.me/+917025783110' className='flex gap-3 items-center justify-center
              rounded-full shadow-lg py-2 px-4 bg-[#030a1c] text-white
              cursor-pointer'>
                <BsWhatsapp  size={14}/> +917025783110
            </a>
        </div>
      </div>
    </div>
  )
}

export default About
