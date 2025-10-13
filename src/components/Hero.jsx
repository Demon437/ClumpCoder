import React, { useRef } from 'react'
import styles from '../style'
import { discount, robot } from '../assets'
import GetStarted from './GetStarted'
import VariableProximity from './VariableProximity'

const Hero = () => {
  const containerRef = useRef(null);

  return (


    <section
      id='home'
      className={`flex md:flex-row flex-col ${styles.paddingY} md:pt-0 md:pb-0`}
      ref={containerRef}
      style={{ position: 'relative' }}
    >
      <div className={`flex-1 ${styles.flexStart} flex-col xl:px-0 sm:px-16 px-6`}>
        <div className='flex flex-row items-center py-[0px] px-4 bg-discount-gradient rounded-[10px] mb-2  '>

        </div>
        <div className='flex flex-row justify-between items-center w-full'>
          <h2 className='flex-1 font-poppins font-semibold ss:text-[72px] text-[52px] text-white ss:leading-[100.8px] leading-[75px]'>
            <VariableProximity
              label={'ClumpCoder Purpose driven solutions in code.'}
              className={'variable-proximity-demo'}
              fromFontVariationSettings="'wght' 400, 'opsz' 9"
              toFontVariationSettings="'wght' 1000, 'opsz' 40"
              containerRef={containerRef}
              radius={100}
              falloff='linear'
            />
          </h2>
        </div>
        <p className={`${styles.paragraph} max-w-[470px] mt-5`}>ClumpCoder’s mission is to empower people with fairness, integrity, and empathy, building a like-minded team. We specialize in Web & Mobile Python, PHP, React, Angular, Flutter, Android, etc. AI ML, CV, TensorFlow, OpenCV, etc. Task Management tools Jira, Asana, Trello, Basecamp.
        </p>
      </div>
      <div className={`flex-1 flex ${styles.flexCenter} md:my-0 my-10 relative`}>
        <img
          src={robot}
          alt='billing'
          className='w-[100%] h-[100%] relative z-[5]'
        />
        <div className="absolute z-[0] w-[40%] h-[35%] top-0 pink__gradient" />
        <div className="absolute z-[1] w-[80%] h-[80%] rounded-full white__gradient bottom-40" />
        <div className="absolute z-[0] w-[50%] h-[50%] right-20 bottom-20 blue__gradient" />
      </div>

    </section>
  )
}

export default Hero
