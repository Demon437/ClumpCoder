import React from 'react'
import { apple, bill, google, abt } from '../assets'
import styles, { layout } from '../style'

const Billing = () => {
  return (
    <section id='about' className='sm:py-10 py-4'>
      {/* Section heading above image and content */}
      <div className={`w-full ${styles.flexCenter} mb-4`}>
        <h2 className={`${styles.heading2} text-center`}>About Us</h2>
      </div>

      {/* Two-column content: image on left (on desktop), text on right */}
      <div className={layout.sectionReverse}>
        <div className={layout.sectionImgReverse}>
          <img
            src={abt}
            alt='billing'
            className='w-[100%] h-[100%] relative z-[5]'
          />
          <div className='absolute z-[3] -left-1/2 top-0 w-[50%] h-[50%] rounded-full white__gradient'/>
          <div className='absolute z-[0] -left-1/2 bottom-0 w-[50%] h-[50%] rounded-full pink__gradient'/>
        </div>
        <div className={`flex-1 ${styles.flexStart} flex-col mb-40`}>
          <p className={`${styles.paragraph} max-w-[600px] mt-0`}>
            ClumpCoder is a multi-faceted tech company focused on web, mobile, e-commerce,
            and AI development solutions, boasting small but dynamic team including
            web developers, Mobile developers, AI developers, designers, and testers.
            Their vision is centered around achieving 100% customer satisfaction by 
            delivering top-notch products and services at competitive prices, with 
            the goal of becoming the premier choice in computing and information technology
            services, consultancy, and development through a comprehensive service offering.
          </p>
        </div>
      </div>
    </section>
  )
}

export default Billing
