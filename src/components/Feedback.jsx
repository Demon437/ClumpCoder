import React from 'react'
import SpotlightCard from './SpotlightCard'

const Feedback = ({ icon, content, name, title, img }) => {
  return (
    <SpotlightCard className='max-w-[400px] mx-auto my-5' spotlightColor='rgba(0, 229, 255, 0.3)'>
      <div className='flex flex-col items-center bg-transparent rounded-[16px] px-2 py-2 w-full'>
      {/* Icon */}
      <div className="mb-4">
        {icon && (
          <img src={icon} alt="icon" className="w-12 h-12 mx-auto" />
        )}
      </div>
      <div className='flex flex-col ml-4'>
          <h4 className='font-poppins font-semibold text-[18px] leading-[28px] text-gradient bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent'>{name}</h4>
          <p className='font-poppins font-normal text-[15px] leading-[22px] text-gray-300'>{title}</p>
        </div>
      <p className='font-poppins font-normal text-[17px] leading-[28px] text-white text-center mb-6'>
        {content}
      </p>
      </div>
    </SpotlightCard>

   
  )
}

export default Feedback
