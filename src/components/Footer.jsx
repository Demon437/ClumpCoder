import React from 'react'
import styles from '../style'
import { logo } from '../assets'
import { footerLinks, socialMedia } from '../constants'
import { Meteors } from './ui/meteors'

const Footer = () => {
  return (
    <section className={`${styles.flexCenter} ${styles.paddingY} flex-col relative overflow-hidden min-h-[320px] bg-gradient-to-br from-gray-900 via-gray-800 to-black px-6 sm:px-16`}>
      <div className='pointer-events-none absolute inset-0 -z-10'>
        <Meteors number={50} minDuration={3} maxDuration={8} angle={235} />
      </div>
      <div className={`${styles.flexStart} md:flex-row flex-col mb-8 w-full`}>
        <div className='flex-1 flex flex-col justify-start mr-10'>
          <img
            src={logo}
            alt='logo'
            className='w-[150px] h-[100px] object-contain'
          />
          <p className={`${styles.paragraph} mt-4 max-w-[310px] text-white`}>
            Innovating with technology since 2010.         
          </p>
        </div>
        <div className='flex-[1.5] w-full flex flex-row justify-between flex-wrap md:mt-0 mt-10'>
          {footerLinks.map((link) => (
            <div key={link.title} className='flex flex-col ss:my-0 my-4 min-w-[150px]'>
              <h4 className='font-poppins font-medium text-[18px] leading-[27px] text-white'>
                {link.title}
              </h4>
              <ul className='list-none mt-4'>
                {link.links.map((item, index) => (
                  <li 
                    key={item.name} 
                    className={`font-poppins font-normal text-[16px] leading-[24px] text-gray-300 hover:text-blue-400 cursor-pointer ${index !== link.links.length - 1 ? 'mb-4' : 'mb-0'}`}
                  >
                    {item.name}
                  </li>
                ))}
              </ul>
              {link.title === 'Services' && (
                <div className='flex flex-row mt-28'>
                  {socialMedia.map((social, index) => (
                    <a
                      key={social.id}
                      href={social.link}
                      target='_blank'
                      rel='noopener noreferrer'
                      className={`${index !== socialMedia.length - 1 ? 'mr-5' : 'mr-0'}`}
                    >
                      <img
                        src={social.icon}
                        alt={social.id}
                        className={`w-[28px] h-[28px] object-contain cursor-pointer`}
                      />
                    </a>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
      <div className='w-full flex flex-col items-center pt-6 border-t-[1px] border-t-gray-600'>
        <p className='font-poppins font-normal text-center text-[18px] leading-[27px] text-white'>
          2024 Clumpcoder IT Solutions. All Rights Reserved.
        </p>
       
      </div>
    </section>
  )
}

export default Footer
